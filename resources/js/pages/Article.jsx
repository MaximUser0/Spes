import React from "react";
import CertainNewsBlock from "../components/CertainNewsBlock";

export default function Article() {
    const id = window.location.pathname.split("/")[2];
    const [article, setArticle] = React.useState({
        title: "",
        text: "",
        image: "",
        date: "",
        comment_counter: 0,
        comments: [],
    });
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/article/" + id, {})
            .then((result) => {
                console.log(result.data);
                setArticle(result.data);
            });
    }, []);
    return (
        <CertainNewsBlock
            array={article}
            type={"articles"}
            addNewComment={addNewComment}
        />
    );
    function addNewComment(comment) {
        article.comments.push(comment);
        setArticle({...article})
    }
}
