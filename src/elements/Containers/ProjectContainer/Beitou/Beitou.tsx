import FigmaCard from "@/elements/Cards/FigmaCard";
import Popup from "@/elements/Layout/Popup/Popup";
import { Column, Grid, Row, Button, Icon, Text, Line, Heading, Badge, Flex, Accordion } from "@/once-ui/components";
import { ReactElement, useMemo, useState } from "react";
import BeitouPopup from "./BeitouPopup/BeitouPopup";
import ProjectCard from "@/elements/Cards/ProjectCard/ProjectCard";

export default function Beitou() {
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
            <ProjectCard
                mainTitle="走進中心新村的街談巷語 - 官網及展間"
                images={[{ src: "/images/projects/beitou/banner.jpeg", alt: "Strict-G" }]}
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
                                label="前端、互動設計、3D導覽整合、敘事開發"
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
                                label="Matterport SDK"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="SCSS"
                            />
                        </Flex>
                        <Flex fillWidth={true} direction="column">
                            <Text paddingTop="8" variant="body-default-m" onBackground="brand-strong">
                                整合 Matterport 3D 導覽與任務互動機制，打造具故事性與遊戲感的線上展間體驗，提升文化展示的參與度與延伸性。
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
                                提升文化展示的沉浸感與可及性：結合 Matterport 3D 掃描與自訂介面開發，讓使用者透過網頁即可身歷其境探索展場，兼顧視覺美感與效能優化。
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                打造互動式導覽體驗：運用熱點標註、語音導覽與任務解謎設計，提升使用者參與感與記憶度，賦予展品更多故事性與互動性。
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                擴展數位文化應用場景：此系統可應用於文化展覽、教育推廣、虛擬場館、房地產展示等場域，有效降低實體展示限制，實現跨地域文化傳遞。
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
                            onClick={() => setPopupEl(<BeitouPopup />)}
                        />
                        <Button
                            href="https://host.artogo.co/beitou-heart-village/space/exhib2023/zh-TW"
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