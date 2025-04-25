import FigmaCard from "@/elements/Cards/FigmaCard";
import Popup from "@/elements/Layout/Popup/Popup";
import { Column, Grid, Row, Button, Icon, Text, Line, Heading, Badge, Flex, Accordion } from "@/once-ui/components";
import { ReactElement, useMemo, useState } from "react";
import DrayTekOffcialWebPopup from "./DrayTekOffcialWebPopup/DrayTekOffcialWebPopup";

export default function DrayTekOfficialWeb() {
    const [popupEl, setPopupEl] = useState<null | ReactElement>(null)
    const popup = useMemo(() => {
        if (!popupEl) return
        return (
            <Popup title="test" isOpen={true} onClose={() => setPopupEl(null)} >
                {popupEl}
            </Popup>
        )
    }, [popupEl])
    return (
        <>
            {popup}
            <FigmaCard
                embedUrl="https://embed.figma.com/design/eUWt3Pe2Ydg6qvE2G6WEfz/Untitled?node-id=1-2&embed-host=share&theme=dark"
                allowFullScreen={true}
                mainTitle="DrayTek Official Website"
                mainContent={
                    <>
                        <Flex
                            fillWidth={true}
                            marginBottom="8"
                        >
                            <Button
                                prefixIcon="computerDesktop"
                                variant="secondary"
                                size="s"
                                label="前端, 後端, 資料庫, 系統架構"
                            />
                        </Flex>
                        <Flex
                            gap="8"
                            fillWidth={true}
                        >
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="Modx"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="HTML, Css, Javascript"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="PHP"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="MySQL"
                            />
                        </Flex>
                        <Flex fillWidth={true} direction="column">
                            <Text paddingTop="8" variant="body-default-m" onBackground="brand-strong">
                                提升網站性能與 SEO 效能：透過 MODX 的內建快取與輕量化設計，優化網站載入速度，並改善搜尋引擎排名。
                            </Text>
                            <Line
                                fillWidth={true}
                                gap="40"
                                marginY="8"
                            />
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                強化品牌形象與用戶體驗：優化 UI/UX 設計，提升用戶的瀏覽體驗，並強化 DrayTek 作為專業網通品牌的形象。
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                促進內外部溝通效率：透過表單與內部系統的整合，打通客戶與公司內部工程團隊的溝通流程，提升整體服務品質。

                            </Heading>
                        </Flex>
                    </>
                }
                footerContent={
                    <Flex
                        fillWidth={true}
                        gap="8"
                        vertical="center"
                    >
                        <Button
                            variant="secondary"
                            size="s"
                            label="了解更多"
                            onClick={() => setPopupEl(<DrayTekOffcialWebPopup />)}
                        />
                        <Button
                            href="https://www.draytek.com/"
                            variant="secondary"
                            size="s"
                            label="前往網站"
                            prefixIcon="openLink"
                        />
                    </Flex>
                }
            />
        </>
    )
}