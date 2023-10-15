import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const postApis = {
    getAllPost: async () => {
        try {
            const response = await http.get('/posts');
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    getPostByTitle: async (title) => {
        try {
            const response = await http.post('/post/title', null, { params: { title: title} });
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    getPostByNickname: async (nickname) => {
        try {
            const response = await http.post('/post/nickname', null, { params: { nickname : nickname} });
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    deletePost: async (postId) => {
        try {
            const response = await http.delete('/posts/' + postId);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}