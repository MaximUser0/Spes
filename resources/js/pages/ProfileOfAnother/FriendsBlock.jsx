import React from "react";
import subscribe from "../../assets/img/subscribe.svg";
import ListBlock from "../Profile/ListBlock";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";

export default function FriendsBlock() {
    const { setSelectedMenu } = React.useContext(ProfileContext);
    const [friends, setFriends] = React.useState([]);
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
    React.useEffect(() => {
        getFriends();
    }, []);
    return (
        <div className="FriendsBlock">
            {friends.length == 0 ? (
                <h2>У вас пока нет друзей</h2>
            ) : (
                <ListBlock
                    array={friends}
                    type="friends"
                    texts={[
                        "Написать сообщение",
                        "Профиль",
                        "Запрос в друзья",
                    ]}
                    functions={[goToChat, goToProfile, subscribeTo]}
                    image={subscribe}
                />
            )}
        </div>
    );
    function getFriends() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/friend/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setFriends(response.data);
            });
    }
    function goToChat(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .post(
                window.location.origin + "/api/chat",
                { user_id: friends[index].user_id },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                setSelectedMenu(2);
                navigate("../profile?chat_id=" + response.data[0].id);
            });
    }
    function goToProfile(index) {
        navigate("../profile/" + friends[index].user_id);
    }
    function subscribeTo(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscribe/" + friends[index].user_id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                setSelectedMenu(5);
                navigate("../profile");
            })
            .catch(() => {
                setSelectedMenu(5);
                navigate("../profile");
            });
    }
}
