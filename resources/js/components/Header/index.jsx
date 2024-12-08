import React from "react";
import logo from "../../assets/img/logo.svg";
import magnifier from "../../assets/img/magnifier.svg";
import user_image from "../../assets/img/example-image.jpg";
import arrow from "../../assets/img/arrow-menu.svg";
import bell from "../../assets/img/bell-icon.svg";
import { useNavigate } from "react-router-dom";
import RequestPopup from "./RequestPopup";
import Popup from "./Popup";

export default function Header() {
    const [popup, setPopup] = React.useState(0);
    const isUser = true;
    const navigate = useNavigate();
    return (
        <header>
            <img
                src={logo}
                alt="Spes"
                onClick={() => {
                    navigate("/");
                }}
            />
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            {isUser ? (
                <div className="userInfo">
                    <img
                        alt="Уведомления"
                        className="bell"
                        src={bell}
                        onClick={() => {
                            setPopup(popup==1?0:1);
                        }}
                    />
                    <img
                        alt="Фото профиля"
                        className="userImage"
                        src={user_image}
                    />
                    <p
                        onClick={() => {
                            setPopup(popup==2?0:2);
                        }}
                    >
                        Name Surname
                        <img
                            alt="Меню"
                            className={popup == 2 ? "reverse" : ""}
                            src={arrow}
                        />
                    </p>
                    {popup == 1 ? <RequestPopup /> : ""}
                    {popup == 2 ? <Popup /> : ""}
                </div>
            ) : (
                <button>Регистрация</button>
            )}
        </header>
    );
}
