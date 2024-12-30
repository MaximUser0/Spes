import React from "react";
import example from "../assets/img/example-image.jpg";

export default function CreateFundBlock() {
    const [hasFund, setHasFund] = React.useState(false);
    return (
        <div className={"CreateFundBlock " + (hasFund ? "HasFund" : "")}>
            <h2>Мой фонд</h2>
            <input type="text" placeholder="Имя Фамилия" />
            <select defaultValue="" required>
                <option value="" disabled hidden>
                    Категория
                </option>
                <option value="1">Приобретение жилья</option>
                <option value="2">На лечение</option>
                <option value="3">Погашение долгов</option>
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
            <img alt="Фотография моего фонда" src={example} />
            {hasFund ? <><p>Соколова Ангелина </p><p>Приобретение жилья</p></> : ""}
            <button
                onClick={() => {
                    setHasFund(!hasFund);
                }}
            >
                {hasFund ? "Удалить" : "Сохранить"}
            </button>
        </div>
    );
}
