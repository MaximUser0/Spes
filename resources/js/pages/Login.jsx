import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="Login">
            <div className="right">
                <div>
                    <h2>Добро пожаловать!</h2>
                    <p>
                        Введите свои личные данные и откройте для себя новый мир
                        возможностей
                    </p>
                    <Link to="../sing-up">
                        <button>Регистрация</button>
                    </Link>
                </div>
            </div>
            <div className="form">
                <h1>Вход в аккаунт</h1>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Пароль" />
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Согласие на обработку персональных данных</label>
                    <Link to="../profile">
                        <button>Войти</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
