import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import LeftSideNavBar from "./components/LeftSideNavBar.jsx";
import RightSideForumBlock from "./components/RightSideForumBlock.jsx";
import RightSideCharitableBlock from "./components/RightSideCharitableBlock.jsx";
import LeftSideUserInfo from "./components/LeftSideUserInfo.jsx";

import Home from "./pages/Home";
import News from "./pages/News";
import CertainNews from "./pages/CertainNews";
import Feedback from "./pages/Feedback";
import Map from "./pages/Map";
import Help from "./pages/Help";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Forums from "./pages/Forums";
import Forum from "./pages/Forum";
import Profile from "./pages/Profile";
import ProfileOfAnother from "./pages/ProfileOfAnother";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminNews from "./pages/Admin/AdminNews";
import AdminNewsEdit from "./pages/Admin/AdminNews/Edit";
import AdminNewsAdd from "./pages/Admin/AdminNews/Add";
import AdminHelp from "./pages/Admin/AdminHelp";
import AdminArticles from "./pages/Admin/AdminArticles";
import AdminArticlesEdit from "./pages/Admin/AdminArticles/Edit";
import AdminArticlesAdd from "./pages/Admin/AdminArticles/Add";
import AdminUsers from "./pages/Admin/AdminUsers";
import FundsAndSharesBlock from "./components/FundsAndSharesBlock.jsx";
import CreateFundBlock from "./components/CreateFundBlock.jsx";
import ChatsBlock from "./components/ChatsBlock.jsx";
import CommunitiesBlock from "./components/CommunitiesBlock.jsx";
import FriendsBlock from "./components/FriendsBlock.jsx";
import ProfileMenuSideBlock from "./components/ProfileMenuSideBlock.jsx";
import EditProfile from "./pages/Profile/EditProfile.jsx";
import AdminForums from "./pages/Admin/AdminForums/index.jsx";
import AdminForumsAdd from "./pages/Admin/AdminForums/Add.jsx";

export default function App() {
    const [sidePanels, setSidePanels] = React.useState([0, 1, 3, 4]);
    const token = useSelector((state) => state.auth.token);
    const location = useLocation();

    React.useEffect(() => {
        switch (location.pathname.split("/", 2)[1]) {
            case "":
                setSidePanels([0, 1, 2, 4]);
                break;
            case "help":
                setSidePanels([0, 1, 5, 6]);
                break;
            case "map":
            case "forum":
            case "profile":
            case "admin-panel":
                setSidePanels([0, 1]);
                break;
            case "login":
                setSidePanels([1, 2, 4]);
                break;
            case "sing-up":
                setSidePanels([1, 3, 4]);
                break;
            default:
                setSidePanels([0, 1, 3, 4]);
                break;
        }
    }, [location.pathname]);
    return (
        <div className="root">
            <Header />
            <div>
                <div className="leftSide">
                    {sidePanels.indexOf(0) != -1 && token != null ? (
                        <LeftSideUserInfo />
                    ) : (
                        ""
                    )}
                    {sidePanels.indexOf(1) != -1 ? (
                        <LeftSideNavBar isMobile={false} />
                    ) : (
                        ""
                    )}
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<CertainNews />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route
                        path="/map"
                        element={<Map />}
                        onEnter={() => setSidePanels([1, 1, 0, 0, 1, 1])}
                    />
                    <Route
                        path="/help"
                        element={<Help setSidePanels={setSidePanels} />}
                    />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<Article />} />
                    <Route path="/forums" element={<Forums />} />
                    <Route path="/forum/:id" element={<Forum type="forum" />} />
                    <Route
                        path="/profile"
                        element={<Profile setPanels={setSidePanels} />}
                    />
                    <Route path="/profile/edit" element={<EditProfile />} />
                    <Route path="/profile/:id" element={<ProfileOfAnother />} />
                    <Route path="/sing-up" element={<SingUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-panel" element={<AdminPanel />} />
                    <Route path="/admin-panel/news" element={<AdminNews />} />
                    <Route
                        path="/admin-panel/news/edit/:id"
                        element={<AdminNewsEdit />}
                    />
                    <Route
                        path="/admin-panel/news/add"
                        element={<AdminNewsAdd />}
                    />
                    <Route path="/admin-panel/help" element={<AdminHelp />} />
                    <Route
                        path="/admin-panel/forum"
                        element={<AdminForums />}
                    />
                    <Route
                        path="/admin-panel/forum/add"
                        element={<AdminForumsAdd />}
                    />
                    <Route
                        path="/admin-panel/articles"
                        element={<AdminArticles />}
                    />
                    <Route
                        path="/admin-panel/articles/edit/:id"
                        element={<AdminArticlesEdit />}
                    />
                    <Route
                        path="/admin-panel/articles/add"
                        element={<AdminArticlesAdd />}
                    />
                    <Route path="/admin-panel/users" element={<AdminUsers />} />
                </Routes>
                <div className="rightSide">
                    {sidePanels.indexOf(2) != -1 ? <RightSideForumBlock /> : ""}
                    {sidePanels.indexOf(3) != -1 ? <ChatsBlock /> : ""}
                    {sidePanels.indexOf(4) != -1 ? (
                        <RightSideCharitableBlock />
                    ) : (
                        ""
                    )}
                    {sidePanels.indexOf(5) != -1 ? (
                        <CreateFundBlock isMobile={false} />
                    ) : (
                        ""
                    )}
                    {sidePanels.indexOf(6) != -1 ? <FundsAndSharesBlock /> : ""}
                    {sidePanels.indexOf(9) != -1 ? (
                        <ProfileMenuSideBlock />
                    ) : (
                        ""
                    )}
                    {sidePanels.indexOf(7) != -1 ? <CommunitiesBlock /> : ""}
                    {sidePanels.indexOf(8) != -1 ? <FriendsBlock /> : ""}
                </div>
            </div>
        </div>
    );
}
