import React from 'react'
import Modal from './Modal';

interface BaseModalWrapper{
    isModalVisible: boolean;
    onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapper> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible){
        return null
    }

    return(<Modal onBackdropClick={onBackdropClick} />);
}

export default BaseModalWrapper;