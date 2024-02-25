export const getNow = () => {
    const now = new Date()
    const year = now.getFullYear().toString().padStart(4, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    const hour = now.getHours().toString().padStart(2, '0')
    const minute = now.getMinutes().toString().padStart(2, '0')
    const second = now.getSeconds().toString().padStart(2, '0')
    const nowDay = `${year}-${month}-${day}`
    const nowTime = `${hour}:${minute}:${second}`
    return ({
        date: nowDay,
        time: nowTime,
    });
};