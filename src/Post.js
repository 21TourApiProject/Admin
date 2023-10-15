import React, { useEffect, useState } from 'react';
import './Post.css';
import {Button, Container, Modal, Table} from 'react-bootstrap';
import InputBox from './UI/InputBox';
import {postApis} from "./apis/post";
import PostItem from "./components/PosItem";

export default function Post() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await postApis.getAllPost();
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const [keyword, setKeyword] = useState("");
    const keywordChange = (e) => {
        setKeyword(e.target.value)
    }

    const [search, setSearch] = useState([]);
    const searchByTitle = async () => {
        try {
            const response = await postApis.getPostByTitle(keyword);
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const searchNickname = async () => {
        try {
            const response = await postApis.getPostByNickname(keyword);
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="p-5 justify-content-center">
            {/*<InputBox />*/}

            <br></br>
            <Container className="justify-content-center">
                <input type="text" value={keyword} onChange={keywordChange} />
                <Button onClick={searchByTitle}>제목 검색</Button>
                <Button onClick={searchNickname}>닉네임 검색</Button>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>postId</th>
                        <th>제목</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>userId</th>
                        <th>보기</th>
                        <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.length > 0 && (
                        posts.map(post => (<PostItem post={post} />))
                    )}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
}
