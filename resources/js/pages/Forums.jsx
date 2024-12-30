import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import participants_icon from "../assets/img/forum-participants-icon.svg";
import { Link } from "react-router-dom";

export default function Forums() {
    const forums = [
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 2,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 3,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
        {
            id: 1,
            title: "Название форума",
            date: "19.09.24",
            participants: 4,
            about: "О чем форум",
        },
    ];
    return (
        <div className="Forums">
            {forums.map((forum, index) => (
                <div key={"forum-block-" + index}>
                    <h2>{forum.title}</h2>
                    <p>{forum.about}</p>
                    <div>
                        <img alt="Дата" src={date_icon} />
                        <p>{forum.date}</p>
                        <img alt="Участники" src={participants_icon} />
                        <p>{forum.participants}</p>
                    </div>
                    <Link to={"../forum/" + forum.id}><button>Вступить</button></Link>
                </div>
            ))}
        </div>
    );
}
