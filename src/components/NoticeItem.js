import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { formatModifiedDate } from '../utils/date';
import { useNavigate } from 'react-router-dom';

const NoticeItem = ({ notice, onDelete }) => {
    const navigate = useNavigate();

    const onCLickEvent = () => {
        navigate(`/notice/${notice.noticeId}`, { state: notice });
    };

    return (
        <tr>
            <th onClick={onCLickEvent}>{notice.noticeId}</th>
            <th onClick={onCLickEvent}>{notice.noticeTitle}</th>
            <th>{formatModifiedDate(notice.noticeDate)}</th>
            <th>
                <Button>삭제</Button>
            </th>
        </tr>
    );
};


export default NoticeItem;
