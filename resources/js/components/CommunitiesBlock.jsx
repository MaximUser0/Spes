import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
export default function CommunitiesBlock() {
    const forums = [
        "Название сообщества",
        "Название сообщества",
        "Название сообщества",
        "Название сообщества",
        "Название сообщества",
        "Название сообщества",
        "Название сообщества",
    ];
    return (
        <div className="RightSideForumBlock">
            <div className="top">
                <h2>Сообщества</h2>
                <img alt="Сообщества" src={forumIcon} />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <div className="list">
                {forums.map((value, index) => (
                    <div key={"communities-block-element-" + index}>
                        <img alt="Изображение сообщества" src={example}/>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
