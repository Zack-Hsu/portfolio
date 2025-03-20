import { Card, Column, Text, Line, Row, Icon, SmartImage, Grid } from "@/once-ui/components"
import style from "./FigmaCard.module.scss"
import { ReactNode } from "react"
interface props {
    embedUrl: string,
    allowFullScreen: boolean,
    mainTitle: string,
    mainContent?: string | ReactNode,
    footerContent?: string | ReactNode,
    width?: number,
    height?: number,
}

export default function FigmaCard(props: props) {
    const { embedUrl, allowFullScreen, mainTitle, mainContent, footerContent } = props
    return (
        <Grid columns={1} padding="2">
            <Card
                fillWidth
                radius="l-4"
                direction="column"
                overflowX="hidden"
            >
                <iframe className={style.figmaIframe} src={embedUrl} allowFullScreen={allowFullScreen} />
                <Column
                    fillWidth
                    paddingX="20"
                    paddingY="24"
                    gap="8"
                >
                    <Text variant="body-default-xl" onBackground="brand-strong">
                        {mainTitle}
                    </Text>
                    <Text
                        onBackground="neutral-strong"
                        variant="body-default-s"
                    >
                        {mainContent}
                    </Text>
                </Column>
                <Line background="neutral-alpha-medium" />
                <Row
                    paddingX="20"
                    paddingY="12"
                    gap="8"
                    vertical="center"
                    textVariant="label-default-s"
                    onBackground="neutral-medium"
                >
                    {footerContent}
                </Row>
            </Card>
        </Grid>
    )
}