import React from "react";
import arrow from "../assets/img/arrow-follow.svg";
import image from "../assets/img/feedback-image.png";
import { Link } from "react-router-dom";

export default function Feedback() {
    return (
        <div className="Feedback">
            <div className="contacts">
                <h2>Контакты</h2>
                <p>Режим работы:</p>
                <p className="light">Ежедневно: с 8:00 до 20:00</p>
                <p>Телефон</p>
                <p className="light">+7 (810)000-00-00</p>
                <p>E-mail</p>
                <p className="light">Spes@mail.ru</p>
            </div>
            <div className="">
                <h2>Напишите нам</h2>
                <div className="form">
                    <div>
                        <input type="text" placeholder="ФИО" />
                        <input type="text" placeholder="Телефон" />
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <textarea placeholder="Сообщение"></textarea>
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Согласие на обработку персональных данных</label>
                    <button
                        onClick={() => {
                            clearForm();
                        }}
                    >
                        Отправить
                    </button>
                </div>
            </div>
            <div className="article">
                <h2>Не опускайте руки – никогда!</h2>
                <div>
                    <p>
                        В современном мире идет активное развитие технологий и
                        роботизации производств, однако уровень травматизма
                        сохраняется. Каждый десятый человек имеет нарушение
                        структур организма, снижающие его функциональность, что
                        в свою очередь отражается на уровне физической и
                        социальной активности человека, снижает качество жизни и
                        становится препятствием при реализации профессиональной
                        деятельности. Но инвалидность - это не приговор. Жизнь
                        одинаково прекрасна для всех живущих на Земле. Многие из
                        нас этого не замечают и не умеют ценить, при любом
                        пустяковом препятствии впадают в депрессию. <br />{" "}
                        Сегодня мы беседуем с очень красивой девушкой по имени
                        Лариса...
                    </p>
                    <img alt="Изображение" src={image} />
                </div>
                <button>
                    <Link to="../articles/1">
                        <img alt="Перейти" src={arrow} />
                    </Link>
                </button>
            </div>
        </div>
    );
    function clearForm() {
        const block = document.querySelector(".Feedback .form");
        block.children[1].value = "";
        block.children[0].children[0].value = "";
        block.children[0].children[1].value = "";
        block.children[0].children[2].value = "";
        document.querySelector(".Feedback .checkbox").children[0].checked = false;
    }
}
