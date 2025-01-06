import React from "react";
import example from "../../assets/img/example-image.jpg";
import UserInfo from "./UserInfo";
import arrow_down from "../../assets/img/arrow-down.svg";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const [showMenu, setShowMenu] = React.useState(false);
    const user = { name: "Name Surname", user_name: "@dokspo", src: example };
    const navigate = useNavigate();
    return (
        <div className="Profile EditProfile">
            <div className="grayBlock"></div>
            <div className="content">
                <div className="info">
                    <img alt="Фотография пользователя" src={user.src} />
                    <div>
                        <h2>{user.name}</h2>
                        <p>{user.user_name}</p>
                    </div>
                    <button
                        onClick={() => {
                            navigate("../profile");
                        }}
                    >
                        Сохранить
                    </button>
                    <button
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                        className="mobile-menu-button"
                    >
                        <img alt="Меню" src={arrow_down} />
                    </button>
                    {showMenu ? (
                        <div className="mobile-menu">
                            <p
                                onClick={() => {
                                    navigate("../profile");
                                }}
                                className="active"
                            >
                                Сохранить
                            </p>
                            <p
                                onClick={() => {
                                    navigate("../profile");
                                }}
                            >
                                Вернуться в профиль
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="menu">
                    <p className="active">Профиль</p>
                </div>
                <UserInfo isReadOnly={false} />
            </div>
        </div>
    );
}
