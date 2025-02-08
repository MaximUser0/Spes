import React from "react";
import date_icon from "../../assets/img/date-icon.svg";
import menu_icon from "../../assets/img/menu-icon.svg";
import trashcan from "../../assets/img/trashcan-icon.svg";
import arrow from "../../assets/img/arrow-back.svg";
import edit_image from "../../assets/img/edit-image.svg";
import { Link, useNavigate } from "react-router-dom";

export default function EditTemplate({ array, type, title, setArray }) {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
    const [edited, setEdited] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const navigate = useNavigate();
    return (
        <div className="EditTemplateAdmin">
            <div className="top">
                <div className="button-div">
                    <div>
                        <Link to={"../admin-panel/" + (type == "article" ? "articles" : type)}>
                            <button>
                                <img alt="Назад" src={arrow} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="title-div">
                    <h2>{title}</h2>
                    <button
                        onClick={() => {
                            if (edited) {
                                save();
                            } else {
                                deleteElement();
                            }
                        }}
                    >
                        {edited ? "Сохранить" : "Удалить"}
                    </button>
                </div>
            </div>
            <div className="CertainNews">
                <h2>Изображение</h2>
                <img alt="Изображение" src={array.image} />
                <img
                    alt="Изменить"
                    src={edit_image}
                    className="edit-image"
                    onClick={() => {
                        document.getElementById("change-news-image").click();
                    }}
                />
                <input
                    type="file"
                    accept="image/*"
                    id="change-news-image"
                    onChange={(e) => {
                        setEdited(true);
                        setImage(e.target.files[0]);
                    }}
                />
                <h2>Заголовок</h2>
                <textarea
                    className="title"
                    defaultValue={array.title}
                    onChange={(e) => {
                        setEdited(true);
                    }}
                ></textarea>
                <h2>Основной текст</h2>
                <textarea
                    className="text"
                    defaultValue={array.text}
                    onChange={(e) => {
                        setEdited(true);
                    }}
                ></textarea>
                <h2>Краткое описание</h2>
                <textarea
                    className="description"
                    defaultValue={array.description}
                    onChange={(e) => {
                        setEdited(true);
                    }}
                ></textarea>
                <h2>Комментарии</h2>
                <hr />
                {array.comments.length != 0 ? (
                    array.comments.map((comment, index) => (
                        <div
                            key={"comment-for-" + type + "-" + index}
                            className="comment"
                        >
                            <div>
                                <img
                                    alt="Фото пользователя"
                                    src={comment.src}
                                />
                                <div>
                                    <p>{comment.name}</p>
                                    <p>
                                        <img alt="Дата" src={date_icon} />
                                        {comment.date.slice(0, 10)}
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
                                        <div
                                            onClick={() => deleteComment(index)}
                                        >
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
                    ))
                ) : (
                    <p>Комментариев нет</p>
                )}
            </div>
        </div>
    );
    function save() {
        const array = {
            title: document
                .querySelector(".EditTemplateAdmin .CertainNews .title")
                .value.trim(),
            description: document
                .querySelector(".EditTemplateAdmin .CertainNews .description")
                .value.trim(),
            text: document
                .querySelector(".EditTemplateAdmin .CertainNews .text")
                .value.trim(),
        };
        if (array.title == "") {
            alert("Заголовок не может быть пустым");
            return;
        }
        if (array.description == "") {
            alert("Краткое описание не может быть пустым");
            return;
        }
        if (array.text == "") {
            alert("Основной текст не может быть пустым");
            return;
        }

        const body = new FormData();
        if (image != null) {
            body.append("image", image);
        }
        body.append("title", array.title);
        body.append("description", array.description);
        body.append("text", array.text);
        const id = window.location.pathname.split("/")[4];

        axios
            .post(window.location.origin + "/api/" + type + "/" + id, body, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                navigate(
                    "../admin-panel/" + (type == "article" ? "articles" : type)
                );
            });
    }
    function deleteElement() {
        if (!window.confirm("Удалить " + (type == "article" ? "статью?" : "новость?"))) return;
        const id = window.location.pathname.split("/")[4];
        axios
            .delete(window.location.origin + "/api/" + type + "/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                navigate(
                    "../admin-panel/" + (type == "article" ? "articles" : type)
                );
            });
    }
    function deleteComment(index) {
        if (!window.confirm("Удалить комментарий?")) return;
        axios
            .delete(
                window.location.origin +
                    "/api/" +
                    type +
                    "/comment/" +
                    array.comments[index].id,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then(() => {
                array.comments.splice(index, 1);
                setArray({ ...array });
            });
    }
}
