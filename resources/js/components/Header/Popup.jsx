import React from "react";
import profile_icon from "../../assets/img/profile-icon.svg";
import logout_icon from "../../assets/img/logout-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/slices/authSlice";

export default function Popup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logOut() {
        axios
            .get(window.location.origin + "/api/logout", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                dispatch(setToken(null));
                dispatch(setUser(null));
                navigate("../");
            })
            .catch(() => {
                alert("Выйти не удалось!");
            });
    }
    return (
        <div className="menuPopup">
            <div
                onClick={() => {
                    navigate("../profile");
                }}
            >
                <img alt="Профиль" src={profile_icon} />
                <p>Профиль</p>
            </div>
            <div
                onClick={() => {
                    logOut();
                }}
            >
                <img alt="Выйти" src={logout_icon} />
                <p>Выйти</p>
            </div>
        </div>
    );
}
