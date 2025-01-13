import React from "react";
import { useSelector } from "react-redux";

export default function UserInfo({ isReadOnly }) {
    const info = useSelector((state) => state.auth.user);
    /*const info = {
        name: "Name",
        surname: "Surname",
        age: 25,
        purpose_of_dating: "Цель знакомства",
        hobbies: "Интересы и увлечения",
        about: "О себе",
        email: "euhqbeuqb@mail.ru",
        number_phone: "8(810)000-00-00",
        city: "Астрахань",
    };*/
    function defaultValue(value) {
        if (value == null) return "Не указано";
        else return value;
    }
    return (
        <div className="UserInfo">
            <div>
                <h2>Общие данные</h2>
                <p>Имя</p>
                <input
                    defaultValue={defaultValue(info.name.split(" ")[0])}
                    readOnly={isReadOnly}
                />
                <p>Фамилия</p>
                <input
                    defaultValue={defaultValue(info.name.split(" ")[1])}
                    readOnly={isReadOnly}
                />
                <p>Возраст</p>
                <input
                    defaultValue={
                        info.age != null
                            ? info.age +
                              " " +
                              (info.age % 10 == 1
                                  ? info.age == 11
                                      ? "лет"
                                      : "год"
                                  : "лет")
                            : "Не указано"
                    }
                    type={isReadOnly ? "text" : "date"}
                    readOnly={isReadOnly}
                />
            </div>
            <div>
                <h2>Личная информация</h2>
                <p>Цель знакомства</p>
                <input
                    defaultValue={defaultValue(info.purpose_of_dating)}
                    readOnly={isReadOnly}
                />
                <p>Интересы и увлечения</p>
                <input
                    defaultValue={defaultValue(info.hobbies)}
                    readOnly={isReadOnly}
                />
                <p>О себе</p>
                <input
                    defaultValue={defaultValue(info.about)}
                    readOnly={isReadOnly}
                />
            </div>
            <div>
                <h2>Контакты</h2>
                <p>E-mail</p>
                <input
                    defaultValue={defaultValue(info.email)}
                    readOnly={isReadOnly}
                />
                <p>Номер телефона</p>
                <input
                    defaultValue={defaultValue(info.number_phone)}
                    readOnly={isReadOnly}
                />
                <p>Город</p>
                {isReadOnly ? (
                    <h2>{defaultValue(info.city)}</h2>
                ) : (
                    <select defaultValue={info.city}>
                        <option value="">Не указано</option>
                        <option value="Астрахань">Астрахань</option>
                        <option value="Москва">Москва</option>
                        <option value="Самара">Самара</option>
                        <option value="Волгоград">Волгоград</option>
                    </select>
                )}
            </div>
        </div>
    );
}
