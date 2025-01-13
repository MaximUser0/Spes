import React from "react";
import NewsBlock from "../components/NewsBlock.jsx";

export default function Home() {
    const [news, setNews] = React.useState([]);
    React.useEffect(() => {
        axios.get(window.location.origin + "/api/news", {}).then((result) => {
            console.log(result.data);
            setNews(result.data);
        });
    }, []);
    return <NewsBlock array={news} type={"news"} />;
}
