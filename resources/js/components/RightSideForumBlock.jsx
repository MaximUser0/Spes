import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
export default function RightSideForumBlock() {
    const forums = [
        "Название форума",
        "Название форума",
        "Название форума",
        "Название форума",
        "Название форума",
        "Название форума",
        "Название форума",
    ];
    return (
        <div className="RightSideForumBlock">
            <div className="top">
                <h2>Форум</h2>
                <img alt="Форум" src={forumIcon} />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <div className="list">
                {forums.map((value, index) => (
                    <div key={"forum-block-element-" + index}>
                        <img alt="Изображение форума" src={example}/>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
