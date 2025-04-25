import BaseTemplate from "@/elements/BaseTemplate/BaseTemplate";
import ProjectContainer from "@/elements/Containers/ProjectContainer/ProjectContainer";
import MyIntroHero from "@/elements/Heros/MyIntroHero/MyIntroHero";

export default function Portfolio() {
    return (
        <BaseTemplate>
            <MyIntroHero />
            <ProjectContainer />
        </BaseTemplate>
    )
}