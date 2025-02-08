import React from "react";
import GridBock from "../GridBock";
import { Link } from "react-router-dom";

export default function AdminNews() {
    const [news, setNews] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/news", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((result) => {
                console.log(result.data);
                setNews(
                    result.data.map(function (elem) {
                        elem["href"] = "./edit/" + elem.id;
                        return elem;
                    })
                );
            });
    }, []);
    return (
        <div className="AdminNews">
            <GridBock array={news} type="news" />
            <Link to="./add">
                <button>Добавить новость</button>
            </Link>
        </div>
    );
}
