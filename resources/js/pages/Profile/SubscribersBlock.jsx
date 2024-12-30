import React from "react";
import example from "../../assets/img/example-image.jpg";
import subscribe from "../../assets/img/subscribe.svg";
import ListBlock from "./ListBlock";

export default function SubscribersBlock() {
    const subscribers = [
        { id: 1, name: "Name Surname", src: example },
        { id: 2, name: "Name Surname", src: example },
        { id: 3, name: "Name Surname", src: example },
    ];
    return (
        <div className="SubscribersBlock">
            <ListBlock
                array={subscribers}
                type="subscribers"
                texts={["Написать сообщение", "Профиль", "Добавить в друзья"]}
                image={subscribe}
            />
        </div>
    );
}
