import React, {CSSProperties} from 'react';
import s from './Modal.module.css'

interface IModal {
    show: boolean
    modalKind?: string
}

const Modal: React.FC<IModal> = ({ children, show, modalKind }) => {

    const windowClass = modalKind === 'message' ? `${s.modalWindow} ${s.messageModalWindow}` : `${s.modalWindow}`

    if (!show) return null;
    return (
        <div className={s.backWindow}>
            <div className={windowClass}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
