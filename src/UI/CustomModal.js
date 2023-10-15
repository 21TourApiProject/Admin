import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function CustomModal(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.onNo}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.contents}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onNo}>
                        {props.no}
                    </Button>
                    <Button variant="primary" onClick={props.onYes}>
                        {props.yes}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

Modal.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    contents: PropTypes.string,
    no: PropTypes.string,
    yes: PropTypes.string,
    onYes: PropTypes.func,
    onNo: PropTypes.func,
};

export default CustomModal;