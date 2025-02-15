import React from "react";
import cross from "../../assets/img/cross.svg";

export default function FundInfo({ info, setOpen }) {
    return (
        <div className="FundInfo">
            <img
                alt="Фотография моего фонда"
                src={info.image != null ? info.image : "./img/Example2.svg"}
            />
            <p>{info.owner}</p>
            <p>{info.title}</p>
            <input type="text" placeholder="ФИО" />
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Сумма" />
            <button
                onClick={() => {
                    setOpen(-1);
                }}
            >
                Отправить пожертвование
            </button>
            <img
                alt="Отменить"
                src={cross}
                className="close"
                onClick={() => {
                    setOpen(-1);
                }}
            />
        </div>
    );
}
