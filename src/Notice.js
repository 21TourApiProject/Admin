import React, { useEffect, useState } from 'react';
import './Notice.css';
import { Container, Table } from 'react-bootstrap';
import InputBox from './UI/InputBox';
import { noticeApis } from './apis/notice';
import NoticeItem from './components/NoticeItem';
import Modal from './UI/CustomModal'

export default function Notice() {

  const [notices, setNotices] = useState([]);
  const [modalContents, setModalContents] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetchNotices();
  }, []);

  const onclickRemove = id => {
    setModalContents(id + "번 공지를 삭제하시겠습니까?");
    setModalShow(true);
  };

  const removeNotice = async id => {
    try {
      setModalShow(false);
      await noticeApis.deleteNotice(id);
      fetchNotices();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNotices = async () => {
    try {
      const response = await noticeApis.getNotices();
      console.log(response.data);
      setNotices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="p-5 justify-content-center">
      <InputBox />
      <Container className="justify-content-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>날짜</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {notices.length > 0 && (
              notices.map(notice => (<NoticeItem key={notice.noticeId} notice={notice} onDelete={onclickRemove} />))
            )}

          </tbody>
        </Table>
      </Container>

      <Modal
        show={modalShow}
        title="경고"
        contents={modalContents}
        yes='삭제'
        no='돌아가기'
        onNo={() => setModalShow(false)}
        onYes={removeNotice} />
    </Container>
  );
}
