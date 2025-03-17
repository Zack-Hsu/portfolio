import { Row, Logo, Button, IconButton, StyleOverlay, Icon, SmartLink, Text } from "@/once-ui/components"

export default function _() {
    return (
        <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
            <Row
                data-border="rounded"
                horizontal="space-between"
                fillWidth
                paddingY="20"
                width='l'
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
                            Polish Exam
                        </h3>
                    </Text>
                </SmartLink>
                <Row gap="12" hide="s">
                    <Button
                        href="/team-taiwan"
                        prefixIcon="openLink"
                        size="s"
                        label="Team Taiwan"
                        weight="default"
                        variant="tertiary"
                    />
                    <Button
                        href="https://github.com/Zack-Hsu/"
                        prefixIcon="github"
                        size="s"
                        label="GitHub"
                        weight="default"
                        variant="primary"
                    />
                </Row>
                <Row gap="16" show="s" horizontal="center" paddingRight="24">
                    <Button
                        href="/team-taiwan"
                        prefixIcon="openLink"
                        size="s"
                        label="Team Taiwan"
                        weight="default"
                        variant="tertiary"
                    />
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