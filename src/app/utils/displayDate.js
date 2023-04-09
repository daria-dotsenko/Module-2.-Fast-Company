// import React from "react";

export default function displayDate(data) {
    const currentDate = new Date();
    const createdDate = new Date(parseInt(data));
    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const secondsDiff = Math.round(timeDiff / 1000);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    if (secondsDiff < 60) {
        return "1 минуту назад";
    } else if (secondsDiff < 300) {
        return "5 минут назад";
    } else if (secondsDiff < 1800) {
        return "менее 30 минут назад";
    } else if (secondsDiff < 3600) {
        return "менее 1 часа назад";
    } else if (secondsDiff < 86400) {
        const hoursDiff = Math.floor(secondsDiff / 3600);
        const minutesDiff = Math.floor((secondsDiff - hoursDiff * 3600) / 60);
        const hours = [1, 21].includes(hoursDiff) ? "час"
            : [2, 3, 4, 22, 23].includes(hoursDiff) ? "часа"
                : "часов";
        const minutes = [1, 21, 31, 41, 51].includes(minutesDiff) ? "минута"
            : [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(minutesDiff) ? "минуты"
                : "минут";
        return `${hoursDiff} ${hours} ${minutesDiff} ${minutes} назад`;
    } else if (secondsDiff < 2592000) {
        const currentMonthName = monthNames[createdDate.getMonth()];
        const formattedDate = `${createdDate.getDate()} ${currentMonthName}`;
        return formattedDate;
    } else {
        const currentMonthName = monthNames[createdDate.getMonth()];
        const formattedDate = `${createdDate.getDate()} ${currentMonthName} ${createdDate.getFullYear()}`;
        return formattedDate;
    }
}
