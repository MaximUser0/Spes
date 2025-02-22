import React from "react";
import magnifier from "../../assets/img/magnifier.svg";
import add_friend from "../../assets/img/add-friend.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Find() {
    const [find, setFind] = React.useState("");
    const [result, setResult] = React.useState([]);
    const navigate = useNavigate();
    return (
        <div className="find">
            <img src={magnifier} alt="Найти" onClick={() => findElements()} />
            <input
                type="text"
                placeholder="Поиск"
                name="find"
                value={find}
                onChange={(e) => setFind(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        findElements();
                    }
                }}
                readOnly={sessionStorage.getItem("token") == null}
                title={
                    sessionStorage.getItem("token") == null
                        ? "Для поиска по сайту нужно войти в аккаунт"
                        : ""
                }
            />
            {result.length != 0 ? (
                <div className="findResult">
                    {result.map((elem, index) => (
                        <div key={"find-elem-in-header-" + index}>
                            <img
                                alt="Фото профиля"
                                src={
                                    elem.src != null
                                        ? elem.src
                                        : "../img/Example2.svg"
                                }
                                onClick={() => {
                                    if (
                                        elem.type == "user" &&
                                        sessionStorage.getItem("token") != null
                                    ) {
                                        navigate("../profile/" + elem.id);
                                        setFind("");
                                        setResult([]);
                                    }
                                }}
                            />
                            <div>
                                <h2>
                                    {elem.type == "user"
                                        ? elem.name
                                        : elem.title}
                                </h2>
                                <p
                                    onClick={() => {
                                        if (elem.type == "user") {
                                            subscribe(elem.id);
                                        } else {
                                            navigate(
                                                "../" +
                                                    elem.type +
                                                    "/" +
                                                    elem.id
                                            );
                                            setFind("");
                                            setResult([]);
                                        }
                                    }}
                                >
                                    {elem.type == "user" ? (
                                        <img alt="Добавить" src={add_friend} />
                                    ) : (
                                        ""
                                    )}
                                    {elem.type == "user"
                                        ? "Запрос на дружбу"
                                        : "Перейти"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    );
    function findElements() {
        if (find.trim() == "") {
            setFind("");
            setResult([]);
            return;
        }
        axios
            .get("../api/find?text=" + find.trim().toLowerCase(), {})
            .then((response) => {
                console.log(response.data);
                setResult(response.data);
            });
    }
    function subscribe(id) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscribe/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                navigate("../profile");
                setResult([]);
                setFind("");
            })
            .catch(() => {
                navigate("../profile");
                setResult([]);
                setFind("");
            });
    }
}
