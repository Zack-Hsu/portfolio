import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from "react";
export default function (props: { children?: string, delay?: number }) {
    const { children, delay } = props
    const ref = useRef<HTMLDivElement>(null)
    const doAnimation = () => {
        if (!ref.current) return;
        const words = Array.from(ref.current.children) as HTMLElement[];
        gsap.set(words, {
            opacity: 1,
        })
        gsap.from(words, {
            translateY: 5,
            stagger: .065,
            scale: .8,
            opacity: 0,
            ease: "power2.out",
            delay: delay
        });
    }
    useGSAP(() => {
        doAnimation()
    }, [ref])
    return (
        <div ref={ref}>
            {children?.split("").map((itm, i) => <span key={i}>{itm}</span>)}
        </div>
    )
}