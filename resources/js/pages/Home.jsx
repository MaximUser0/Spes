import React from "react";
import LeftSideNavBar from "../components/LeftSideNavBar.jsx";
import RightSideForumBlock from "../components/RightSideForumBlock.jsx";
import RightSideCharitableBlock from "../components/RightSideCharitableBlock.jsx";
import NewsBlock from "../components/NewsBlock.jsx";
export default function Home() {
    return (
        <div>
            <div>
                <LeftSideNavBar />
            </div>
            <NewsBlock />
            <div>
                <RightSideForumBlock />
                <RightSideCharitableBlock />
            </div>
        </div>
    );
}
