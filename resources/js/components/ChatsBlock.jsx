import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
export default function ChatsBlock() {
    const chats = [
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
    ];
    return (
        <div className="ChatsBlock">
            <div className="top">
                <h2>Чаты</h2>
                <img alt="Форум" src={forumIcon} />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <div className="list">
                {chats.map((value, index) => (
                    <div key={"chats-block-element-" + index}>
                        <img alt="Изображение чата" src={example}/>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
