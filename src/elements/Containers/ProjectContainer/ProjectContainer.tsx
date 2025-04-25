import FigmaCard from "@/elements/Cards/FigmaCard";
import Popup from "@/elements/Layout/Popup/Popup";
import { Column, Grid, Row, Button, Icon, Text, Line, Heading, Badge, Flex, Accordion } from "@/once-ui/components";
import { ReactElement, useEffect, useMemo, useState } from "react";
import DrayTekCertificationPopup from "./DrayTekCertification/DrayTekCertificationPopup/DrayTekCertificationPopup";
import DrayTekCertification from "./DrayTekCertification/DrayTekCertification";
import DrayTekOfficialWeb from "./DrayTekOfficialWeb/DrayTekOfficialWeb";

export default function () {
    const [popupItem, setPopupItem] = useState<null | ReactElement>(null)
    const [isShowProject, setIsShowProject] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsShowProject(true)
        }, 3000)
    }, [])
    if (!isShowProject) return
    return (
        <Flex fillWidth flex={1} horizontal="center" onBackground="neutral-medium">
            {popupItem}
            <Grid fillWidth maxWidth="l" columns={2} mobileColumns={1} gap="16" >
                <DrayTekCertification />
                <DrayTekOfficialWeb />
            </Grid>
        </Flex>
    )
}