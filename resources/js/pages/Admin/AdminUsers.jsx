import React from "react";
import example from "../../assets/img/example-image.jpg";
import menu_icon from "../../assets/img/menu-icon.svg";
import profile_icon from "../../assets/img/profile-icon.svg";

export default function AdminUsers() {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
    const users = [
        { id: 1, name: "Name Surname", src: example },
        { id: 2, name: "Name Surname", src: example },
    ];
    return (
        <div className="AdminUsers">
            {users.map((users, index) => (
                <div key={"admin-users-" + index}>
                    <img
                        alt="Фотография пользователя"
                        src={users.src}
                        className="image"
                    />
                    <h2>{users.name}</h2>
                    <img
                        alt="Меню"
                        src={menu_icon}
                        className="menu"
                        onClick={() => {
                            setSelectedMenuPopup(
                                selectedMenuPopup == -1
                                    ? index
                                    : selectedMenuPopup != index
                                    ? index
                                    : -1
                            );
                        }}
                    />
                    {selectedMenuPopup == index ? (
                        <div className="menuPopup">
                            <div>
                                <img alt="Профиль" src={profile_icon} />
                                <p>Заблокировать</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
}
