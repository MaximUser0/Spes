import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
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
                    <button
                        onClick={() => {
                            navigate("../profile");
                        }}
                    >
                        Войти
                    </button>
                </div>
                <p className="already">
                    Нет аккаунта? <Link to="../sing-up">Регистрация</Link>
                </p>
            </div>
        </div>
    );
}
