import React from "react";
import unsubscribe from "../../assets/img/unsubscribe.svg";
import ListBlock from "./ListBlock";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";

export default function FriendsBlock() {
    const { setSelectedMenu } = React.useContext(ProfileContext);
    const [friends, setFriends] = React.useState([]);
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
                        "Удалить из друзей",
                    ]}
                    functions={[goToChat, goToProfile, deleteFromFriends]}
                    image={unsubscribe}
                />
            )}
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
                navigate("../profile?chat_id=" + response.data.id);
            });
    }
    function goToProfile(index) {
        navigate("../profile/" + friends[index].user_id);
    }
    function deleteFromFriends(index) {
        if (sessionStorage.getItem("token") == null) return;
        if (window.confirm("Вы уверены? Это действие нельзя отменить!")) {
            axios
                .delete(
                    window.location.origin +
                        "/api/friend/" +
                        friends[index].user_id,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                )
                .then(() => {
                    friends.splice(index, 1);
                    setFriends([...friends]);
                });
        }
    }
}
