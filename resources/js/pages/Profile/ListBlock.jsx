import React from "react";
import chat_icon from "../../assets/img/chat-icon.svg";
import menu_icon from "../../assets/img/menu-icon.svg";
import profile_icon from "../../assets/img/profile-icon.svg";
import { Link } from "react-router-dom";

export default function ListBlock({ array, type, texts, image }) {
    const [selectedMenuPopup, setSelectedMenuPopup] = React.useState(-1);
    return (
        <>
            {array.map((elem, index) => (
                <div key={"profile-" + type + "-block-element-" + index}>
                    <img alt="Фотография" src={elem.src} className="image" />
                    <div>
                        <Link to={type != "forums" ? "./" + elem.id : ""}>
                            <h2>{elem.name}</h2>
                        </Link>
                        <p>
                            <img alt="Чат" src={chat_icon} />
                            {texts[2]}
                        </p>
                    </div>
                    <img
                        alt="Меню"
                        src={menu_icon}
                        className="menuImage"
                        onClick={() => {
                            setSelectedMenuPopup(
                                selectedMenuPopup == -1
                                    ? index
                                    : selectedMenuPopup != index
                                    ? index
                                    : -1
                            );
                        }}
                    />
                    {selectedMenuPopup == index ? (
                        <div className="menuPopup">
                            <div>
                                <img alt={texts[0]} src={profile_icon} />
                                <p>{texts[0]}</p>
                            </div>
                            <div>
                                <img alt={texts[1]} src={image} />
                                <p>{texts[1]}</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </>
    );
}
