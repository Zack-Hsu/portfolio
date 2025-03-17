"use client";

import React, { useState } from "react";
import {
    Text,
    Icon,
    SmartImage,
    Line,
    Card,
    Fade,
    Column,
    Row,
    Grid,
    Background
} from "@/once-ui/components";

import BaseTemplate from "@/elements/BaseTemplate/BaseTemplate";
import HomeHero from "@/elements/Heros/HomeHero"
import FlipReveal3D from "@/elements/AnimationEffects/FlipReveal3D";
import PolishTemplate from "@/elements/PolishTemplate/PolishTemplate";
import ProjectCard from "@/elements/Cards/ProjectCard/ProjectCard";
export default function Home() {
    const [iconIsActive, setIconIsActive] = useState(false)
    return (
        <PolishTemplate>
            <Background
                position="absolute"
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
            />
            <Grid columns={1} position="relative" width="l">
                <Grid columns={1} position="relative" width="l">
                    <HomeHero />
                    <Grid columns={1} width="s" align="center" marginTop="xl">
                        <ProjectCard
                            images={[
                                { src: '/images/projects/prison/prison.png', alt: "Prison Main" },
                                { src: '/images/projects/prison/p1.png', alt: "Prison Main" },
                                { src: '/images/projects/prison/p2.png', alt: "Prison Main" },
                            ]}
                            title="國防部軍人監獄"
                            description="這是一個 3D 虛擬導覽 專案，結合 Unity、krpano 以及 前端網頁技術，打造線上沉浸式的 軍事監獄歷史展示。使用者可透過 互動式 3D 模型 和 全景視角 瀏覽監獄內部環境，並查看相關的歷史資訊、影像與解說。"
                            link="https://flying.myds.me/XindianMilitaryPrison/"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </PolishTemplate >
    );
}
