import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

export default function FadeInUp(props: { children: any, style?: React.CSSProperties, delay?: number, className?: string }) {
    const { children, style, delay, className } = props
    const ref = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (!ref.current) return;
        const { CustomEase } = require("gsap/CustomEase")
        gsap.registerPlugin(CustomEase);
        const { ScrollTrigger } = require("gsap/ScrollTrigger")
        gsap.registerPlugin(ScrollTrigger)
        CustomEase.create("twEase", "M0,0 C0.245,0.228 0.23,1 1,1 ");
        //CustomEase.create("twEase", "M0,0,C0.173,0,0.247,1,0.247,1,0.247,1,0.271,1,0.271,1,0.271,1,0.308,0.51,0.416,0.51,0.502,0.51,0.566,1,0.566,1,0.566,1,0.578,1,0.578,1,0.578,1,0.606,0.783,0.664,0.783,0.71,0.783,0.753,1,0.753,1,0.753,1,0.758,1,0.758,1,0.758,1,0.776,0.913,0.809,0.913,0.836,0.913,0.862,1,0.862,1,0.862,1,0.865,1,0.865,1,0.865,1,0.874,0.968,0.895,0.968,0.912,0.968,0.927,1,0.927,1,0.927,1,0.927,1,0.927,1,0.927,1,0.932,0.989,0.945,0.989,0.956,0.989,0.964,1,0.964,1,0.964,1,0.964,1,0.964,1,0.964,1,0.967,0.997,0.975,0.997,0.982,0.997,0.986,1,0.986,1,0.986,1,0.986,1,0.986,1,0.986,1,0.988,0.999,0.993,0.999,0.997,0.999,1,1,1,1");
        gsap.set(ref.current, {
            transform: "translateY(0)",
            opacity: 1
        })
        gsap.from(ref.current, {
            duration: 1.2,
            stagger: .015,
            transform: "translateY(150)",
            opacity: 0
        });
    }, [ref])
    return (
        <div style={style} className={className} ref={ref}>
            {children}
        </div>
    )

}