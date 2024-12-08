import React from "react";
import image1 from "../assets/img/funds-image-1.svg";
import image2 from "../assets/img/funds-image-2.svg";

export default function RightSideCharitableBlock() {
    const funds = [
        {src: image1, name:"Название фонда"},
        {src: image2, name:"Название фонда"},
        {src: image1, name:"Название фонда"},
        {src: image2, name:"Название фонда"},
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
