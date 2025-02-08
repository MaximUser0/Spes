import React from "react";
import EditTemplate from "../EditTemplate";

export default function Edit() {
    const [articles, setArticles] = React.useState({ comments: [] });
    const id = window.location.pathname.split("/")[4];
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/article/" + id, {})
            .then((result) => {
                setArticles(result.data);
            });
    }, []);
    return (
        <EditTemplate
            array={articles}
            type="article"
            title="Статьи"
            setArray={setArticles}
        />
    );
}
