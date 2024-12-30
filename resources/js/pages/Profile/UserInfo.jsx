import React from "react";

export default function UserInfo() {
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
                <h2>Имя</h2>
                <p>{info.name}</p>
                <h2>Фамилия</h2>
                <p>{info.surname}</p>
                <h2>Возраст</h2>
                <p>
                    {info.age +
                        " " +
                        (info.age % 10 == 1
                            ? info.age == 11
                                ? "лет"
                                : "год"
                            : "лет")}
                </p>
            </div>
            <div>
                <h2>Цель знакомства</h2>
                <p>{info.purpose_of_dating}</p>
                <h2>Интересы и увлечения</h2>
                <p>{info.hobbies}</p>
                <h2>О себе</h2>
                <p>{info.about}</p>
            </div>
            <div>
                <h2>E-mail</h2>
                <p>{info.email}</p>
                <h2>Номер телефона</h2>
                <p>{info.number_phone}</p>
                <h2>Город</h2>
                <p>{info.city}</p>
            </div>
        </div>
    );
}
