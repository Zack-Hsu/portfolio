import Popup from "@/elements/Layout/Popup/Popup";
import { Accordion, Heading, Text } from "@/once-ui/components";

export default function DrayTekOffcialWebPopup() {
    return (
        <>
            <Heading
                as="h1"
                onBackground="neutral-strong"
                variant="body-default-xl"
                paddingY="4"
                align="center"
                style={{ width: "100%" }}
            >
                DrayTek 官方網站
            </Heading>
            <Accordion
                title="📌 專案簡介與目標"
                open={true}
                background="page"
            >
                <Text
                    variant="body-default-s"
                >
                    DrayTek 為國際知名網通設備品牌，官網需支援全球多語系市場、龐大的產品型錄管理與客戶服務機制，並對穩定性與彈性管理有高度要求。本案以 MODX 做為核心 CMS 架構，協助公司完成「網站重構」、「資料模組化」、「企業內部流程整合」等多項任務。
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
                        <li>多語系內容管理系統（繁體中文、英文）</li>
                        <li>產品型錄與韌體下載模組：支援產品分類、多版本管理、作業系統對應、Checksum、發布日期等欄位</li>
                        <li>
                            客製化問題回報表單：
                            <ul>
                                <li>使用者填單回報問題，表單自動依產品分類與地區分派處理</li>
                                <li>自動寄送 Email 通知對應單位</li>
                                <li>系統自動產生 Ticket Number 並回傳給用戶</li>
                                <li>串接內部客服處理系統，可根據 Ticket 進行進度追蹤與回覆</li>
                            </ul>
                        </li>
                        <li>MODX MIGX 模組化內容管理：行銷團隊可快速新增或編輯產品、下載資料、FAQ 等內容</li>
                        <li>SEO 與網站效能優化：自動生成 sitemap、Meta tag 設定、資源延遲載入等功能提升搜尋曝光與載入速度</li>
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
                    🧑‍💻 全端開發｜產品架構設計｜技術整合
                    <ul>
                        <li>主導整體架構設計與 MODX 模組規劃</li>
                        <li>撰寫自定義 PHP 元件與 Email API 整合邏輯</li>
                        <li>開發 MIGX-based 多欄位維護機制，支援產品模組快速維護</li>
                        <li>負責與內部 IT 團隊協作串接客服系統 API</li>
                        <li>與行銷部門共同設計後台操作流程，提升非技術人員的維護效率</li>
                        <li>網站上線後持續進行維運與功能優化</li>
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
                        <li>🌍 支援全球用戶：多語系架構讓代理商與用戶都能無障礙操作與下載資源</li>
                        <li>⏱️ 加快客服處理流程：由表單自動分派到內部單位，處理時效與效率大幅提升</li>
                        <li>🧩 高度模組化後台：讓行銷團隊不需依賴工程師也能快速維護網站內容</li>
                        <li>📊 提升品牌專業形象：全站 UI/UX 與性能優化後，使用體驗與品牌信任度顯著提高</li>
                    </ul>
                </Text>
            </Accordion>
        </>
    )
}