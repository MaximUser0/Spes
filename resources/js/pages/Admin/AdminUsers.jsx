import React from "react";
import menu_icon from "../../assets/img/menu-icon.svg";
import profile_icon from "../../assets/img/profile-icon.svg";
import axios from "axios";

export default function AdminUsers() {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/users", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((result) => {
                setUsers(result.data);
            });
    }, []);
    return (
        <div className="AdminUsers">
            {users.map((user, index) => (
                <div key={"admin-users-" + index}>
                    <img
                        alt="Фотография пользователя"
                        src={user.src}
                        className="image"
                    />
                    <h2>{user.name}</h2>
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
                            <div
                                onClick={() => {
                                    changeBlock(index);
                                }}
                            >
                                <img alt="Профиль" src={profile_icon} />
                                <p>
                                    {user.is_blocked
                                        ? "Разблокировать"
                                        : "Заблокировать"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
    function changeBlock(index) {
        axios
            .get("../api/user/block/" + users[index].id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                users[index].is_blocked = !users[index].is_blocked;
                setUsers([...users]);
            });
    }
}
