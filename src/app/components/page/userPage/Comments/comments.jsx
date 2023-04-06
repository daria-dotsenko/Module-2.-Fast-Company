import React, { useEffect, useState } from "react";
import api from "../../../../api";
import Comment from "./comment";
import PropTypes from "prop-types";

const Comments = ({ userId }) => {
    const [comments, setComments] = useState();
    useEffect(() => {
        api.comments.fetchAll().then((comments) => setComments(comments));
    }, []);
    const timeOfComment = (comment) => {
        // console.log(comment);
        const currentDate = new Date();
        const createdDate = new Date(parseInt(comment.created_at));
        const timeDiff = currentDate.getTime() - createdDate.getTime();
        const secondsDiff = Math.round(timeDiff / 1000);
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (secondsDiff < 60) {
            return <span>- 1 минуту назад</span>;
        } else if (secondsDiff < 300) {
            return <span>- 5 минут назад</span>;
        } else if (secondsDiff < 1800) {
            return <span>- 30 минут назад</span>;
        } else if (secondsDiff < 3600) {
            return <span>- менее 1 часа назад</span>;
        } else if (secondsDiff < 86400) { // hours
            const hoursDiff = Math.floor(secondsDiff / 3600);
            const minutesDiff = Math.floor((secondsDiff - hoursDiff * 3600) / 60);
            const hours = [1, 21].includes(hoursDiff) ? "час"
                : [2, 3, 4, 22, 23].includes(hoursDiff) ? "часа"
                    : "часов";
            const minutes = [1, 21, 31, 41, 51].includes(minutesDiff) ? "минута"
                : [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(minutesDiff) ? "минуты"
                    : "минут";
            return <span>{`- ${hoursDiff} ${hours} ${minutesDiff} ${minutes} назад`}</span>;
        } else if (secondsDiff < 2592000) {
            const currentMonthName = monthNames[createdDate.getMonth()];
            const formattedDate = `- ${createdDate.getDate()} ${currentMonthName}`;
            return <span>{formattedDate}</span>;
        } else {
            const currentMonthName = monthNames[createdDate.getMonth()];
            const formattedDate = `- ${createdDate.getDate()} ${currentMonthName} ${createdDate.getFullYear()}`;
            return <span>{formattedDate}</span>;
        }
    };

    const users = JSON.parse(localStorage.getItem("users"));
    if (comments) {
        return <>
            <div className="card mb-3">
                <div className="card-body">
                    <Comment comments={comments} userId={userId} users={users} timeOfComment={timeOfComment}/>
                </div>
            </div>
        </>;
    }
    ;
    return <>
        <div>Loading...</div>
    </>;
};

Comments.propTypes = {
    userId: PropTypes.string.isRequired
};

export default Comments;
