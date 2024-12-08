import React from "react";
import profile_icon from "../../assets/img/profile-icon.svg";
import logout_icon from "../../assets/img/logout-icon.svg";

export default function Popup() {
    return (
        <div className="menuPopup">
            <div>
                <img alt="Профиль" src={profile_icon} />
                <p>Профиль</p>
            </div>
            <div>
                <img alt="Выйти" src={logout_icon} />
                <p>Выйти</p>
            </div>
        </div>
    );
}
