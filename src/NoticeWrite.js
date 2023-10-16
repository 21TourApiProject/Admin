import React, { useState, useEffect } from 'react';
import './Notice.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Modal from './UI/CustomModal'
import { noticeApis } from './apis/notice';
import { getNow } from './utils/date';

export default function NoticeDetail() {

    const navigate = useNavigate();

    const [contents, setContents] = useState("");
    const [title, setTitle] = useState("");
    const [modalContents, setModalContents] = useState('정말 저장하시겠습니까?');

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

    const handleSubmit = async e => {
        const now = getNow();
        if (title !== "" || contents !== "") {
            const param = { noticeTitle: title, noticeContent: contents, noticeDate: now };
            console.log(param)
            await noticeApis.createNotice(param);
            navigate(`/notice`);
        } else {
            setModalContents("빈칸이 있습니다.")
        }
    };

    return (
        <Container className="p-5 justify-content-center">
            <Form className="p-5 justify-content-center" onSubmit={handleShow}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control as="textarea" placeholder="제목을 입력하세요" onChange={handleTitleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" placeholder="내용을 입력하세요" rows={20} onChange={handleContentsChange} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    저장
                </Button>
            </Form>
            <Modal
                show={modalShow}
                title="경고"
                contents={modalContents}
                yes='저장'
                no='돌아가기'
                onNo={() => setModalShow(false)}
                onYes={handleSubmit} />
        </Container>
    );
}
