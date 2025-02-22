import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import { useNavigate } from "react-router-dom";
export default function ChatsBlock() {
    const [chats, setChats] = React.useState([{ name: "" }]);
    const [find, setFind] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        getChats();
    }, []);

    return (
        <div className="ChatsBlock">
            <div className="top">
                <h2>Чаты</h2>
                <img
                    alt="Форум"
                    src={forumIcon}
                    onClick={() => {
                        navigate("../profile?page=chat");
                    }}
                />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input
                    defaultValue={find}
                    type="text"
                    placeholder="Поиск"
                    name="find"
                    onChange={(e) => {
                        setFind(e.target.value);
                    }}
                />
            </div>
            <div className="list">
                {chats.length == 0 || chats[0].name == "" ? (
                    <p>Вы не состоите в чатах</p>
                ) : (
                    filterItems(chats).map((value, index) => (
                        <div
                            key={"chats-block-element-" + index}
                            onClick={() => {
                                navigate(
                                    "../profile?page=chat&chat_id=" + value.id
                                );
                            }}
                        >
                            <img
                                alt="Изображение чата"
                                src={
                                    value.src != ""
                                        ? value.src
                                        : "./img/Example2.svg"
                                }
                            />
                            <p>{value.name}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
    function getChats() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/chat", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setChats(response.data);
            });
    }
    function filterItems(array) {
        let result = array;
        if (find != "") {
            result = array.filter((value) =>
                value.name.toLowerCase().includes(find.toLowerCase())
            );
        }
        if (result.length > 7) {
            result = result.slice(0, 7);
        }
        return result;
    }
}
