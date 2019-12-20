import React, { useState } from 'react';
import Modal from "./Modal";

const ModalContainer: React.FC = () => {
    const [showSimple, setShowSimple] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [modalKind, setModalKind] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [thirdValue, setThirdValue] = useState('');

    const onSimpleModalBtnClick = () => {
        setShowSimple(true)
    }

    const onInputModalBtnClick = () => {
        setShowInput(true)
    }

    const onMessageModalBtnClick = () => {
        setShowMessage(true)
        setModalKind('message')
        setTimeout(() => setShowMessage(false), 3000)
    }

    return (
        <>
            <button onClick={onSimpleModalBtnClick}>show simple Modal</button>
            <Modal show={showSimple}>
                Simple Modal
                <button onClick={() => setShowSimple(false)}>Close</button>
            </Modal>

            <button onClick={onInputModalBtnClick}>show input Modal</button>
            <div>{firstValue}-{secondValue}-{thirdValue}</div>
            <Modal show={showInput}>
                Input Modal
                <input value={firstValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstValue(e.currentTarget.value)} />
                <input value={secondValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondValue(e.currentTarget.value)} />
                <input value={thirdValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThirdValue(e.currentTarget.value)} />
                <button onClick={() => setShowInput(false)}>Ok</button>
            </Modal>

            <button onClick={onMessageModalBtnClick}>show message Modal</button>
            <Modal show={showMessage} modalKind={modalKind}>
                Message Modal
            </Modal>
        </>
    );
};

export default ModalContainer;
