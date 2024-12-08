import React from "react";
import image from "../assets/img/forum-icon.svg";

export default function RightSideCharitableBlock() {
    const funds = [
        {src: image, name:"Название фонда"},
        {src: image, name:"Название фонда"},
        {src: image, name:"Название фонда"},
        {src: image, name:"Название фонда"},
    ];
    return (
        <div className="RightSideCharitableBlock">
            <h2>Благотворительный фонд</h2>
            <hr />
            <div className="list">
                {funds.map((value, index) => (
                    <div key={"funds-block-element-" + index}>
                        <img alt="Фонд" src={value.src}/>
                        <p>{value.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
