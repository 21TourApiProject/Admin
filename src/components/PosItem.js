import React, { useState } from 'react';
import {Col, Container, Row, Button, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {setLimitLength30} from "../utils/testSize";
import useModals from './modal/useModals';
import DeleteModal from './modal/DeleteModal';


const PostItem = ({ post, onDelete }) => {
    const navigate = useNavigate();

    const onCLickEvent = () => {
        navigate(`/post/${post.posteId}`, { state: { post: post } });
    };

    const { openModal } = useModals();
    const openDeleteModal = () => {
        openModal(DeleteModal, { foo: 'bar' });
    };

    return (
        <tr>
            <th>{post.postId}</th>
            <th>{post.postTitle}</th>
            <th>{setLimitLength30(post.postContent)}</th>
            <th>{post.writeDate + ' ' + post.writeTime}</th>
            <th>{post.userId}</th>
            <th>
                <Button onClick={onCLickEvent}>보기</Button>
            </th>
            <th>
                <Button onClick={openDeleteModal}>삭제</Button>
            </th>
        </tr>
    );
};


export default PostItem;
