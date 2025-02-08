import React from "react";
import EditTemplate from "../EditTemplate";

export default function Edit() {
    const [news, setNews] = React.useState({ comments: [] });
    const id = window.location.pathname.split("/")[4];
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/news/" + id, {})
            .then((result) => {
                console.log(result.data);
                setNews(result.data);
            });
    }, []);
    return (
        <EditTemplate
            array={news}
            type="news"
            title="Новости"
            setArray={setNews}
        />
    );
}
