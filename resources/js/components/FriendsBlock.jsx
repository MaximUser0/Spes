import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
export default function FriendsBlock() {
    const [friends, setFriends] = React.useState([]);
    const navigate = useNavigate();
    const info = useSelector((state) => state.auth.user);
    React.useEffect(() => {
        getFriends();
    }, []);
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
                {friends.map((value, index) => (
                    <div
                        key={"friends-block-element-" + index}
                        onClick={() => {
                            navigate("../profile/" + (value.user_one_id != info.id ? value.user_one_id : value.user_two_id));
                        }}
                    >
                        <img alt="Изображение друга" src={example} />
                        <p>{value.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    function getFriends() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/friend", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setFriends(response.data);
            });
    }
}
