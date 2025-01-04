import React from "react";
import arrow from "../../assets/img/arrow-back.svg";
import add_image from "../../assets/img/add-image.svg";
import { Link } from "react-router-dom";

export default function AddTemplate({ type, title }) {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
    return (
        <div className="AddTemplateAdmin">
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
            <div className="content">
                <h2>Изображение</h2>
                <div className="image">
                  <img alt="Установить изображение" src={add_image}/>
                </div>
                <h2>Заголовок</h2>
                <textarea className="title" placeholder="Заголовок"></textarea>
                <h2>Основной текст</h2>
                <textarea className="text" placeholder="Основной текст"></textarea>
            </div>
        </div>
    );
}
