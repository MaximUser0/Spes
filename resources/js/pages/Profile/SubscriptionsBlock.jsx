import React from "react";
import unsubscribe from "../../assets/img/unsubscribe.svg";
import ListBlock from "./ListBlock";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/ProfileContext";

export default function SubscriptionsBlock() {
    const { setSelectedMenu } = React.useContext(ProfileContext);
    const [subscribers, setSubscribers] = React.useState([]);
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
                    texts={["Написать сообщение", "Профиль", "Отписаться"]}
                    functions={[goToChat, goToProfile, unSubscribe]}
                    image={unsubscribe}
                />
            )}
        </div>
    );
    function getSubscribers() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscriptions", {
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
    function unSubscribe(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .delete(
                window.location.origin +
                    "/api/subscriber/" +
                    subscribers[index].user_id,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then(() => {
                subscribers.splice(index, 1);
                setSubscribers([...subscribers]);
            });
    }
}
