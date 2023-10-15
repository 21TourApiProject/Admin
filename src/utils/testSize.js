// String 의 길이가 30이 넘을 때 자르는 메서드
export const setLimitLength30 = originString => {
    if(originString.length > 30) return originString.substring(0, 30) + '...';
    else return originString;
};