import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "./BaseTemplate.module.scss";
import classNames from "classnames";
import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config";
import { Background, Column, Flex, ToastProvider, Fade } from "@/once-ui/components";
import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Nav from "@/elements/Layout/Nav"

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

/*
    Replace with code for secondary and tertiary fonts
    from https://once-ui.com/customize
*/
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

export default function BaseTemplate({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) {
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
                //secondary?.variable,
                //tertiary?.variable
            )}
        >
            <ToastProvider>
                <Column as="div" fillWidth margin="0" paddingX="xl">
                    <Background
                        position="absolute"
                        mask={{
                            x: 100,
                            y: 0,
                            radius: 100,
                        }}
                        gradient={{
                            display: true,
                            x: 100,
                            y: 60,
                            width: 70,
                            height: 50,
                            tilt: -40,
                            opacity: 90,
                            colorStart: "accent-background-strong",
                            colorEnd: "page-background",
                        }}
                        grid={{
                            display: false,
                            opacity: 100,
                            width: "0.25rem",
                            color: "neutral-alpha-medium",
                            height: "0.25rem",
                        }}
                    />
                    <Column fillWidth paddingY="80" paddingX="xl" horizontal="center" flex={1} >
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
