import React from "react";
import magnifier from "../assets/img/magnifier.svg";
import forumIcon from "../assets/img/forum-icon.svg";
import example from "../assets/img/example-image.jpg";
import { useNavigate } from "react-router-dom";
export default function RightSideForumBlock() {
    const [forums, setForums] = React.useState([{ title: "" }]);
    const [find, setFind] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        getForums();
    }, []);
    return (
        <div className="RightSideForumBlock">
            <div className="top">
                <h2>Форум</h2>
                <img
                    alt="Форум"
                    src={forumIcon}
                    onClick={() => {
                        navigate("../forums");
                    }}
                />
            </div>
            <div className="find">
                <img src={magnifier} alt="Найти" />
                <input
                    defaultValue={find}
                    type="text"
                    placeholder="Поиск"
                    name="find"
                    onChange={(e) => {
                        setFind(e.target.value);
                    }}
                />
            </div>
            <div className="list">
                {forums[0].title == "" || forums.length == 0 ? (
                    <p>Вы не состоите в форумах</p>
                ) : (
                    filterItems(forums).map((value, index) => (
                        <div
                            key={"forum-block-element-" + index}
                            onClick={() => {
                                navigate("../forums");
                            }}
                        >
                            <img alt="Изображение форума" src={example} />
                            <p>{value.title}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
    function getForums() {
        if (sessionStorage.getItem("token") == null) return;
        axios
            .get(window.location.origin + "/api/forum", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setForums(response.data);
            });
    }
    function filterItems(array) {
        let result = array;
        if (find != "") {
            result = array.filter((value) =>
                value.title.toLowerCase().includes(find.toLowerCase())
            );
        }
        if (result.length > 7) {
            result = result.slice(0, 7);
        }
        return result;
    }
}
