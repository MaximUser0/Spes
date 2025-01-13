import React from "react";
import CertainNewsBlock from "../components/CertainNewsBlock";

export default function CertainNews() {
    const id = window.location.pathname.split("/")[2];
    const [news, setNews] = React.useState({
        title: "",
        text: "",
        image: "",
        date: "",
        comment_counter: 0,
        comments: [],
    });
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/news/" + id, {})
            .then((result) => {
                console.log(result.data);
                setNews(result.data);
            });
    }, []);
    return (
        <CertainNewsBlock
            array={news}
            type={"news"}
            addNewComment={addNewComment}
        />
    );

    function addNewComment(comment) {
        news.comments.push(comment);
        setNews({ ...news });
    }
}
