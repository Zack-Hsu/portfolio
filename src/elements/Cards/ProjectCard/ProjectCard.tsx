import { Card, Column, Text, Line, Row, Icon, SmartImage, Grid, Carousel } from "@/once-ui/components"
import style from "./FigmaCard.module.scss"
import { ReactNode } from "react"
import { wrap } from "module"
import FadeInUp from "@/elements/AnimationEffects/FadeInUp/FadeInUp"
interface props {
    images: { src: string, alt: string }[],
    mainTitle: string,
    mainContent?: string | ReactNode,
    footerContent?: string | ReactNode,
    width?: number,
    height?: number,
}

export default function ProjectCard(props: props) {
    const { images, mainTitle, mainContent, footerContent } = props
    return (
        <FadeInUp>
            <Card
                radius="l-4"
                direction="column"
                overflowX="hidden"
                fillWidth
            >
                {images.map((itm) => {
                    return (
                        <Carousel images={images} />
                    )
                })}
                <Column
                    paddingY="24"
                    gap="8"
                    padding="8"
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
                    paddingX="8"
                    paddingY="12"
                    gap="8"
                    vertical="center"
                    textVariant="label-default-s"
                    onBackground="neutral-medium"
                >
                    {footerContent}
                </Row>
            </Card>
        </FadeInUp>
    )
}