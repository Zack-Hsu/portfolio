import classNames from "classnames";
import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config";
import { Background, Column, Flex, ToastProvider, Fade } from "@/once-ui/components";
import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Nav from "@/elements/Layout/Nav"
import { ReactNode } from "react";
import Link from "next/link";

const primary = Inter({
    variable: "--font-primary",
    subsets: ["latin"],
    display: "swap",
});

const code = Roboto_Mono({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap",
});

type FontConfig = {
    variable: string;
};

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

const schemaData = {
    "@context": "https://schema.org",
    "@type": schema.type,
    url: "https://" + baseURL,
    logo: schema.logo,
    name: schema.name,
    description: schema.description,
    email: schema.email,
    sameAs: Object.values(social).filter(Boolean),
};

export default function PolishTemplate(props: { children?: ReactNode }) {
    const { children } = props
    return (
        <Flex
            as="div"
            lang="zh-TW"
            fillHeight
            background="page"
            data-neutral={style.neutral}
            data-brand={style.brand}
            data-accent={style.accent}
            data-border={style.border}
            data-theme={style.theme}
            data-solid={style.solid}
            data-solid-style={style.solidStyle}
            data-surface={style.surface}
            data-transition={style.transition}
            data-scaling={style.scaling}
            className={classNames(
                primary.variable,
                code.variable,
                secondary?.variable,
                tertiary?.variable
            )}
        >
            <Link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css" />
            <ToastProvider>
                <Column as="div" fillWidth margin="0">
                    <Column fillWidth paddingY="80" paddingX="xs" horizontal="center" flex={1} style={{ minHeight: '100vh' }} >
                        <Fade
                            zIndex={3}
                            pattern={{
                                display: true,
                                size: "4",
                            }}
                            position="fixed"
                            top="0"
                            left="0"
                            to="bottom"
                            height={5}
                            fillWidth
                            blur={0.25}
                        />
                        <Nav />
                        {children}
                    </Column>
                </Column>
            </ToastProvider>
        </Flex >
    );
}
