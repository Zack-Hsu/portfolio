import FlipReveal3D from "@/elements/AnimationEffects/FlipReveal3D/FlipReveal3D";
import style from "./TeamTaiwanHero.module.scss"
import classNames from "classnames";
import { Background, SmartImage, Grid, Heading } from "@/once-ui/components";

export default function TeamTaiwanHero() {
    return (
        <Grid
            columns="1"
            padding="0"
        >
            <div className={classNames(style.container)}>
                <FlipReveal3D className={classNames(style.tw_sentence_container)}>
                    {"“Team Taiwan! Team Taiwan!".split("").map((word, index) => (
                        <div key={index} className={classNames(style.tw_ani_text)} style={{ whiteSpace: "pre" }}>{word}</div>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={classNames(style.tw_sentence_container)} delay={1}>
                    {"Taiwan is a great country!”".split("").map((word, index) => (
                        <div key={index} className={classNames(style.tw_ani_text)}>{word}</div>
                    ))}
                </FlipReveal3D>
            </div>
            <Background
                position="relative"
                mask={{
                    cursor: true,
                }}
                gradient={{
                    colorEnd: 'static-transparent',
                    colorStart: 'accent-solid-strong',
                    display: true,
                    height: 100,
                    opacity: 100,
                    tilt: 0,
                    width: 150,
                    x: 0,
                    y: 0
                }}
                dots={{
                    color: 'accent-on-background-medium',
                    display: true,
                    opacity: 100,
                    size: '64'
                }}
                grid={{
                    color: 'neutral-alpha-medium',
                    display: true,
                    height: 'var(--static-space-32)',
                    opacity: 90,
                    width: 'var(--static-space-32)'
                }}
                lines={{
                    display: false,
                    opacity: 100,
                    size: '1'
                }}
            >
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 2 }}>
                    <Heading onBackground="brand-strong" align="center" className={style.tw_ani_text}>
                        LET'S GO
                    </Heading>
                    <Heading onBackground="brand-strong" align="center" marginTop="12" className={style.tw_ani_text}>
                        WE'RE FROM TAIWAN
                    </Heading>
                </div>
                <SmartImage src="/portfolio/images/polish/gif/team-taiwan.gif" height={30} objectFit="cover">
                </SmartImage>
            </Background>
        </Grid>

    )
}