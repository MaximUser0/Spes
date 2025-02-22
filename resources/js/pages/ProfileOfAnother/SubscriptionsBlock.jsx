import React from "react";
import subscribe from "../../assets/img/subscribe.svg";
import ListBlock from "../Profile/ListBlock";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";

export default function SubscriptionsBlock() {
    const { setSelectedMenu } = React.useContext(ProfileContext);
    const [subscribers, setSubscribers] = React.useState([]);
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
    React.useEffect(() => {
        getSubscribers();
    }, []);
    return (
        <div className="SubscriptionsBlock">
            {subscribers.length == 0 ? (
                <h2>Вы пока ни на кого не подписаны</h2>
            ) : (
                <ListBlock
                    array={subscribers}
                    type="subscribers"
                    texts={["Написать сообщение", "Профиль", "Запрос в друзья"]}
                    functions={[goToChat, goToProfile, subscribeTo]}
                    image={subscribe}
                />
            )}
        </div>
    );
    function getSubscribers() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscriptions/" + id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setSubscribers(response.data);
            });
    }
    function goToChat(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .post(
                window.location.origin + "/api/chat",
                { user_id: subscribers[index].user_id },
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
        navigate("../profile/" + subscribers[index].user_id);
    }
    function subscribeTo(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscribe/" + subscribers[index].user_id, {
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
