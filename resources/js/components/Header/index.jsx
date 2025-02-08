import React from "react";
import logo from "../../assets/img/logo.svg";
import arrow from "../../assets/img/arrow-menu.svg";
import bell from "../../assets/img/bell-icon.svg";
import mobile_menu from "../../assets/img/mobile-menu.svg";
import { useNavigate } from "react-router-dom";
import RequestPopup from "./RequestPopup";
import Popup from "./Popup";
import LeftSideNavBar from "../LeftSideNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import Find from "./Find";

export default function Header() {
    const [popup, setPopup] = React.useState(0);
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    React.useEffect(() => {
        getUser();
    }, []);

    return (
        <header>
            <img
                src={logo}
                alt="Spes"
                onClick={() => {
                    navigate("/");
                }}
            />
            <Find />
            {useSelector((state) => state.auth.token) != null ? (
                <div className="userInfo">
                    <img
                        alt="Уведомления"
                        className="bell"
                        src={bell}
                        onClick={() => {
                            setPopup(popup == 1 ? 0 : 1);
                        }}
                    />
                    <img
                        alt="Фото профиля"
                        className="userImage"
                        src={
                            user.src != null ? user.src : "../img/Example2.svg"
                        }
                    />
                    <p
                        onClick={() => {
                            setPopup(popup == 2 ? 0 : 2);
                        }}
                    >
                        {user.name}
                        <img
                            alt="Меню"
                            className={popup == 2 ? "reverse" : ""}
                            src={arrow}
                        />
                    </p>
                    {popup == 1 ? <RequestPopup /> : ""}
                    {popup == 2 ? <Popup setPopup={setPopup} /> : ""}
                </div>
            ) : (
                <button
                    onClick={() => {
                        navigate("../sing-up");
                    }}
                >
                    Регистрация
                </button>
            )}
            <img
                alt="Меню"
                className="mobile-menu"
                src={mobile_menu}
                onClick={() => {
                    setMobileMenu(!mobileMenu);
                }}
            />
            <div className={"mobile-nav-bar" + (mobileMenu ? " show" : "")}>
                <LeftSideNavBar isMobile={true} setMobileMenu={setMobileMenu} />
            </div>
        </header>
    );
    function getUser() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/user", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                dispatch(setUser(response.data));
            });
    }
}
