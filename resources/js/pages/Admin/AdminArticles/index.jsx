import React from "react";
import GridBock from "../GridBock";
import { Link } from "react-router-dom";

export default function AdminArticles() {
    const [articles, setArticles] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/article", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((result) => {
                console.log(result.data);
                setArticles(
                    result.data.map(function (elem) {
                        elem["href"] = "./edit/" + elem.id;
                        return elem;
                    })
                );
            });
    }, []);
    return (
        <div className="AdminNews">
            <GridBock array={articles} type="article" />
            <Link to="./add">
                <button>Добавить статью</button>
            </Link>
        </div>
    );
}
