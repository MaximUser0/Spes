import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LeftSideUserInfo() {
    const user = useSelector((state) => state.auth.user);
    const [userInfo, setUserInfo] = React.useState({
        friends: 0,
        subscribers: 0,
        chats: 0,
    });

    React.useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <div className="LeftSideUserInfo">
            <div>
                <Link to="../profile">
                    <div className="common">
                        <img
                            alt="Фото пользователя"
                            src={
                                user.src != null
                                    ? user.src
                                    : "../img/Example2.svg"
                            }
                        />
                        <div>
                            <p>{user.name}</p>
                            <p>@user_name</p>
                        </div>
                    </div>
                </Link>
                <div className="statistics">
                    <div>
                        <h2>{userInfo.friends}</h2>
                        <p>Друзей</p>
                    </div>
                    <div>
                        <h2>{userInfo.subscribers}</h2>
                        <p>Подписчиков</p>
                    </div>
                    <div>
                        <h2>{userInfo.chats}</h2>
                        <p>Чатов</p>
                    </div>
                </div>
            </div>
        </div>
    );

    function getUserInfo() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/user/info", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setUserInfo(response.data);
            });
    }
}
