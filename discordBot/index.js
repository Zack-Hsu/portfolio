const { Client, GatewayIntentBits, TextChannel } = require('discord.js');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

// 讀取環境變數
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;
const PORT = process.env.PORT || 3000;

if (!DISCORD_BOT_TOKEN || !CHANNEL_ID) {
    console.error('❌ 缺少必要的 .env 變數 DISCORD_BOT_TOKEN 或 CHANNEL_ID');
    process.exit(1);
}

// 建立 Discord bot 客戶端
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // 確保可以讀取訊息內容
    ],
});

// 建立 Express 伺服器（保留 API server，未來可擴充）
const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`🌐 API server running at http://localhost:${PORT}`);
});

// Bot 上線提示
client.once('ready', () => {
    console.log(`🤖 Bot 已登入：${client.user.tag}`);
});

// 監聽使用者訊息
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // 忽略 bot 自己

    if (message.content.startsWith('!mj ')) {
        const prompt = message.content.slice(4).trim();
        if (!prompt) {
            await message.reply('⚠️ 請提供 prompt，例如：`!mj a dragon drinking bubble tea`');
            return;
        }

        try {
            await message.reply(`🎨 收到你的指令，我會幫你送出 MidJourney prompt：「${prompt}」`);

            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel && channel instanceof TextChannel) {
                await channel.send(`/imagine prompt: ${prompt}`);
                console.log(`✅ 已送出 MidJourney 指令：${prompt}`);
            } else {
                console.error('❌ 找不到文字頻道或類型錯誤');
                await message.reply('❌ 無法找到設定中的目標頻道，請聯絡管理員');
            }
        } catch (err) {
            console.error('❌ 發送 prompt 發生錯誤：', err);
            await message.reply('❌ 發送 prompt 時發生錯誤，請稍後再試');
        }
    }
});

// 登入 Discord
client.login(DISCORD_BOT_TOKEN);
