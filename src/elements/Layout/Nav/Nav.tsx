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
                        href="https://github.com/Zack-Hsu/"
                        prefixIcon="github"
                        size="s"
                        label="GitHub"
                        weight="default"
                        variant="tertiary"
                    />
                </Row>
                <Row gap="16" show="s" horizontal="center" paddingRight="24">
                    <IconButton
                        href="https://github.com/Zack-Hsu/"
                        icon="github"
                        variant="tertiary"
                    />
                </Row>
            </Row>
        </Row>
    )
}