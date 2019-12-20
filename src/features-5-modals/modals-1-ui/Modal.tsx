import React, {CSSProperties} from 'react';
import s from './Modal.module.css'

interface IModal {
    show: boolean
}

const Modal: React.FC<IModal> = ({ children, show }) => {

    if (!show) return null;

    return (
        <div className={s.backWindow}>
            <div className={s.modalWindow}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
