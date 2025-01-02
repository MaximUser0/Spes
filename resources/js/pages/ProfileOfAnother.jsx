import React from "react";
import { ProfileContext } from "../context/ProfileContext";
import example from "../assets/img/example-image.jpg";
import { useNavigate } from "react-router-dom";

export default function ProfileOfAnother() {
    const { selectedMenu, setSelectedMenu } = React.useContext(ProfileContext);
    const navigate = useNavigate();
    const info = {
        name: "Name",
        surname: "Surname",
        age: 25,
        purpose_of_dating: "Цель знакомства",
        hobbies: "Интересы и увлечения",
        about: "О себе",
        email: "euhqbeuqb@mail.ru",
        number_phone: "8(810)000-00-00",
        city: "Астрахань",
        src: example,
        user_name: "@dokspo",
    };
    const menuList = [
        "Профиль",
        "Форум",
        "Чаты",
        "Друзья",
        "Подписчики",
        "Мои подписки",
    ];
    React.useEffect(() => {
        setSelectedMenu(0);
    }, []);
    return (
        <div className={"Profile"}>
            <div className="grayBlock"></div>
            <div className="content">
                <div className="info">
                    <img alt="Фотография пользователя" src={info.src} />
                    <div>
                        <h2>{info.name + " " + info.surname}</h2>
                        <p>{info.user_name}</p>
                    </div>
                    <button>Подписаться</button>
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
                        <h2>{info.name}</h2>
                        <p>Фамилия</p>
                        <h2>{info.surname}</h2>
                        <p>Возраст</p>
                        <h2>
                            {info.age +
                                " " +
                                (info.age % 10 == 1
                                    ? info.age == 11
                                        ? "лет"
                                        : "год"
                                    : "лет")}
                        </h2>
                    </div>
                    <div>
                        <h2>Личная информация</h2>
                        <p>Цель знакомства</p>
                        <h2>{info.purpose_of_dating}</h2>
                        <p>Интересы и увлечения</p>
                        <h2>{info.hobbies}</h2>
                        <p>О себе</p>
                        <h2>{info.about}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
