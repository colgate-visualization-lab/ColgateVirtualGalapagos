import React from 'react'
import Modal from './Modal';
import { DesktopModalContainer, Header } from './ModalPopup.styles'

interface BaseModalWrapper{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapper> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible){
        return null
    }

    return(<Modal onBackdropClick={onBackdropClick} >
            <DesktopModalContainer>
                <Header>Map info</Header>
            </DesktopModalContainer>
        </Modal>);
}

export default BaseModalWrapper;