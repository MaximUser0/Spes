import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import example from "../assets/img/example-image.jpg";
import sent from "../assets/img/sent.svg";
import attach from "../assets/img/attach.svg";
import arrow from "../assets/img/arrow-follow.svg";

export default function Forum() {
    const [openMobileChat, setOpenMobileChat] = React.useState(false);
    const forums = [
        {
            id: 1,
            src: example,
            title: "Название сообщества",
            last_message: "текст последнего сообщения",
            time: "14:30",
            new_messages: 2,
        },
        {
            id: 1,
            src: example,
            title: "Название сообщества",
            last_message: null,
            time: "14:30",
            new_messages: 0,
        },
        {
            id: 1,
            src: example,
            title: "Название сообщества",
            last_message: null,
            time: "14:30",
            new_messages: 0,
        },
    ];
    const messages = [
        { id: 1, text: "Cообщение1", time: "14:30", is_owner: true },
        {
            id: 1,
            text: "Текст последнего большого сообщения",
            time: "14:30",
            is_owner: true,
        },
        { id: 1, text: "Cообщение", time: "14:30", is_owner: false },
    ];
    return (
        <div className={"Forum" + (openMobileChat ? " openMobileChat" : "")}>
            <div className="find">
                <div>
                    <img src={magnifier} alt="Найти" />
                    <input type="text" placeholder="Поиск" name="find" />
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
                <img alt="Фото сообщества" src={example} />
                <h2>Название сообщества</h2>
            </div>
            <div className="list">
                <div>
                    {forums.map((value, index) => (
                        <div
                            key={"forum-in-list-" + index}
                            onClick={() => {
                                setOpenMobileChat(true);
                            }}
                        >
                            <img alt="Фото сообщества" src={value.src} />
                            <div className="text">
                                <h3>{value.title}</h3>
                                <p className="last">{value.last_message}</p>
                            </div>
                            <div>
                                <p className="time">{value.time}</p>
                                {value.new_messages != 0 ? (
                                    <p className="new">{value.new_messages}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat">
                <div>
                    {messages.map((message, index) => (
                        <div
                            key={"message-in-chat-" + index}
                            className={message.is_owner ? "right" : "left"}
                        >
                            <p>{message.text}</p>
                            <p className="time">{message.time}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="input">
                <img alt="Прикрепить" src={attach} />
                <input type="text" placeholder="Сообщение" name="message" />
                <img alt="Послать" src={sent} />
            </div>
        </div>
    );
}
