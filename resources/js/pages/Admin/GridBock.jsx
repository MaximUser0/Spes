import React from "react";
import arrow from "../../assets/img/arrow-follow.svg";
import { Link } from "react-router-dom";

export default function GridBock({ array, type }) {
    return (
        <div className="GridBlock">
            {array.map((elem, index) => (
                <div key={"grid-block-" + type + "-" + index}>
                    <h2>{elem.title}</h2>
                    <p>{elem.text}</p>
                    <Link to={elem.href}>
                        <button>
                            {type == "help" ? (
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
