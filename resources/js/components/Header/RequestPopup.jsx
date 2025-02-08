import React from "react";
import add_friend from "../../assets/img/add-friend.svg";

export default function RequestPopup() {
    const [subscribers, setSubscribers] = React.useState([]);
    React.useEffect(() => {
        getSubscribers();
    }, []);
    return (
        <div className="requestList">
            <p>Новая заявка</p>
            {subscribers.length != 0 ? (
                subscribers.map((subscriber, index) => (
                    <div key={"subscriber-elem-in-header-" + index}>
                        <img
                            alt="Фото профиля"
                            src={
                                subscriber.src != null
                                    ? subscriber.src
                                    : "../img/Example2.svg"
                            }
                        />
                        <div>
                            <h2>{subscriber.name}</h2>
                            <p onClick={() => addInFriends(index)}>
                                <img alt="Добавить" src={add_friend} />
                                Добавить в друзья
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <p>Нет новых заявок</p>
                </div>
            )}
        </div>
    );
    function getSubscribers() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/subscriber", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setSubscribers(response.data);
            });
    }
    function addInFriends(index) {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .post(
                window.location.origin + "/api/friend",
                { user_id: subscribers[index].user_id },
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
