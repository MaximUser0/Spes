import React from "react";
import logo from "../assets/img/logo.svg";
import magnifier from "../assets/img/magnifier.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <img src={logo} alt="Spes" onClick={() => {navigate("/")}} />
            <div>
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <button>Регистрация</button>
        </header>
    );
}
