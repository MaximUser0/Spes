import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import reaction from "../assets/img/reaction-count-icon.svg";
import arrow from "../assets/img/arrow-follow.svg";
import { Link } from "react-router-dom";

export default function NewsBlock({array, type}) {
    return (
        <div className="NewsBlock">
            {array.map((value, index) => (
                <div
                    key={type + "-list-block-" + index}
                    className={"block" + index + (index > 5 && index % 2 != 0 ? " two-column" : "")}
                >
                    <h2>{value.title}</h2>
                    <p>{value.description}</p>
                    <div className="info">
                        <img alt="Дата" src={date_icon} />
                        <p>{value.updated_at.slice(0, 10)}</p>
                        <img alt="Комментарии" src={reaction} />
                        <p>{value.comment_counter}</p>
                    </div>
                    {index == 2 || index == 3 ?<img alt="Изображение новости" src={value.example_image} />: ""}
                    <Link to={"/" + type + "/"+value.id}>
                        <button>
                            <img alt="Перейти" src={arrow} />
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
