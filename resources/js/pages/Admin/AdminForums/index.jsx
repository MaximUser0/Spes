import React from "react";
import GridBock from "../GridBock";
import { Link } from "react-router-dom";

export default function AdminForums() {
    const [forums, setForums] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/forum", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((result) => {
                setForums(
                    result.data.map(function (elem) {
                        elem["href"] = "#";
                        return elem;
                    })
                );
            });
    }, []);
    return (
        <div className="AdminForums">
            <GridBock array={forums} type="forum" func={deleteForum} />{" "}
            <Link to="./add">
                <button>Добавить форум</button>
            </Link>
        </div>
    );
    function deleteForum(index) {
        if (!window.confirm("Удалить форум?")) return;
        axios
            .delete(window.location.origin + "/api/forum/" + forums[index].id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                forums.splice(index, 1);
                setForums([...forums]);
            });
    }
}
