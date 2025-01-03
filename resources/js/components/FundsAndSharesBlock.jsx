import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
export default function FundsAndSharesBlock() {
    const funds = [
        "Название фонда",
        "Название акции",
        "Название фонда",
        "Название акции",
    ];
    return (
        <div className="FundsAndSharesBlock">
            <div className="top">
                <h2>Фонды и акции</h2>
                <img alt="Форум" src={forumIcon} />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input type="text" placeholder="Поиск" name="find" />
            </div>
            <div className="list">
                {funds.map((value, index) => (
                    <div key={"funds-block-element-" + index}>
                        <img alt="Изображение" src={example}/>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}