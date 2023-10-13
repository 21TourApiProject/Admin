import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const noticeApis = {
    getNotices: async () => {
        try {
            const response = await http.get('/notice/all');
            return response;
        } catch (error) {
            console.error(error);
        }
    },
}