import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import participants_icon from "../assets/img/forum-participants-icon.svg";
import { useNavigate } from "react-router-dom";

export default function Forums() {
    const [forums, setForums] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(() => {
        getForums();
    }, []);
    return (
        <div className="Forums">
            {forums.map((forum, index) => (
                <div key={"forum-block-" + index}>
                    <h2>{forum.title}</h2>
                    <p>{forum.about}</p>
                    <div>
                        <img alt="Дата" src={date_icon} />
                        <p>
                            {forum.created_at.slice(8, 10) +
                                "." +
                                forum.created_at.slice(5, 7) +
                                "." +
                                forum.created_at.slice(2, 4)}
                        </p>
                        <img alt="Участники" src={participants_icon} />
                        <p>{forum.participants_count}</p>
                    </div>
                    <button
                        onClick={() => {
                            joinToForum(forum.id);
                        }}
                        title={
                            sessionStorage.getItem("token") == null
                                ? "Войдите в аккаунт"
                                : ""
                        }
                    >
                        Вступить
                    </button>
                </div>
            ))}
        </div>
    );

    function getForums() {
        axios
            .get(window.location.origin + "/api/forum", {})
            .then((response) => {
                setForums(response.data);
            });
    }
    function joinToForum(forum_id) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .post(
                window.location.origin + "/api/forum/join",
                { forum_id },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then(() => {
                navigate("../forum/" + forum_id);
            });
    }
}
