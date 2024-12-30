import React from "react";
import example from "../../assets/img/example-image.jpg";
import unsubscribe from "../../assets/img/unsubscribe.svg";
import ListBlock from "./ListBlock";

export default function FriendsBlock() {
    const friends = [
        { id: 1, name: "Name Surname", src: example },
        { id: 2, name: "Name Surname", src: example },
    ];
    return (
        <div className="FriendsBlock">
            <ListBlock
                array={friends}
                type="friends"
                texts={["Написать сообщение", "Профиль", "Удалить из друзей"]}
                image={unsubscribe}
            />
        </div>
    );
}
