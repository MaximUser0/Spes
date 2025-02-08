import React from "react";
import logout_icon from "../../assets/img/logout-icon.svg";
import ListBlock from "./ListBlock";
import { useNavigate } from "react-router-dom";

export default function ForumBlock() {
    const [forums, setForums] = React.useState([]);
    const navigate = useNavigate();

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
                    texts={["Чат", "Сообщества", "Выйти из чата"]}
                    functions={[goToChat, goToForums, addInFriends]}
                    image={logout_icon}
                />
            )}
        </div>
    );
    function getForums() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/forum/my", {
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
    function goToForums(index) {}
    function addInFriends(index) {}
}
