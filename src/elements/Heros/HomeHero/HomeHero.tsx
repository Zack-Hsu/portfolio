import { Grid, Text, Heading, RevealFx, Flex } from "@/once-ui/components"
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import TypeWritter from "@/elements/AnimationEffects/TypeWritter";
export default function _() {
    const titleRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (!titleRef.current) return;
        const words = Array.from(titleRef.current.children) as HTMLElement[];
        gsap.set(words, {
            transformOrigin: "0% 100%",
            transform: "translateZ(0) scaleY(1) rotateX(0) rotate(0)",
            verticalAlign: "baseline",
            opacity: 1,
        })
        gsap.from(words, {
            x: 180,
            y: 50,
            z: -300,
            scaleY: 0.01,
            rotationX: -90,
            rotation: -35,
            duration: 1.2,
            stagger: .015,
            transformOrigin: "0% 100%",
            transformStyle: "preserve-3d",
            verticalAlign: "baseline",
            opacity: 0,
            ease: "power2.out",
        });
    }, [titleRef])
    return (
        <Grid
            columns="2"
            gap="24"
            padding="24"
        >
            <Grid
                columns="1"
                gap="24"
                padding="24"
            >
                <Heading wrap="balance" variant="display-strong-l">
                    <div ref={titleRef} style={{ display: "flex", flexWrap: "wrap" }}>
                        {`Full Stack Developer`.split("").map((itm, i) => {
                            return <div key={i} style={{ minWidth: "12px", whiteSpace: "pre-wrap" }}>{itm}</div>
                        })}
                        <div style={{ marginLeft: '3rem' }}>x</div>
                        {` Freelancer`.split("").map((itm, i) => {
                            return <div key={i} style={{ minWidth: "12px" }}>{itm}</div>
                        })}
                    </div>
                </Heading>
                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-s">
                    <TypeWritter>
                        我是 Zack，擁有 7 年經驗，累積 15+ 個專案 的管理與實作經驗
                    </TypeWritter>
                    <br />
                    <TypeWritter delay={3}>
                        "技術實作 x 產品串聯：不只是開發，更擅長整合，讓技術成為業務成長的助力"
                    </TypeWritter>
                    <br />
                    <TypeWritter delay={5}>
                        "洞察需求 x 提供解決方案：擅長簡化複雜概念，轉化為高效可行的產品與系統"
                    </TypeWritter>
                    <br />
                    <TypeWritter delay={10}>
                        "高效溝通 x 團隊協作：從專案到公司層面思考，確保最大化貢獻與價值"
                    </TypeWritter>
                    <br />
                    <TypeWritter delay={15}>
                        "責任驅動 x 持續優化：對每個細節都講究，積極推動專案落地，讓技術帶來實際成效"
                    </TypeWritter>
                </Text>
            </Grid>
        </Grid >

    )
}