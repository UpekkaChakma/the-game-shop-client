import { Modal } from 'react-bootstrap'
import React from 'react'

const GameModal = ({ children, showModal, closeModal }) => {

    return (
        <Modal style={{ border: "1 px solid transparent" }}
            size="lg"
            show={showModal}
            onHide={() => closeModal()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Body style={{ backgroundColor: "#1b1919", border: "none" }}>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default GameModal