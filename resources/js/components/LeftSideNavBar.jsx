import React from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/img/user-icon.svg";
import whats_app from "../assets/img/whats-app.png";
import telegram from "../assets/img/telegram.png";
import vkontakte from "../assets/img/vkontakte.png";
import { useSelector } from "react-redux";

export default function LeftSideNavBar({ isMobile, setMobileMenu }) {
    const page = window.location.pathname.split("/", 2)[1];
    const isUser = true;
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    function moveTo(href) {
        navigate(href);
        if (isMobile) {
            setMobileMenu(false);
        }
    }
    return (
        <>
            <div className="LeftSideNavBar">
                {isMobile && isUser ? (
                    <div
                        onClick={() => {
                            moveTo("/profile");
                        }}
                        className={page == "profile" ? "active" : ""}
                    >
                        <div>
                            <img alt="Профиль" src={user_icon} />
                        </div>
                        <p>Личный аккаунт</p>
                    </div>
                ) : (
                    ""
                )}
                <div
                    onClick={() => {
                        moveTo("/");
                    }}
                    className={page == "" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.3361 15.95H13.633C14.2422 15.95 14.8264 15.7077 15.2572 15.2763C15.6879 14.845 15.9299 14.26 15.9299 13.65C15.9299 13.04 15.6879 12.455 15.2572 12.0237C14.8264 11.5923 14.2422 11.35 13.633 11.35H10.1876C9.49856 11.35 8.92434 11.58 8.5798 12.04L2.14845 18.25M6.74227 22.85L8.5798 21.24C8.92434 20.78 9.49856 20.55 10.1876 20.55H14.7815C16.0448 20.55 17.1932 20.09 17.9971 19.17L23.28 14.11C23.7232 13.6906 23.9818 13.1121 23.9991 12.5018C24.0163 11.8915 23.7907 11.2993 23.3719 10.8555C22.9531 10.4117 22.3754 10.1527 21.7659 10.1355C21.1563 10.1182 20.5649 10.3441 20.1218 10.7635L15.2983 15.2485M1 17.1L7.89073 24M20.4089 9.05C20.4089 10.8919 18.9178 12.385 17.0784 12.385C15.239 12.385 13.7478 10.8919 13.7478 9.05C13.7478 7.20813 15.239 5.715 17.0784 5.715C18.9178 5.715 20.4089 7.20813 20.4089 9.05ZM9.03918 4.45C9.03918 6.35538 7.49664 7.9 5.59382 7.9C3.691 7.9 2.14845 6.35538 2.14845 4.45C2.14845 2.54462 3.691 1 5.59382 1C7.49664 1 9.03918 2.54462 9.03918 4.45Z"
                                stroke="#787878"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p>Последние новости</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../news");
                    }}
                    className={page == "news" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.375 19.375H14.375M9.375 21.875H18.125M8.125 26.25H21.25C22.2855 26.25 23.125 25.4105 23.125 24.375V5.625C23.125 4.58946 22.2855 3.75 21.25 3.75H8.125C7.08946 3.75 6.25 4.58946 6.25 5.625V24.375C6.25 25.4105 7.08946 26.25 8.125 26.25ZM9.375 3.75H15V12.1875C15 12.4878 14.6178 12.6152 14.4375 12.375L13.6875 11.375C12.9375 10.375 11.4375 10.375 10.6875 11.375L9.9375 12.375C9.75731 12.6152 9.375 12.4878 9.375 12.1875V3.75Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p>Новостник</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../feedback");
                    }}
                    className={page == "feedback" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.6333 19.3671C19.678 28.4118 22.3283 26.2474 23.512 25.4018C23.7033 25.2931 28.0843 22.4701 25.3597 19.7461C19.0403 13.4263 20.3226 21.6408 14.3398 15.6593C8.35844 9.67642 16.5737 10.9596 10.2543 4.64034C7.52942 1.91547 4.70614 6.29682 4.59876 6.48691C3.75203 7.67063 1.58851 10.3225 10.6333 19.3671Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p>Обратная связь</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../map");
                    }}
                    className={page == "map" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 9.80011C19 15.2925 12.7686 21.0125 10.6761 22.7792C10.4812 22.9225 10.2439 23 10 23C9.7561 23 9.51881 22.9225 9.32388 22.7792C7.23138 21.0125 1 15.2925 1 9.80011C1 7.46618 1.94821 5.22783 3.63604 3.57749C5.32387 1.92715 7.61305 1 10 1C12.3869 1 14.6761 1.92715 16.364 3.57749C18.0518 5.22783 19 7.46618 19 9.80011Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 13.1002C11.864 13.1002 13.375 11.6227 13.375 9.80011C13.375 7.97755 11.864 6.50007 10 6.50007C8.13604 6.50007 6.625 7.97755 6.625 9.80011C6.625 11.6227 8.13604 13.1002 10 13.1002Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p>Карта</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../help");
                    }}
                    className={page == "help" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="24"
                            height="19"
                            viewBox="0 0 24 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 15.5714L3.44444 18L8.33333 13.1429M1 3.42857L3.44444 5.85714L8.33333 1M13.2222 2.21429H23M13.2222 9.5H23M13.2222 16.7857H23"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p>Фонд помощи</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../articles");
                    }}
                    className={page == "articles" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2499 10.625H18.7499M11.2499 19.375H15M11.2499 15H18.7499M21.2499 5L8.75031 5.00003C7.36962 5.00003 6.25035 6.11929 6.25032 7.49997L6.25 22.5C6.24998 23.8806 7.36926 25 8.75 25H21.25C22.6306 25 23.75 23.8807 23.75 22.5C23.75 17.5 23.75 12.5 23.75 7.5C23.75 6.11929 22.6306 5 21.2499 5Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p>Статьи</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("../forums");
                    }}
                    className={page == "forums" ? "active" : ""}
                >
                    <div>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.1682 20.7519C12.3584 22.2215 13.8977 23.0199 15.6237 23.4595C16.5607 23.6985 18.985 23.29 19.6087 23.8383C20.9227 25.029 22.4304 25.7823 24.1049 26.1623C24.2572 26.1965 24.4134 26.2184 24.5676 26.2422C24.7631 26.273 24.9231 26.2149 25.0235 26.018C25.1231 25.8211 25.0869 25.6421 24.9625 25.4794C24.8177 25.2907 24.6705 25.1035 24.5125 24.9299C24.0534 24.4276 23.6899 23.8369 23.4386 23.1914C23.2585 22.7285 23.4597 22.2268 23.8536 21.9241C23.9369 21.8601 24.0191 21.7949 24.0999 21.7274C24.8534 21.1034 25.4792 20.3569 25.8627 19.4081C26.4854 17.87 26.3451 16.3854 25.5287 14.9738C24.8887 13.8669 24.0142 13.0734 22.9897 12.5M5.90012 14.2274C5.98085 14.2949 6.06311 14.3601 6.14637 14.4241C6.5403 14.7267 6.74146 15.2285 6.56132 15.6914C6.31017 16.3369 5.94659 16.9276 5.48755 17.4299C5.3295 17.6035 5.18222 17.7908 5.0375 17.9794C4.91307 18.1421 4.8769 18.3212 4.97656 18.518C5.07685 18.7149 5.23682 18.773 5.43232 18.7423C5.58659 18.7184 5.74274 18.6965 5.89509 18.6623C7.56969 18.2823 9.07724 17.529 10.3912 16.3382C11.0149 15.79 13.4392 16.1985 14.3762 15.9595C16.1022 15.5199 17.6416 14.7215 18.8317 13.2519C20.3006 11.4377 20.394 8.9906 19.0571 7.07653C18.1247 5.74289 16.8666 4.9069 15.4231 4.38601C12.9556 3.49533 10.487 3.54319 8.0469 4.51043C6.57479 5.0935 5.31797 6.00955 4.47119 7.47375C3.65485 8.88541 3.51459 10.37 4.1373 11.9081C4.52075 12.8569 5.14665 13.6034 5.90012 14.2274Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p>Форум</p>
                </div>
                {user.is_admin ? (
                    <div
                        onClick={() => {
                            moveTo("../admin-panel");
                        }}
                        className={page == "admin-panel" ? "active" : ""}
                    >
                        <div>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.1682 20.7519C12.3584 22.2215 13.8977 23.0199 15.6237 23.4595C16.5607 23.6985 18.985 23.29 19.6087 23.8383C20.9227 25.029 22.4304 25.7823 24.1049 26.1623C24.2572 26.1965 24.4134 26.2184 24.5676 26.2422C24.7631 26.273 24.9231 26.2149 25.0235 26.018C25.1231 25.8211 25.0869 25.6421 24.9625 25.4794C24.8177 25.2907 24.6705 25.1035 24.5125 24.9299C24.0534 24.4276 23.6899 23.8369 23.4386 23.1914C23.2585 22.7285 23.4597 22.2268 23.8536 21.9241C23.9369 21.8601 24.0191 21.7949 24.0999 21.7274C24.8534 21.1034 25.4792 20.3569 25.8627 19.4081C26.4854 17.87 26.3451 16.3854 25.5287 14.9738C24.8887 13.8669 24.0142 13.0734 22.9897 12.5M5.90012 14.2274C5.98085 14.2949 6.06311 14.3601 6.14637 14.4241C6.5403 14.7267 6.74146 15.2285 6.56132 15.6914C6.31017 16.3369 5.94659 16.9276 5.48755 17.4299C5.3295 17.6035 5.18222 17.7908 5.0375 17.9794C4.91307 18.1421 4.8769 18.3212 4.97656 18.518C5.07685 18.7149 5.23682 18.773 5.43232 18.7423C5.58659 18.7184 5.74274 18.6965 5.89509 18.6623C7.56969 18.2823 9.07724 17.529 10.3912 16.3382C11.0149 15.79 13.4392 16.1985 14.3762 15.9595C16.1022 15.5199 17.6416 14.7215 18.8317 13.2519C20.3006 11.4377 20.394 8.9906 19.0571 7.07653C18.1247 5.74289 16.8666 4.9069 15.4231 4.38601C12.9556 3.49533 10.487 3.54319 8.0469 4.51043C6.57479 5.0935 5.31797 6.00955 4.47119 7.47375C3.65485 8.88541 3.51459 10.37 4.1373 11.9081C4.52075 12.8569 5.14665 13.6034 5.90012 14.2274Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p>Админ-панель</p>
                    </div>
                ) : (
                    ""
                )}
                {isMobile && !isUser ? (
                    <div
                        onClick={() => {
                            moveTo("/sing-up");
                        }}
                        className={page == "sing-up" ? "active" : ""}
                    >
                        <div>
                            <img alt="Регистрация" src={user_icon} />
                        </div>
                        <p>Регистрация</p>
                    </div>
                ) : (
                    ""
                )}
                <hr />
                <div
                    onClick={() => {
                        moveTo("#");
                    }}
                    className="social-networks"
                >
                    <div>
                        <img alt="WhatsApp" src={whats_app} />
                    </div>
                    <p>WhatsApp</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("#");
                    }}
                    className="social-networks"
                >
                    <div>
                        <img alt="Telegram" src={telegram} />
                    </div>
                    <p>Telegram</p>
                </div>
                <div
                    onClick={() => {
                        moveTo("#");
                    }}
                    className="social-networks"
                >
                    <div>
                        <img alt="VKontakte" src={vkontakte} />
                    </div>
                    <p>VKontakte</p>
                </div>
            </div>
            <div className="privacy-policy">
                <p>Политика конфиденциальности</p>
                <p>(с) 2024 “Spes” </p>
            </div>
        </>
    );
}
