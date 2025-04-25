import FigmaCard from "@/elements/Cards/FigmaCard";
import Popup from "@/elements/Layout/Popup/Popup";
import { Column, Grid, Row, Button, Icon, Text, Line, Heading, Badge, Flex, Accordion } from "@/once-ui/components";
import { ReactElement, useMemo, useState } from "react";
import DrayTekCertificationPopup from "./DrayTekCertificationPopup/DrayTekCertificationPopup";

export default function DrayTekCertification() {
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
                embedUrl="https://embed.figma.com/design/eUWt3Pe2Ydg6qvE2G6WEfz/Untitled?node-id=0-1&embed-host=share&theme=dark"
                allowFullScreen={true}
                mainTitle="DrayTek Certifications"
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
                                label="Next.js"
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
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="ACS"
                            />
                        </Flex>
                        <Flex fillWidth={true} direction="column">
                            <Text paddingTop="8" variant="body-default-m" onBackground="brand-strong">
                                不只是開發考試系統，而是透過實戰導向的技術設計，協助 DrayTek 建立一套具有公信力的產品認證機制，強化品牌與代理商間的技術連結
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
                                協助代理商及用戶從基礎到進階，成為網路專家
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                考核與證書發放，提升專業認證的公信力
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                代理商專屬學習系統—有效培訓內部人才，強化市場競爭力
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                品牌信任度提升，讓 User 更放心選擇 DrayTek
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
                            onClick={() => setPopupEl(<DrayTekCertificationPopup />)}
                        />
                        <Button
                            href="https://training.draytek.com/"
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