import React from "react";
import arrow from "../assets/img/arrow-follow.svg";
import image from "../assets/img/feedback-image.png";

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
                    <button>Отправить</button>
                </div>
            </div>
            <div className="article">
                <h2>Название статьи</h2>
                <div>
                    <p>
                        Прежде всего, внедрение современных методик позволяет
                        оценить значение дальнейших направлений развития. Прежде
                        всего, внедрение современных методик позволяет<br/> Прежде
                        всего, внедрение современных методик позволяет оценить
                        значение дальнейших направлений развития. Прежде всего,
                        внедрение современных методик позволяет<br/> Прежде всего,
                        внедрение современных методик позволяет оценить значение
                        дальнейших направлений развития. Прежде всего, внедрение
                        современных методик позволяет
                    </p>
                    <img alt="Изображение" src={image} />
                </div>
                <button>
                    <img alt="Перейти" src={arrow} />
                </button>
            </div>
        </div>
    );
}
