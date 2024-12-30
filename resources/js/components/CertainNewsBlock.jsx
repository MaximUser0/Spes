import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import comment_icon from "../assets/img/reaction-count-icon.svg";
import arrow from "../assets/img/arrow-back.svg";
import { Link } from "react-router-dom";
import example from "../assets/img/example-image.jpg";

export default function CertainNewsBlock({ array, type }) {
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
                    <p>{array.date}</p>
                    <img alt="Коментарии" src={comment_icon} />
                    <p>{array.comment_counter}</p>
                </div>
            </div>
            <p>{array.text}</p>
            <h2>Коментарии</h2>
            <div className="addComment">
                <img alt="Ваше фото" src={example} />
                <textarea
                    type="text"
                    placeholder="Оставьте свой коментарий"
                ></textarea>
            </div>
            <hr />
            {array.comments.map((comment, index) => (
                <div
                    key={"comment-for-" + type + "-" + index}
                    className="comment"
                >
                    <div>
                        <img alt="Фото пользователя" src={comment.image} />
                        <div>
                            <p>Name Surname</p>
                            <p>
                                <img alt="Дата" src={date_icon} />
                                {comment.date}
                            </p>
                        </div>
                    </div>
                    <p>{comment.text}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
