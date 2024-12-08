import React from "react";
import user_image from "../../assets/img/example-image.jpg";
import add_friend from "../../assets/img/add-friend.svg";

export default function RequestPopup() {
    return (
        <div className="requestList">
            <p>Новая заявка</p>
            <div>
                <img alt="Фото профиля" src={user_image} />
                <div>
                    <h2>Name Surname</h2>
                    <p>
                        <img alt="Добавить" src={add_friend} />
                        Добавить в друзья
                    </p>
                </div>
            </div>
        </div>
    );
}
