import React, { useState } from 'react';
import Modal from "./Modal";

const ModalContainer: React.FC = () => {
    const [showSimple, setShowSimple] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [thirdValue, setThirdValue] = useState('');

    return (
        <>
            <button onClick={() => setShowSimple(true)}>show simple Modal</button>
            <Modal show={showSimple}>
                Simple Modal
                <button onClick={() => setShowSimple(false)}>Close</button>
            </Modal>

            <button onClick={() => setShowInput(true)}>show input Modal</button>
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
        </>
    );
};

export default ModalContainer;
