import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function UserInfo({ isReadOnly, edit }) {
    const [error, setError] = React.useState({ input: 0, message: "" });
    const info = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function defaultValue(value) {
        if (value == null && isReadOnly) return "Не указано";
        else return value;
    }
    React.useEffect(() => {
        if (edit.edit) {
            update();
        }
    }, [edit]);
    return (
        <div className="UserInfo">
            <div>
                <h2>Общие данные</h2>
                <p>Имя</p>
                <input
                    defaultValue={defaultValue(info.name.split(" ")[0])}
                    className={error.input == 1 ? "error" : ""}
                    id="update-info-name"
                    readOnly={isReadOnly}
                />
                <p>Фамилия</p>
                <input
                    defaultValue={defaultValue(info.name.split(" ")[1])}
                    className={error.input == 1 ? "error" : ""}
                    id="update-info-surname"
                    readOnly={isReadOnly}
                />
                <p>Возраст</p>
                <input
                    defaultValue={
                        isReadOnly
                            ? info.date_of_birth != null
                                ? getAge(info.date_of_birth)
                                : "Не указано"
                            : info.date_of_birth
                    }
                    type={isReadOnly ? "text" : "date"}
                    id="update-info-age"
                    min="1900-01-01"
                    max={getMaxDate()}
                    readOnly={isReadOnly}
                />
                {error.input != 0 ? (
                    <p className="error-message">{error.message}</p>
                ) : (
                    ""
                )}
            </div>
            <div>
                <h2>Личная информация</h2>
                <p>Цель знакомства</p>
                <input
                    defaultValue={defaultValue(info.purpose_of_dating)}
                    id="update-info-purpose"
                    readOnly={isReadOnly}
                />
                <p>Интересы и увлечения</p>
                <input
                    defaultValue={defaultValue(info.hobbies)}
                    id="update-info-hobbies"
                    readOnly={isReadOnly}
                />
                <p>О себе</p>
                <input
                    defaultValue={defaultValue(info.about)}
                    id="update-info-about"
                    readOnly={isReadOnly}
                />
            </div>
            <div>
                <h2>Контакты</h2>
                <p>E-mail</p>
                <input
                    defaultValue={defaultValue(info.email)}
                    className={error.input == 2 ? "error" : ""}
                    id="update-info-email"
                    readOnly={isReadOnly}
                />
                <p>Номер телефона</p>
                <input
                    defaultValue={defaultValue(info.number_phone)}
                    className={error.input == 3 ? "error" : ""}
                    id="update-info-number"
                    readOnly={isReadOnly}
                />
                <p>Город</p>
                {isReadOnly ? (
                    <h2>{defaultValue(info.city)}</h2>
                ) : (
                    <select defaultValue={info.city} id="update-info-city">
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

    function update() {
        const array = {
            name:
                document.getElementById("update-info-name").value +
                " " +
                document.getElementById("update-info-surname").value,
            email: document.getElementById("update-info-email").value,
            number_phone: document.getElementById("update-info-number").value,
        };
        let error_check = !/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(
            array.email
        )
            ? { input: 2, message: "Неправильный формат почты" }
            : !/^[а-яА-Яa-zA-Z0-9]+ +[а-яА-Яa-zA-Z0-9]+$/.test(array.name)
            ? { input: 1, message: "Неправильный формат имени" }
            : !/^[+0-9]{11,15}$/.test(array.number_phone)
            ? {
                  input: 3,
                  message: "Неправильный формат номера (только цифры и '+')",
              }
            : { input: 0, message: "" };
        setError(error_check);
        if (error_check.input > 0) {
            edit.setEdit(false);
            return;
        }

        const body = new FormData();
        body.append("name", array.name);
        body.append(
            "date_of_birth",
            document.getElementById("update-info-age").value
        );
        body.append(
            "purpose_of_dating",
            document.getElementById("update-info-purpose").value
        );
        body.append(
            "hobbies",
            document.getElementById("update-info-hobbies").value
        );
        body.append(
            "about",
            document.getElementById("update-info-about").value
        );

        body.append("number_phone", array.number_phone);
        body.append("city", document.getElementById("update-info-city").value);
        if (array.email != info.email) {
            body.append("email", array.email);
        }
        if (edit.userImage != null) {
            body.append("src", edit.userImage);
        }

        axios
            .post(window.location.origin + "/api/user", body, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                dispatch(setUser(response.data));
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
    function getAge(date_of_birth) {
        const date = new Date(date_of_birth);
        const now = new Date();
        let result = Math.round((now - date) / 31536000000);
        result +=
            " " + (result % 10 == 1 ? (result == 11 ? "лет" : "год") : "лет");
        return result;
    }
    function getMaxDate() {
        const date = new Date();
        return (
            date.getFullYear() -
            18 +
            "-" +
            date.getMonth() +
            1 +
            "-" +
            date.getDate()
        );
    }
}
