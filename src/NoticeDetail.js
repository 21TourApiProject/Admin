import React from 'react';
import './Notice.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function NoticeDetail() {
    const location = useLocation();
    const notice = location.state;

    console.log(notice)

    return (
        <Container className="p-5 justify-content-center">
            <Form className="p-5 justify-content-center">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="email" defaultValue={notice.noticeTitle} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" defaultValue={notice.noticeContent} rows={20} />
                </Form.Group>
            </Form>
        </Container>
    );
}
