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

} from "@/once-ui/components";

import BaseTemplate from "@/elements/BaseTemplate/BaseTemplate";
import HomeHero from "@/elements/Heros/HomeHero"
import FlipReveal3D from "@/elements/AnimationEffects/FlipReveal3D";
export default function Home() {
    const [iconIsActive, setIconIsActive] = useState(false)
    return (
        <BaseTemplate>
            <div style={{ minHeight: "100vh" }}>
                <HomeHero />
            </div>
        </BaseTemplate >
    );
}
