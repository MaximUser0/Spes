import React from "react";
import example from "../assets/img/example-image.jpg";
import { Link } from "react-router-dom";

export default function LeftSideUserInfo() {
    return (
        <div className="LeftSideUserInfo">
            <div>
                <Link to="../profile">
                    <div className="common">
                        <img alt="Фото пользователя" src={example} />
                        <div>
                            <p>Name Surname</p>
                            <p>@dokspo</p>
                        </div>
                    </div>
                </Link>
                <div className="statistics">
                    <div>
                        <h2>27</h2>
                        <p>Друзей</p>
                    </div>
                    <div>
                        <h2>12</h2>
                        <p>Подписчиков</p>
                    </div>
                    <div>
                        <h2>8</h2>
                        <p>Чатов</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
