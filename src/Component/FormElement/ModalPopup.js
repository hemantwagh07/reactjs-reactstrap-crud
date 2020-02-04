import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

export default function ModalPopup(props) {
    let { isOpen, toggle, modaltitle, modalbody, btntext, pbtnaction } = props;
        
    return (
        <Modal isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>{modaltitle}</ModalHeader>
            <ModalBody>
                {modalbody}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={pbtnaction}>{btntext}</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
