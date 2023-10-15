import React, { useState } from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import {setLimitLength30} from "../utils/testSize";
import Modal from '../UI/CustomModal'

const PostItem = ({ post }) => {
    const [selectModalShow, setSelectModalShow] = React.useState(false);
    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const openSelectModal = () => {
        setSelectModalShow(true);
    };
    const openDeleteModal = () => {
        setDeleteModalShow(true);
    };

    const deletePost = (postId) => {
        console.log('postId' + postId)
        // try {
        //     const response = await postApis.deletePost(postId);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }
        setDeleteModalShow(false);
    };

    return (
        <tr>
            <th>{post.postId}</th>
            <th>{post.postTitle}</th>
            <th>{setLimitLength30(post.postContent)}</th>
            <th>{post.writeDate + ' ' + post.writeTime}</th>
            <th>{post.userId}</th>
            <th>
                <Button onClick={openSelectModal}>보기</Button>
                <Modal
                    show={selectModalShow}
                    title="상세 조회"
                    contents={JSON.stringify(post)}
                    yes='돌아가기'
                    no=''
                    onNo={() => setSelectModalShow(false)}
                    onYes={() => setSelectModalShow(false)}
                />
            </th>
            <th>
                <Button onClick={openDeleteModal}>삭제</Button>
                <Modal
                show={deleteModalShow}
                title="경고"
                contents='정말 삭제하시겠습니까?'
                yes='삭제'
                no='돌아가기'
                onNo={() => setDeleteModalShow(false)}
                onYes={() => deletePost(post.postId)}
                />
            </th>
        </tr>
    );
};


export default PostItem;
