import { Row, Logo, Button, IconButton, StyleOverlay, Icon, SmartLink, Text } from "@/once-ui/components"

export default function _() {
    return (
        <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
            <Row
                data-border="rounded"
                horizontal="space-between"
                maxWidth="l"
                paddingRight="64"
                paddingLeft="32"
                paddingY="20"
            >
                <SmartLink
                    href="/"
                    prefixIcon="HiOutlineRocketLaunch"
                    iconSize="l"
                    style={{ color: "#fff", textDecoration: "unset" }}
                >
                    <Text
                        onBackground="neutral-medium"
                    >
                        <h3>
                            Zack Works
                        </h3>
                    </Text>
                </SmartLink>
                <Row gap="12" hide="s">
                    <Button
                        href="https://discord.com/invite/5EyAQ4eNdS"
                        prefixIcon="discord"
                        size="s"
                        label="Discord"
                        weight="default"
                        variant="primary"
                    />
                    <Button
                        href="https://github.com/once-ui-system/nextjs-starter"
                        prefixIcon="github"
                        size="s"
                        label="GitHub"
                        weight="default"
                        variant="tertiary"
                    />
                    {/**
                 * 
                <Row position="fixed" top="20" right="20">
                    <StyleOverlay position="fixed" top="8" right="8" style={{ height: "calc(100vh - var(--static-space-16))" }} />
                </Row>
                 */}
                </Row>
                <Row gap="16" show="s" horizontal="center" paddingRight="24">
                    <IconButton
                        href="https://discord.com/invite/5EyAQ4eNdS"
                        icon="discord"
                        variant="tertiary"
                    />
                    <IconButton
                        href="https://github.com/once-ui-system/nextjs-starter"
                        icon="github"
                        variant="tertiary"
                    />
                    <Row position="fixed" top="20" right="20">
                        <StyleOverlay position="fixed" top="8" right="8" style={{ height: "calc(100vh - var(--static-space-16))" }} />
                    </Row>
                </Row>
            </Row>
        </Row>
    )
}