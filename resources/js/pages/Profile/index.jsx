import React from "react";
import { ProfileContext } from "../../context/ProfileContext";
import example from "../../assets/img/example-image.jpg";
import arrow_down from "../../assets/img/arrow-down.svg";
import UserInfo from "./UserInfo";
import ForumBlock from "./ForumBlock";
import ChatsBlock from "./ChatsBlock";
import FriendsBlock from "./FriendsBlock";
import SubscribersBlock from "./SubscribersBlock";
import SubscriptionsBlock from "./SubscriptionsBlock";
import { useNavigate } from "react-router-dom";

export default function Profile({ setPanels }) {
    const user = { name: "Name Surname", user_name: "@dokspo", src: example };
    const { selectedMenu, setSelectedMenu } = React.useContext(ProfileContext);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const navigate = useNavigate();
    const menuList = [
        "Профиль",
        "Форум",
        "Чаты",
        "Друзья",
        "Подписчики",
        "Мои подписки",
    ];
    const blocks = [
        <UserInfo isReadOnly={true} edit={{edit: false}}/>,
        <ForumBlock />,
        <ChatsBlock />,
        <FriendsBlock />,
        <SubscribersBlock />,
        <SubscriptionsBlock />,
    ];
    React.useEffect(() => {
        switch (selectedMenu) {
            case 1:
                setPanels([0, 1, 7]);
                break;
            case 3:
            case 4:
            case 5:
                setPanels([0, 1, 8, 9]);
                break;
            default:
                setPanels([0, 1]);
                break;
        }
    }, [selectedMenu]);
    return (
        <div
            className={
                "Profile" +
                (selectedMenu == 2 ? " ProfileChatVersion" : "") +
                (selectedMenu == 1 ||
                selectedMenu == 3 ||
                selectedMenu == 4 ||
                selectedMenu == 5
                    ? " slim"
                    : "")
            }
        >
            <div className="grayBlock"></div>
            <div className="content">
                <div className="info">
                    <img alt="Фотография пользователя" src={user.src} />
                    <div>
                        <h2>{user.name}</h2>
                        <p>{user.user_name}</p>
                    </div>
                    <button
                        onClick={() => {
                            navigate("../profile/edit");
                        }}
                    >
                        Редактировать профиль
                    </button>
                    <button
                        onClick={() => {
                            setShowMobileMenu(!showMobileMenu);
                        }}
                        className="mobile-menu-button"
                    >
                        <img alt="Меню" src={arrow_down} />
                    </button>
                    {showMobileMenu ? (
                        <div className="mobile-menu">
                            <p
                                onClick={() => {
                                    setShowMobileMenu(false);
                                    navigate("../profile/edit");
                                }}
                            >
                                Редактировать профиль
                            </p>
                            {menuList.map((value, index) => (
                                <p
                                    key={"profile-menu-element-" + index}
                                    className={
                                        selectedMenu == index ? "active" : ""
                                    }
                                    onClick={() => {
                                        setShowMobileMenu(false);
                                        setSelectedMenu(index);
                                    }}
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="menu">
                    {menuList.map((value, index) => (
                        <p
                            key={"profile-menu-element-" + index}
                            className={selectedMenu == index ? "active" : ""}
                            onClick={() => {
                                setSelectedMenu(index);
                            }}
                        >
                            {value}
                        </p>
                    ))}
                </div>
                {blocks[selectedMenu]}
            </div>
        </div>
    );
}
