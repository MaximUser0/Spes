import React from "react";
import NewsBlock from "../components/NewsBlock";

export default function Articles() {
    const [articles, setArticles] = React.useState([]);
    React.useEffect(() => {
        axios.get(window.location.origin + "/api/article", {}).then((result) => {
            console.log(result.data);
            setArticles(result.data);
        });
    }, []);
    return <NewsBlock array={articles} type={"articles"} />;
}
