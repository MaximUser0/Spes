import React from "react";
import { ProfileContext } from "../context/ProfileContext";
import arrow_down from "../assets/img/arrow-down.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfileOfAnother({ setPanels }) {
    const { selectedMenu, setSelectedMenu } = React.useContext(ProfileContext);
    const [showMenu, setShowMenu] = React.useState(false);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const [info, setInfo] = React.useState({
        name: "",
        src: null,
    });
    const menuList = [
        "Профиль",
        "Форум",
        "Чаты",
        "Друзья",
        "Подписчики",
        "Мои подписки",
    ];
    const buttonList = [
        "Подписаться",
        "Добавить в друзья",
        "Отписаться",
        "Удалить из друзей",
    ];
    React.useEffect(() => {
        getAnotherUser();
        setSelectedMenu(0);
    }, [location]);
    return (
        <div className={"Profile"}>
            <div className="grayBlock"></div>
            <div className="content">
                <div className="info">
                    <img
                        alt="Фотография пользователя"
                        src={
                            info.src == null ? "../img/Example2.svg" : info.src
                        }
                    />
                    <div>
                        <h2>{defaultValue(info.name)}</h2>
                        <p>{"@user_name"}</p>
                    </div>
                    <button>{buttonList[info.relation]}</button>
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
                                Вернуться в профиль
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="menu">
                    {menuList.map((value, index) => (
                        <p
                            key={"profile-menu-element-" + index}
                            className={selectedMenu == index ? "active" : ""}
                            onClick={() => {
                                setSelectedMenu(index);
                                navigate("../profile");
                            }}
                        >
                            {value}
                        </p>
                    ))}
                </div>
                <div className="UserInfo">
                    <div>
                        <h2>Общие данные</h2>
                        <p>Имя</p>
                        <h2>{defaultValue(info.name.split(" ")[0])}</h2>
                        <p>Фамилия</p>
                        <h2>{defaultValue(info.name.split(" ")[1])}</h2>
                        <p>Возраст</p>
                        <h2>
                            {info.date_of_birth != null
                                ? getAge(info.date_of_birth)
                                : "Не указан"}
                        </h2>
                    </div>
                    <div>
                        <h2>Личная информация</h2>
                        <p>Цель знакомства</p>
                        <h2>{defaultValue(info.purpose_of_dating)}</h2>
                        <p>Интересы и увлечения</p>
                        <h2>{defaultValue(info.hobbies)}</h2>
                        <p>О себе</p>
                        <h2>{defaultValue(info.about)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    function getAnotherUser() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/user/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setInfo(response.data);
            });
    }
    function defaultValue(value) {
        if (value == null) return "Не указано";
        else return value;
    }
    function getAge(date_of_birth) {
        const date = new Date(date_of_birth);
        const now = new Date();
        let result = Math.round((now - date) / 31536000000);
        result +=
            " " + (result % 10 == 1 ? (result == 11 ? "лет" : "год") : "лет");
        return result;
    }
}
