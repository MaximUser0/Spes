import React from "react";
import arrow from "../../assets/img/arrow-follow.svg";
import { Link } from "react-router-dom";

export default function GridBock({ array, type, func }) {
    return (
        <div className="GridBlock">
            {array.map((elem, index) => (
                <div key={"grid-block-" + type + "-" + index}>
                    <h2>{elem.title}</h2>
                    <p>
                        {type == "news" || type == "article"
                            ? elem.description
                            : type == "help"
                            ? elem.owner
                            : type == "forum"
                            ? elem.about
                            : elem.text}
                    </p>
                    <Link to={elem.href}>
                        <button
                            onClick={() => {
                                if (type == "help" || type == "forum") {
                                    func(index);
                                }
                            }}
                        >
                            {type == "help" || type == "forum" ? (
                                "Удалить"
                            ) : (
                                <img alt="Перейти" src={arrow} />
                            )}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
