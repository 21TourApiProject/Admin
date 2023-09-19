// 날짜에 대한 util함수

export const formatDate = e => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, 0);
    const date = String(now.getDate()).padStart(2, 0);
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = week[now.getDay()];
    const today = `${month}/${date} (${day})`;
    return today;
};

export const formatModifiedDate = dateString => {
    const modifiedDate = new Date(dateString);
    const month = String(modifiedDate.getMonth() + 1).padStart(2, 0);
    const date = modifiedDate.getDate().toString().padStart(2, 0);
    const hour = modifiedDate.getHours().toString();
    const minutes = modifiedDate.getMinutes().toString();
    const formattedDate = `${month}/${date} ${hour}:${minutes}`;

    return formattedDate;
};

