import React from "react";
import example from "../../assets/img/example-image.jpg";
import logout_icon from "../../assets/img/logout-icon.svg";
import ListBlock from "./ListBlock";

export default function ForumBlock() {
    const forums = [
        { id: 1, name: "Название сообщества", src: example },
        { id: 2, name: "Название сообщества", src: example },
    ];
    return (
        <div className="ForumBlock">
            <ListBlock
                array={forums}
                type="forums"
                texts={["Сообщество", "Выйти из чата", "Чат"]}
                image={logout_icon}
            />
        </div>
    );
}
