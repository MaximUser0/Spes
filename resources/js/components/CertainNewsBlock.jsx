import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import comment_icon from "../assets/img/reaction-count-icon.svg";
import arrow from "../assets/img/arrow-back.svg";
import arrow2 from "../assets/img/arrow-follow.svg";
import { Link } from "react-router-dom";
import example from "../assets/img/example-image.jpg";

export default function CertainNewsBlock({ array, type, addNewComment }) {
    const [comment, setComment] = React.useState("");
    const id = window.location.pathname.split("/")[2];

    return (
        <div className="CertainNews">
            <img alt="Изображение" src={array.image} />
            <Link to={"../" + type}>
                <button className="back">
                    <img alt="Назад" src={arrow} />
                </button>
            </Link>
            <div className="title">
                <h1>{array.title}</h1>
                <div>
                    <img alt="Дата" src={date_icon} />
                    <p>{array.date.slice(0, 10)}</p>
                    <img alt="Коментарии" src={comment_icon} />
                    <p>{array.comment_counter}</p>
                </div>
            </div>
            <p>{array.text}</p>
            <h2>Коментарии</h2>
            <div className={"addComment" + (comment != "" ? " activeAdd" : "")}>
                <img alt="Ваше фото" src={example} />
                <textarea
                    type="text"
                    placeholder="Оставьте свой коментарий"
                    readOnly={sessionStorage.getItem("token") == null}
                    title={sessionStorage.getItem("token") == null ? "Войдите в аккаунт, чтобы оставлять комментарии" : ""}
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                ></textarea>
                <button
                    onClick={() => {
                        sentComment();
                    }}
                >
                    <img alt="Отправить" src={arrow2} />
                </button>
            </div>
            <hr />
            {array.comments.map((comment, index) => (
                <div
                    key={"comment-for-" + type + "-" + index}
                    className="comment"
                >
                    <div>
                        <img alt="Фото пользователя" src={comment.src} />
                        <div>
                            <p>Name Surname</p>
                            <p>
                                <img alt="Дата" src={date_icon} />
                                {comment.date.slice(0, 10)}
                            </p>
                        </div>
                    </div>
                    <p>{comment.text}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
    function sentComment() {
        if (sessionStorage.getItem("token") == null) return;
        const data = { text: comment };
        const urlType = type == "news" ? "news" : "article";
        axios
            .post(
                window.location.origin +
                    "/api/" +
                    urlType +
                    "/" +
                    id +
                    "/comment",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                addNewComment(response.data);
                setComment("");
            });
    }
}
