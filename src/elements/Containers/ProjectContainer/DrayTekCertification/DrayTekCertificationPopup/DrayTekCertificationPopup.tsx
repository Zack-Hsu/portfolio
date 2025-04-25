import Popup from "@/elements/Layout/Popup/Popup";
import { Accordion, Heading, Text } from "@/once-ui/components";

export default function DrayTekCertificationPopup() {
    return (
        <>
            <Heading
                as="h1"
                onBackground="neutral-strong"
                variant="body-default-xl"
                paddingY="4"
                align="center"
            >
                DrayTek Certifications
            </Heading>
            <Accordion
                title="📌 專案簡介"
                open={true}
                background="page"
            >
                <Text
                    variant="body-default-s"
                >
                    建立一套涵蓋學科與實體操作的 DrayTek 認證考試系統，協助代理商及終端用戶從入門到進階，循序掌握網通產品專業知識，提升整體市場信任度。
                </Text>
            </Accordion>
            <Accordion
                title="🎯 專案目標"
                open={true}
            >
                <Text
                    variant="body-default-s"
                >
                    <ul>
                        <li>建立具公信力與專業性的認證機制</li>
                        <li>讓學員透過考試驗證技術能力，獲得官方認可的證書</li>
                        <li>強化公司與代理商內部訓練效率，快速建立團隊戰力</li>
                    </ul>
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
                        <li>學科測驗模組：支援單選、多選題型，提供即時評分與答題分析</li>
                        <li>實體設備操作考試：考生遠端登入DrayTek Router，依題目操作Router 畫面進行考試設定</li>
                        <li>ACS API 整合：讀取 TR-069 設備參數，與標準答案比對驗證</li>
                        <li>證書發放系統：通過考試即自動生成電子證書並通知發送</li>
                        <li>代理商專屬後台：管理成員、追蹤學習進度、檢視考試結果</li>
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
                        <li>前後端開發React / Node.js / PHP）</li>
                        <li>資料庫設計以及建立</li>
                        <li>ACS 功能串接</li>
                        <li>規劃考試流程與後台邏輯</li>
                        <li>架設網路設備</li>
                        <li>即時比對考試答案功能</li>
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
                        <li>提升代理商與用戶對 DrayTek 品牌的信任與認同感</li>
                        <li>建立明確的專業認證路徑，強化品牌技術形象</li>
                        <li>協助市場推廣及人員培訓，為長期合作奠定基礎</li>
                    </ul>
                </Text>
            </Accordion>
        </>
    )
}