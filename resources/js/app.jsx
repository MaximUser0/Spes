import React from "react";
import { Routes, Route } from "react-router-dom";
//import { useDispatch } from "react-redux";

import Header from "./components/Header";

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

//import getUser from "./components/UserInfo";

export default function App() {
    /*const dispatch = useDispatch();
    React.useEffect(() => {
        getUser(dispatch);
    }, []);*/

    return (
        <div className="root">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<CertainNews />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/map" element={<Map />} />
                <Route path="/help" element={<Help />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/forums" element={<Forums />} />
                <Route path="/forum/:id" element={<Forum />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:name" element={<ProfileOfAnother />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
                <Route path="/admin-panel/news" element={<AdminNews />} />
                <Route
                    path="/admin-panel/news/edit"
                    element={<AdminNewsEdit />}
                />
                <Route
                    path="/admin-panel/news/add"
                    element={<AdminNewsAdd />}
                />
                <Route path="/admin-panel/help" element={<AdminHelp />} />
                <Route
                    path="/admin-panel/articles"
                    element={<AdminArticles />}
                />
                <Route
                    path="/admin-panel/articles/edit"
                    element={<AdminArticlesEdit />}
                />
                <Route
                    path="/admin-panel/articles/add"
                    element={<AdminArticlesAdd />}
                />
                <Route path="/admin-panel/users" element={<AdminUsers />} />
            </Routes>
        </div>
    );
}
