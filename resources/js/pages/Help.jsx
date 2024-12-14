import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import arrow from "../assets/img/arrow-follow.svg";

export default function Help() {
    const funds = [
        { id: 1, title: "На лечение", date: "19.09.24", owner: "Казанцева Наталья" },
        { id: 1, title: "Приобретение жилья", date: "19.09.24", owner: "Смирнов Алексей" },
        { id: 1, title: "Погашение долгов", date: "19.09.24", owner: "Морозов Александр" },
        { id: 1, title: "Приобретение жилья", date: "19.09.24", owner: "Ильина Анна 32 года" },
        { id: 1, title: "На лечение", date: "19.09.24", owner: "Радионов Михаил" },
        { id: 1, title: "Погашение долгов", date: "19.09.24", owner: "Куприянова Анастасия" },
        { id: 1, title: "Погашение долгов", date: "19.09.24", owner: "Калугин Денис" },
        { id: 1, title: "Приобретение жилья", date: "19.09.24", owner: "Романов Олег" },
        { id: 1, title: "На лечение", date: "19.09.24", owner: "Алексеев Андрей" },
        { id: 1, title: "Приобретение жилья", date: "19.09.24", owner: "Соколова Ангелина" },
        { id: 1, title: "На лечение", date: "19.09.24", owner: "Дронова Евгения" },
        { id: 1, title: "Погашение долгов", date: "19.09.24", owner: "Морозов Владимир" },
    ];
    return (
        <div className="Help">
            {funds.map((fund, index) => (
                <div key={"fund-block-" + index}>
                    <h2>{fund.title}</h2>
                    <p>{fund.owner}</p>
                    <div>
                        <img alt="Дата" src={date_icon} />
                        <p>{fund.date}</p>
                    </div>
                    <button>
                        <img alt="Перейти" src={arrow} />
                    </button>
                </div>
            ))}
        </div>
    );
}
