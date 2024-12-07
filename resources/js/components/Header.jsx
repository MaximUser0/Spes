import React from "react";
import logo from "../assets/img/logo.svg";
import magnifier from "../assets/img/magnifier.svg";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Spes" />
            <div>
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <button>Регистрация</button>
        </header>
    );
}
