import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    headers: {
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

    deleteNotice: async id => {
        try {
            const response = await http.delete(`/notice/${id}`);

            if (response.status === 204) {
                return true;
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    },

    updateNotice: async notice => {
        try {
            await http.put(`/notice`, {
                noticeId: notice.id,
                noticeTitle: notice.title,
                noticeContent: notice.contents,
            });
        } catch (error) {
            console.error(error);
        }
    },
}