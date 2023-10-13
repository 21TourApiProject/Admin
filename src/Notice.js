import React, { useEffect, useState } from 'react';
import './Notice.css';
import { Button, Col, Row, Container, Link, Card, Table } from 'react-bootstrap';
import InputBox from './UI/InputBox';
import { noticeApis } from './apis/notice';
import NoticeItem from './components/NoticeItem';

export default function Notice() {

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

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
              notices.map(notice => (<NoticeItem notice={notice} />))
            )}

          </tbody>
        </Table>

      </Container>
    </Container>
  );
}
