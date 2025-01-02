import React from "react";

export default function UserInfo({ isReadOnly }) {
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
    };
    return (
        <div className="UserInfo">
            <div>
                <h2>Общие данные</h2>
                <p>Имя</p>
                <input defaultValue={info.name} readOnly={isReadOnly} />
                <p>Фамилия</p>
                <input defaultValue={info.surname} readOnly={isReadOnly} />
                <p>Возраст</p>
                <input
                    defaultValue={
                        info.age +
                        " " +
                        (info.age % 10 == 1
                            ? info.age == 11
                                ? "лет"
                                : "год"
                            : "лет")
                    }
                    type={isReadOnly ? "text" : "date"}
                    readOnly={isReadOnly}
                />
            </div>
            <div>
                <h2>Личная информация</h2>
                <p>Цель знакомства</p>
                <input
                    defaultValue={info.purpose_of_dating}
                    readOnly={isReadOnly}
                />
                <p>Интересы и увлечения</p>
                <input defaultValue={info.hobbies} readOnly={isReadOnly} />
                <p>О себе</p>
                <input defaultValue={info.about} readOnly={isReadOnly} />
            </div>
            <div>
                <h2>Контакты</h2>
                <p>E-mail</p>
                <input defaultValue={info.email} readOnly={isReadOnly} />
                <p>Номер телефона</p>
                <input defaultValue={info.number_phone} readOnly={isReadOnly} />
                <p>Город</p>
                {isReadOnly ? (
                    <h2>{info.city}</h2>
                ) : (
                    <select defaultValue={info.city}>
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
