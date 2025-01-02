import React from "react";
import example from "../../assets/img/example-image.jpg";
import date_icon from "../../assets/img/date-icon.svg";
import comment_icon from "../../assets/img/reaction-count-icon.svg";
import arrow from "../../assets/img/arrow-back.svg";
import { Link } from "react-router-dom";

export default function EditTemplate({ array, type }) {
    return (
        <div className="EditTemplateAdmin">
            <div className="top">
                <div className="button-div">
                    <div>
                        <Link to={"../admin-panel/" + type}>
                            <button>
                                <img alt="Назад" src={arrow} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="title-div">
                    <h2>Новости</h2>
                </div>
            </div>
            <div className="CertainNews">
                <h2>Изображение</h2>
                <img alt="Изображение" src={array.image} />
                <h2>Заголовок</h2>
                <textarea>{array.title}</textarea>
                <h2>Основной текст</h2>
                <textarea>{array.title}</textarea>
                <h2>Коментарии</h2>
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
        </div>
    );
}
