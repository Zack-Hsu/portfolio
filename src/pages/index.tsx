import FlipReveal3D from "@/elements/AnimationEffects/FlipReveal3D/FlipReveal3D";
import PolishTemplate from "@/elements/PolishTemplate/PolishTemplate";
import { Background } from "@/once-ui/components";
import TeamTaiwanHero from "@/elements/Heros/TeamTaiwanHero/TeamTaiwanHero";
export default function () {
    return (
        <PolishTemplate>
            <Background
                position="relative"
                gradient={{
                    display: true,
                    x: 100,
                    y: 60,
                    width: 70,
                    height: 50,
                    tilt: -40,
                    opacity: 30,
                    colorStart: "accent-background-strong",
                    colorEnd: "page-background",
                }}
            >
                <TeamTaiwanHero />
            </Background>
        </PolishTemplate>
    )
}