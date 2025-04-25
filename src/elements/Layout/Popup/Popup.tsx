import { ReactNode, useState } from 'react';
import { Dialog, Flex, Icon } from '@/once-ui/components';
import styles from "./Popup.module.scss"
export default function Popup(props: { title: string, children: ReactNode, isOpen: boolean, onClose: any }) {
    const { title, children, isOpen, onClose } = props
    return (
        <Flex
            border="surface"
            className={styles.popup}
            onClick={(e) => { e.target === e.currentTarget && onClose() }}
        >
            <Flex background='page' maxWidth="l" className={styles.popup_content}>
                <Icon
                    className={styles.close_btn}
                    name="close"
                    size="xl"
                    onClick={() => onClose()}
                />
                {children}
            </Flex>
        </Flex >
    );
}