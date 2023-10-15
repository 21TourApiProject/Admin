import React, { useState } from 'react';
import './Notice.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Modal from './UI/CustomModal'

export default function NoticeDetail() {
    const location = useLocation();
    const notice = location.state;

    console.log(notice)
    console.log(notice.noticeId)

    const [contents, setContents] = useState('');
    const [title, setTitle] = useState('');

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleContentsChange = e => {
        setContents(e.target.value);
    };

    const [modalShow, setModalShow] = React.useState(false);

    const handleShow = e => {
        e.preventDefault();
        setModalShow(true)
    };

    return (
        <Container className="p-5 justify-content-center">
            <Form className="p-5 justify-content-center" onSubmit={handleShow}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control as="textarea" defaultValue={notice.noticeTitle} onChange={handleTitleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" defaultValue={notice.noticeContent} rows={20} onChange={handleContentsChange} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    수정
                </Button>
            </Form>
            <Modal
                show={modalShow}
                title="경고"
                contents='정말 수정하시겠습니까?'
                yes='수정'
                no='돌아가기'
                onNo={() => setModalShow(false)}
                onYes={() => setModalShow(false)} />
        </Container>
    );
}
