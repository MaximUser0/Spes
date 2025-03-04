import React from "react";
import subscribe from "../../assets/img/subscribe.svg";
import ListBlock from "../Profile/ListBlock";
import { ProfileContext } from "../../context/ProfileContext";
import { useNavigate } from "react-router-dom";

export default function SubscribersBlock() {
    const { setSelectedMenu } = React.useContext(ProfileContext);
    const [subscribers, setSubscribers] = React.useState([]);
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
    React.useEffect(() => {
        getSubscribers();
    }, []);
    return (
        <div className="SubscribersBlock">
            {subscribers.length == 0 ? (
                <h2>На вас пока никто не подписан</h2>
            ) : (
                <ListBlock
                    array={subscribers}
                    type="subscribers"
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
    function getSubscribers() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscriber/" + id, {
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
