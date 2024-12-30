import React from "react";
import example from "../../assets/img/example-image.jpg";
import unsubscribe from "../../assets/img/unsubscribe.svg";
import ListBlock from "./ListBlock";

export default function SubscriptionsBlock() {
    const subscribers = [
        { id: 1, name: "Name Surname", src: example },
        { id: 2, name: "Name Surname", src: example },
        { id: 3, name: "Name Surname", src: example },
    ];
    return (
        <div className="SubscriptionsBlock">
            <ListBlock
                array={subscribers}
                type="subscribers"
                texts={["Написать сообщение", "Профиль", "Отписаться"]}
                image={unsubscribe}
            />
        </div>
    );
}
