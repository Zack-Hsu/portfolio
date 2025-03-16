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
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import BaseTemplate from "@/elements/BaseTemplate/BaseTemplate";
import HomeHero from "@/elements/Heros/HomeHero"
export default function Home() {
    const [iconIsActive, setIconIsActive] = useState(false)
    return (
        <BaseTemplate>
            <div style={{ height: "100vh" }}>
                <HomeHero />
            </div>
        </BaseTemplate >
    );
}
