import React from "react";
import { Link } from "react-router-dom";

export default function SingUp() {
    return (
        <div className="SingUp">
            <div className="form">
                <h1>Регистрация</h1>
                <input type="text" placeholder="ФИО" />
                <input type="text" placeholder="Номер телефона" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Пароль" />
                <input type="text" placeholder="Повтор пароля" />
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Согласие на обработку персональных данных</label>
                    <Link to="../profile"><button>Регистрация</button></Link>
                </div>
            </div>
            <div className="right">
                <div>
                    <h2>Добро пожаловать!</h2>
                    <p>
                        Чтобы оставаться на связи с нами, пожалуйста, войдите в
                        систему, указав свои личные данные
                    </p>
                    <Link to="../login"><button>Войти</button></Link>
                </div>
            </div>
        </div>
    );
}
