import React from "react";
import date_icon from "../../assets/img/date-icon.svg";
import menu_icon from "../../assets/img/menu-icon.svg";
import trashcan from "../../assets/img/trashcan-icon.svg";
import arrow from "../../assets/img/arrow-back.svg";
import { Link } from "react-router-dom";

export default function EditTemplate({ array, type, title }) {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
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
                    <h2>{title}</h2>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="CertainNews">
                <h2>Изображение</h2>
                <img alt="Изображение" src={array.image} />
                <h2>Заголовок</h2>
                <textarea className="title">{array.title}</textarea>
                <h2>Основной текст</h2>
                <textarea className="text">{array.text}</textarea>
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
                            <img
                                alt="Меню"
                                src={menu_icon}
                                className="menu"
                                onClick={() => {
                                    setSelectedMenuPopup(
                                        selectedMenuPopup == -1
                                            ? index
                                            : selectedMenuPopup != index
                                            ? index
                                            : -1
                                    );
                                }}
                            />
                            {selectedMenuPopup == index ? (
                                <div className="menuPopup">
                                    <div>
                                        <img alt="Профиль" src={trashcan} />
                                        <p>Удалить</p>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <p>{comment.text}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
