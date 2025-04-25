import Popup from "@/elements/Layout/Popup/Popup";
import { Accordion, Flex, Heading, Text } from "@/once-ui/components";

export default function StrictGPopup() {
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
                    Strict-G
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
                    為 BANDAI 鋼彈服飾品牌 STRICT-G 打造台灣官方網站，整合品牌資訊與購物服務，並確保網站在行銷維運與使用體驗上的穩定與彈性。

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
                        <li>設計清晰的產品資訊架構與分類策略</li>
                        <li>客製化後台欄位，簡化商品與內容維護流程</li>
                        <li>導入響應式設計與快取邏輯，優化瀏覽體驗與載入效能</li>
                        <li>整合基本 SEO 與結構優化，提升搜尋能見度</li>
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
                        <li>規劃資訊架構與購物流程</li>
                        <li>客製後台管理邏輯，提升操作效率</li>
                        <li>實作網站前端介面與效能優化</li>
                        <li>提供後台操作教學與維運協助</li>
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
                        <li>品牌形象與購物體驗一致化，提升轉換率</li>
                        <li>簡化內部操作流程，節省管理時間</li>
                        <li>有效強化搜尋曝光與使用者回訪率</li>
                    </ul>
                </Text>
            </Accordion>
        </>
    )
}