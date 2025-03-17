"use client";

import {
    AvatarGroup,
    Carousel,
    Column,
    Flex,
    Heading,
    SmartLink,
    Text,
    Grid,
    Background
} from "@/once-ui/components";

interface ProjectCardProps {
    href?: string;
    priority?: boolean;
    images: {
        src: string;
        alt: string;
    }[];
    title: string;
    description?: string;
    avatars?: { src: string }[];
    link?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    const {
        href,
        images,
        title,
        description,
        avatars,
        link,
    } = props
    return (
        <Column fillWidth gap="m">
            <Carousel
                sizes="(max-width: 960px) 100vw, 960px"
                images={images}
            />
            <Flex
                mobileDirection="column"
                fillWidth
                paddingX="s"
                paddingTop="12"
                paddingBottom="24"
                gap="l"

            >
                {title && (
                    <Flex flex={5}>
                        <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                            {title}
                        </Heading>
                    </Flex>
                )}
                <Column flex={7} >
                    {description?.trim() && (
                        <Text wrap="balance" align="start" variant="body-default-s" onBackground="neutral-weak" marginBottom="12">
                            {description}
                        </Text>
                    )}
                    {link && (
                        <SmartLink
                            prefixIcon="openLink"
                            iconSize="xs"
                            href={link}
                            style={{ color: '#fff' }}
                        >
                            <Text variant="body-default-s" onBackground="neutral-weak">View project</Text>
                        </SmartLink>
                    )}
                </Column>
            </Flex>
        </Column>
    );
};