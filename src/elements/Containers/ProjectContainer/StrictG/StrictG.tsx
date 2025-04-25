import FigmaCard from "@/elements/Cards/FigmaCard";
import Popup from "@/elements/Layout/Popup/Popup";
import { Column, Grid, Row, Button, Icon, Text, Line, Heading, Badge, Flex, Accordion } from "@/once-ui/components";
import { ReactElement, useMemo, useState } from "react";
import StrictGPopup from "./StrictGPopup/StrictGPopup";
import ProjectCard from "@/elements/Cards/ProjectCard/ProjectCard";

export default function StrictG() {
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
                mainTitle="Strict-G 台灣官網"
                images={[{ src: "/images/projects/strict-g/banner.webp", alt: "Strict-G" }]}
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
                                label="電商整合、前端、後端、品牌形象建置"
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
                                label="WordPress"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="Woocommerce"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="Elementor"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="Blocky"
                            />
                            <Button
                                prefixIcon="codeBracket"
                                variant="secondary"
                                size="s"
                                label="HTML, CSS, Javascript"
                            />
                        </Flex>
                        <Flex fillWidth={true} direction="column">
                            <Text paddingTop="8" variant="body-default-m" onBackground="brand-strong">
                                整合電商功能流程：透過 WooCommerce 建立商品上架、購物車與訂單管理機制，提供完整且順暢的購物體驗。
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
                                優化網站效能與 SEO 設定
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                建立 RWD 響應式前端介面
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                整合完整購物流程（商品、結帳、訂單）
                            </Heading>
                            <Heading
                                onBackground="neutral-strong"
                                variant="body-default-s"
                                paddingY="4"
                            >
                                客製後台介面，提升管理效率
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
                            onClick={() => setPopupEl(<StrictGPopup />)}
                        />
                        <Button
                            href="https://strict-g.com.tw/"
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