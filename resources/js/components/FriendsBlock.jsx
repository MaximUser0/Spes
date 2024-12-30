import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
export default function FriendsBlock() {
    const forums = [
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
        "Name Surname",
    ];
    return (
        <div className="RightSideForumBlock">
            <div className="top">
                <h2>Друзья</h2>
                <img alt="Друзья" src={forumIcon} />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <div className="list">
                {forums.map((value, index) => (
                    <div key={"friends-block-element-" + index}>
                        <img alt="Изображение друга" src={example}/>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
