import React from "react";
import image1 from "../assets/img/funds-image-1.svg";
import image2 from "../assets/img/funds-image-2.svg";
import { useNavigate } from "react-router-dom";

export default function RightSideCharitableBlock() {
    const [funds, setFunds] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(() => {
        axios.get(window.location.origin + "/api/fund", {}).then((result) => {
            console.log(result.data);
            setFunds(result.data.slice(0, 4));
        });
    }, []);
    return (
        <div className="RightSideCharitableBlock">
            <h2>Благотворительный фонд</h2>
            <hr />
            <div className="list">
                {funds.map((value, index) => (
                    <div key={"funds-block-element-" + index} onClick={()=>{navigate('../help')}}>
                        <img alt="Фонд" src={index%2==0?image1:image2} />
                        <p>{value.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
