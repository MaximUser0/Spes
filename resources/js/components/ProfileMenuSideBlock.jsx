import React from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function ProfileMenuSideBlock() {
    const elements = [
        { index: 3, title: "Друзья" },
        { index: 4, title: "Подписчики" },
        { index: 5, title: "Мои подписки" },
    ];
    const { selectedMenu, setSelectedMenu } = React.useContext(ProfileContext);
    return (
        <div className="ProfileMenuSideBlock">
            {elements.map((elem, index) => (
                <p
                    key={"profile-menu-block-element-" + index}
                    className={selectedMenu == elem.index ? "active" : ""}
                    onClick={() => {
                        setSelectedMenu(elem.index);
                    }}
                >
                    {elem.title}
                </p>
            ))}
        </div>
    );
}
