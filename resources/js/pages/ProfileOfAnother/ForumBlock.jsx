import React from "react";
import logout_icon from "../../assets/img/logout-icon.svg";
import ListBlock from "../Profile/ListBlock";
import { useNavigate } from "react-router-dom";

export default function ForumBlock() {
    const [forums, setForums] = React.useState([]);
    const navigate = useNavigate();
    const id = location.pathname.split("/")[2];

    React.useEffect(() => {
        getForums();
    }, []);
    return (
        <div className="ForumBlock">
            {forums.length == 0 ? (
                <h2>Вы пока не участвуете в форумах</h2>
            ) : (
                <ListBlock
                    array={forums}
                    type="forums"
                    texts={["Чат", "Сообщества", "Присоединиться"]}
                    functions={[goToChat, goToForums, joinToForum]}
                    image={logout_icon}
                />
            )}
        </div>
    );
    function getForums() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/forum/ofAnother/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setForums(response.data);
            });
    }
    function goToChat(index) {
        navigate("../forum/" + forums[index].id);
    }
    function goToForums(index) {
        navigate("../forums");
    }
    function joinToForum(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .post(
                window.location.origin + "/api/forum/join",
                { forum_id: forums[index].id },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then(() => {
                navigate("../forum/" + forums[index].id);
            });
    }
}
