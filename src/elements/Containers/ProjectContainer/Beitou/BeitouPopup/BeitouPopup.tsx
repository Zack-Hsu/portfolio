import Popup from "@/elements/Layout/Popup/Popup";
import { Accordion, Flex, Heading, Text } from "@/once-ui/components";

export default function BeitouPopup() {
    return (
        <>
            <Flex fillWidth center>
                <Heading
                    as="h1"
                    onBackground="neutral-strong"
                    variant="body-default-xl"
                    paddingY="4"
                    align="center"
                >
                    走進中心新村的街談巷語 - 官網及展間
                </Heading>
            </Flex>
            <Accordion
                title="📌 專案簡介"
                open={true}
                background="page"
            >
                <Text
                    variant="body-default-s"
                >
                    北投心村常設展透過 Matterport 3D 空間掃描，結合前端自訂介面，打造線上沉浸式展覽體驗。觀展者可透過網頁自由遊走於展區之中，聆聽語音導覽、解鎖互動任務，重現眷村生活日常。
                </Text>
            </Accordion>
            <Accordion
                title="⚙️ 系統功能"
                open={false}
            >
                <Text
                    variant="body-default-s"
                >
                    <ul>
                        <li>整合 Matterport SDK，實作視角控制與熱點標註</li>
                        <li>多媒體熱點展示：可嵌入影片、語音、文字、圖片</li>
                        <li>任務機制設計：結合展覽內容的選擇題互動，引導深入觀察展品</li>
                        <li>支援多區切換導覽，模擬真實空間行走</li>
                        <li>響應式設計與效能優化，跨裝置皆可順暢體驗</li>
                    </ul>
                </Text>
            </Accordion>
            <Accordion
                title="💼 我的角色"
                open={false}
            >
                <Text
                    variant="body-default-s"
                >
                    🧑‍💻 前端開發｜互動邏輯設計｜Matterport 技術整合
                    <ul>
                        <li>建構整體網站架構與頁面介面</li>
                        <li>串接 Matterport API 並開發導覽互動功能</li>
                        <li>設計與實作任務遊戲邏輯</li>
                    </ul>
                </Text>
            </Accordion>
            <Accordion
                title="🏆 專案效益"
                open={false}
            >
                <Text
                    variant="body-default-s"
                >
                    <ul>
                        <li>將實體展覽延伸至線上，打破場地限制，提升觸及率</li>
                        <li>強化觀展互動性，提升使用者參與感與停留時間</li>
                        <li>增加文化教育推廣的趣味性與數位保存價值</li>
                        <li>建立可複製模板，供日後其他展覽重用與擴展</li>
                    </ul>
                </Text>
            </Accordion>
        </>
    )
}