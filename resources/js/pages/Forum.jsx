import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import sent from "../assets/img/sent.svg";
import attach from "../assets/img/attach.svg";
import arrow from "../assets/img/arrow-follow.svg";
import cross from "../assets/img/cross.svg";
import { useSelector } from "react-redux";

export default function Forum({ type }) {
    const [openMobileChat, setOpenMobileChat] = React.useState(false);
    const [attachFile, setAttachFile] = React.useState(null);
    const [selected, setSelected] = React.useState(0);
    const [message, setMessage] = React.useState("");
    const [forums, setForums] = React.useState([
        { messages: "[]", name: "" },
    ]);
    const [find, setFind] = React.useState("");
    const user = useSelector((state) => state.auth.user);
    React.useEffect(() => {
        getForums();
    }, []);

    return (
        <div className={"Forum" + (openMobileChat ? " openMobileChat" : "")}>
            <div className="find">
                <div>
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
            </div>
            <div className="title">
                <button
                    onClick={() => {
                        setOpenMobileChat(false);
                    }}
                >
                    <img src={arrow} alt="Назад" />
                </button>
                <img
                    alt="Фото сообщества"
                    src={
                        forums[selected].src != null
                            ? forums[selected].src
                            : "../img/Example2.svg"
                    }
                />
                <h2>{forums[selected].name}</h2>
            </div>
            <div className="list">
                <div>
                    {forums.map((value, index) => (
                        <div
                            key={"forum-in-list-" + index}
                            onClick={() => {
                                setOpenMobileChat(true);
                                setSelected(index);
                                setTimeout(() => {
                                    document
                                        .querySelector(".Forum .chat")
                                        .scrollTo(0, 1000);
                                }, 0);
                                readChat(value.id);
                            }}
                            className={
                                !value.name
                                    .toLowerCase()
                                    .includes(find.toLowerCase())
                                    ? "hidden"
                                    : ""
                            }
                        >
                            <img alt="Фото сообщества" src={value.src} />
                            <div className="text">
                                <h3>{value.name}</h3>
                                <p className="last">{lastMessage(index)}</p>
                            </div>
                            <div>
                                <p className="time">{value.time}</p>
                                {newMessages(index)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat">
                <div>
                    {forums[selected].messages != null
                        ? JSON.parse(forums[selected].messages).map(
                              (message, index) => (
                                  <div
                                      key={"message-in-chat-" + index}
                                      className={
                                          (message.owner == user.id
                                              ? "right"
                                              : "left") +
                                          (message.text == null ? " file" : "")
                                      }
                                  >
                                      {message.text != null ? (
                                          <p>{message.text}</p>
                                      ) : (
                                          <img alt="Файл" src={message.file} />
                                      )}
                                      <p className="time">
                                          {message.date.slice(9, 14)}
                                      </p>
                                  </div>
                              )
                          )
                        : ""}
                </div>
            </div>
            <div className="input">
                {type != "forum" ? (
                    <img
                        alt="Прикрепить"
                        src={attach}
                        onClick={() => {
                            document.getElementById("sent-file").click();
                        }}
                    />
                ) : (
                    ""
                )}
                <input
                    type="file"
                    accept="image/*"
                    id="sent-file"
                    onChange={(e) => {
                        setAttachFile(e.target.files[0]);
                        setMessage(e.target.files[0].name);
                    }}
                />
                <input
                    type="text"
                    placeholder="Сообщение"
                    name="message"
                    readOnly={attachFile != null}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                {attachFile != null ? (
                    <img
                        alt="Отменить"
                        src={cross}
                        onClick={() => {
                            setAttachFile(null);
                            setMessage("");
                        }}
                    />
                ) : (
                    ""
                )}
                <img
                    alt="Послать"
                    src={sent}
                    onClick={() => {
                        sentMessage(forums[selected].id);
                    }}
                />
            </div>
        </div>
    );
    function getForums() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(
                window.location.origin +
                    "/api/" +
                    type +
                    (type == "forum" ? "/my" : ""),
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                setForums(response.data);
                let chat_id =
                    window.location.search != ""
                        ? window.location.search.split("chat_id")[1].slice(1, 2)
                        : null;
                if (chat_id != null) {
                    response.data.forEach((value, index) => {
                        console.log("id " + value.id);
                        if (value.id == chat_id) {
                            setSelected(index);
                            return;
                        }
                    });
                    setTimeout(() => {
                        document
                            .querySelector(".Forum .chat")
                            .scrollTo(0, 1000);
                    }, 0);
                }
            });
    }
    function sentMessage(index) {
        if (attachFile != null) {
            sentFile(index);
            return;
        }
        if (sessionStorage.getItem("token") == null) return;
        axios
            .patch(
                window.location.origin + "/api/" + type,
                { index, message },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                setMessage("");
                forums[selected].messages = response.data.messages;
                setForums([...forums]);
            });
    }
    function sentFile(index) {
        if (sessionStorage.getItem("token") == null) return;
        const body = new FormData();
        body.append("index", index);
        body.append("file", attachFile);
        axios
            .post(window.location.origin + "/api/" + type + "/file", body, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setMessage("");
                forums[selected].messages = response.data.messages;
                setForums([...forums]);
            });
    }
    function readChat(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios.get(window.location.origin + "/api/" + type + "/" + index, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
    }
    function newMessages(index) {
        const messages = JSON.parse(forums[index].messages);
        const length = messages.filter(
            (message) => message.read == false && message.owner != user.id
        ).length;
        return length != 0 ? <p className="new">{length}</p> : "";
    }
    function lastMessage(index) {
        const messages = JSON.parse(forums[index].messages);
        if (messages == "") return null;
        if (messages[messages.length - 1].text == null) {
            return "Изображение";
        }
        return messages[messages.length - 1].text;
    }
}
