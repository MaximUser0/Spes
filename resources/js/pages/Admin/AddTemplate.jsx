import React from "react";
import arrow from "../../assets/img/arrow-back.svg";
import add_image from "../../assets/img/add-image.svg";
import { Link, useNavigate } from "react-router-dom";

export default function AddTemplate({ type, title }) {
    const navigate = useNavigate();
    const [image, setImage] = React.useState(null);
    return (
        <div className="AddTemplateAdmin">
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
                            create();
                        }}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
            <div className="content">
                <h2>Изображение</h2>
                <div
                    className="image"
                    onClick={() => {
                        document.getElementById("add-news-image").click();
                    }}
                >
                    <img alt="Установить изображение" src={add_image} />
                    <input
                        type="file"
                        accept="image/*"
                        id="add-news-image"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                    />
                </div>
                <h2>Заголовок</h2>
                <textarea className="title" placeholder="Заголовок"></textarea>
                <h2>Краткое описание</h2>
                <textarea
                    className="description"
                    placeholder="Краткое описание"
                ></textarea>
                <h2>Основной текст</h2>
                <textarea
                    className="text"
                    placeholder="Основной текст"
                ></textarea>
            </div>
        </div>
    );
    function create() {
        const array = {
            title: document
                .querySelector(".AddTemplateAdmin .content .title")
                .value.trim(),
            description: document
                .querySelector(".AddTemplateAdmin .content .description")
                .value.trim(),
            text: document
                .querySelector(".AddTemplateAdmin .content .text")
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
        body.append("image", image);
        body.append("title", array.title);
        body.append("description", array.description);
        body.append("text", array.text);
        axios
            .post(window.location.origin + "/api/" + type, body, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                navigate("../admin-panel/" + (type == "article" ? "articles" : type));
            });
    }
}
