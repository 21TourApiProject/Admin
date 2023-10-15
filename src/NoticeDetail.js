import React, { useState, useEffect } from 'react';
import './Notice.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './UI/CustomModal'
import { noticeApis } from './apis/notice';

export default function NoticeDetail() {
    const location = useLocation();
    const notice = location.state;
    const { noticeTitle, noticeContent } = notice;
    const navigate = useNavigate();

    const [contents, setContents] = useState(noticeContent);
    const [title, setTitle] = useState(noticeTitle);
    const [modalContents, setModalContents] = useState('정말 수정하시겠습니까?');

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
        if (title == "") { setTitle(noticeTitle) }
        if (contents == "") { console.log('왜' + noticeContent); setContents(noticeContent); console.log('여긴 안옴' + contents); }
        if (title !== notice.noticeTitle || contents !== notice.noticeContent) {
            const param = { id: notice.noticeId, title: title, contents: contents };
            console.log(param)
            await noticeApis.updateNotice(param);
            navigate(`/notice`);
        } else {
            setModalContents("바뀐 값이 없습니다.")
        }
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
                contents={modalContents}
                yes='수정'
                no='돌아가기'
                onNo={() => setModalShow(false)}
                onYes={handleSubmit} />
        </Container>
    );
}
