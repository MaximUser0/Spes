import React from "react";
import UserInfo from "./UserInfo";
import arrow_down from "../../assets/img/arrow-down.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditProfile() {
    const [showMenu, setShowMenu] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [userImage, setUserImage] = React.useState(null);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    return (
        <div className="Profile EditProfile">
            <div className="grayBlock"></div>
            <div className="content">
                <div className="info">
                    <img
                        alt="Фотография пользователя"
                        src={
                            user.src != null ? user.src : "../img/Example2.svg"
                        }
                        onClick={() => {
                            document.getElementById('change-user-image').click();
                        }}
                    />
                    <input type="file" accept="image/*" id="change-user-image" onChange={(e) => {setUserImage(e.target.files[0]); console.log(e.target.files[0])}}/>
                    <div>
                        <h2>{user.name}</h2>
                        <p>{"@user_name"}</p>
                    </div>
                    <button
                        onClick={() => {
                            setEdit(true);
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
                                    setEdit(true);
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
                <UserInfo isReadOnly={false} edit={{ edit, setEdit, userImage }} />
            </div>
        </div>
    );
}
