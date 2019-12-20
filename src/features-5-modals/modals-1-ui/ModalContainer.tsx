import React, {useState} from 'react';
import Modal from "./Modal";

const ModalContainer: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>show simple Modal</button>
            <Modal show={show}>
                Simple Modal
                <button onClick={() => setShow(false)}>Close</button>
            </Modal>
        </>
    );
};

export default ModalContainer;
