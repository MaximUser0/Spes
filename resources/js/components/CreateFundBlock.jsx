import React from "react";
import example from "../assets/img/example-image.jpg";
import axios from "axios";

export default function CreateFundBlock({ isMobile }) {
    const [hasFund, setHasFund] = React.useState(false);
    const [fund, setFund] = React.useState([]);
    const [type, setType] = React.useState("");
    React.useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            axios
                .get(window.location.origin + "/api/fundMy", {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((result) => {
                    console.log(result);
                    setFund(result.data);
                    setHasFund(true);
                })
                .catch(() => {
                    setHasFund(false);
                });
        }
    }, []);
    return (
        <div
            className={
                "CreateFundBlock " +
                (hasFund ? "HasFund" : "") +
                (isMobile ? " mobile-only" : "")
            }
        >
            <h2>Мой фонд</h2>
            <select
                defaultValue={type}
                required
                id="create-fund-type"
                onChange={(e) => {
                    setType(e.target.value);
                }}
            >
                <option value="" disabled hidden>
                    Категория
                </option>
                <option value="Приобретение жилья">Приобретение жилья</option>
                <option value="На лечение">На лечение</option>
                <option value="Погашение долгов">Погашение долгов</option>
            </select>
            <p
                onClick={() =>
                    document.getElementById("add-image-for-new-fund").click()
                }
                className="fileInput"
            >
                Добавить изображение
            </p>
            <input id="add-image-for-new-fund" type="file" accept="image/*" />
            <img
                alt="Фотография моего фонда"
                src={fund.image != null ? fund.image : example}
            />
            {hasFund ? (
                <>
                    <p>{fund.name}</p>
                    <p>{fund.title}</p>
                </>
            ) : (
                ""
            )}
            <button
                onClick={() => {
                    if (!hasFund) {
                        addFund();
                    } else {
                        deleteFund();
                    }
                }}
            >
                {hasFund ? "Удалить" : "Сохранить"}
            </button>
        </div>
    );
    function addFund() {
        if (sessionStorage.getItem("token") == null) return;
        const data = new FormData();
        data.append("title", type);
        data.append(
            "image",
            document.getElementById("add-image-for-new-fund").files[0]
        );
        axios
            .post(window.location.origin + "/api/fund", data, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setType("");
                setFund(response.data);
                setHasFund(true);
            });
    }
    function deleteFund() {
        if (sessionStorage.getItem("token") == null) return;
        if (!window.confirm("Вы уверены? Это действие нельзя отменить!"))
            return;
        axios
            .delete(window.location.origin + "/api/fundMy", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                setHasFund(false);
            });
    }
}
