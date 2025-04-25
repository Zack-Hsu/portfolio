import { Background, Fade, Flex, Heading, Text } from "@/once-ui/components"
import styles from "./MyIntroHero.module.scss"
import FlipReveal3D from "@/elements/AnimationEffects/FlipReveal3D/FlipReveal3D"

export default function MyIntroHero() {
    return (
        <Flex fillWidth center flex={1} vertical="center" position="relative" className={styles.container} paddingY="xl" marginBottom="32">
            <Background
                mask={{
                    x: 80,
                    y: 0,
                    radius: 100,
                }}
                position="absolute"
                gradient={{
                    display: true,
                    tilt: -35,
                    height: 50,
                    width: 75,
                    x: 100,
                    y: 40,
                    colorStart: "accent-solid-medium",
                    colorEnd: "static-transparent",
                }}
            />
            <Flex fillWidth maxWidth={'l'} minHeight={18} onBackground="neutral-medium" position="relative" paddingY="xl" paddingX="4">
                <FlipReveal3D className={styles.sentence_container}>
                    {"/* 會寫程式，也熱愛構思產品需求 */".split("").map((word, index) => (
                        <Text key={index} onBackground="neutral-weak">{word}</Text>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={styles.sentence_container} delay={.5}>
                    {"<Coding knowsProduct={true} />".split("").map((word, index) => (
                        <div key={index} className={styles.word}>{word}</div>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={styles.sentence_container} delay={1}>
                    {"/* 能接得住需求，也能把它穩穩落地 */".split("").map((word, index) => (
                        <Text key={index} onBackground="neutral-weak">{word}</Text>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={styles.sentence_container} delay={1.5}>
                    {"<Request handled={true} />".split("").map((word, index) => (
                        <div key={index} className={styles.word}>{word}</div>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={styles.sentence_container} delay={2}>
                    {" /* 你的重點，我會放在產品裡 */".split("").map((word, index) => (
                        <Text key={index} onBackground="neutral-weak">{word}</Text>
                    ))}
                </FlipReveal3D>
                <FlipReveal3D className={styles.sentence_container} delay={2.5}>
                    {"<Product focus='What Matters' />".split("").map((word, index) => (
                        <div key={index} className={styles.word}>{word}</div>
                    ))}
                </FlipReveal3D>
                <Text onBackground="neutral-weak">Zack Hsu</Text>
            </Flex>
        </Flex>
    )
}