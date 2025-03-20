import BaseTemplate from "@/elements/BaseTemplate/BaseTemplate";
import FigmaCard from "@/elements/Cards/FigmaCard";
import { Column, Grid, Button, Icon, Text, Line, Heading } from "@/once-ui/components";

export default function Portfolio() {
    return (
        <BaseTemplate>
            <Column width='l' paddingY="80" horizontal="start" flex={1} >
                <Grid columns={2}>
                    <FigmaCard
                        embedUrl="https://embed.figma.com/design/eUWt3Pe2Ydg6qvE2G6WEfz/Untitled?node-id=0-1&embed-host=share&theme=dark"
                        allowFullScreen={true}
                        mainTitle="DrayTek Certifications"
                        mainContent={
                            <>
                                <h1>不只是開發系統，而是透過技術幫助品牌與客戶成長</h1>
                                <Heading
                                    onBackground="neutral-strong"
                                    variant="body-default-s"
                                >
                                    從基礎到進階，成為網路專家
                                </Heading>
                                <Heading
                                    onBackground="neutral-strong"
                                    variant="body-default-s"
                                >
                                    考核與證書發放，提升專業認證的公信力
                                </Heading>
                                <Heading
                                    onBackground="neutral-strong"
                                    variant="body-default-s"
                                >
                                    代理商專屬學習系統—有效培訓內部人才，強化市場競爭力
                                </Heading>
                                <Heading
                                    onBackground="neutral-strong"
                                    variant="body-default-s"
                                >
                                    品牌信任度提升，讓 User 更放心選擇 DrayTek
                                </Heading>
                                <p>

                                </p>
                            </>
                        }
                        footerContent={
                            <Button
                                //onClick={k}
                                prefixIcon="openLink"
                                variant="secondary"
                                size="s"
                                label="了解更多"
                            />
                        }
                    />
                </Grid>
            </Column>
        </BaseTemplate>
    )
}