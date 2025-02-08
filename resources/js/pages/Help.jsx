import React from "react";
import date_icon from "../assets/img/date-icon.svg";
import arrow from "../assets/img/arrow-follow.svg";
import CreateFundBlock from "../components/CreateFundBlock";

export default function Help() {
    const [funds, setFunds] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/fund", {})
            .then((result) => {
                console.log(result.data);
                setFunds(result.data);
            });
    }, []);
    return (
        <div className="Help">
            {funds.map((fund, index) => (
                <div key={"fund-block-" + index}>
                    <h2>{fund.title}</h2>
                    <p>{fund.owner}</p>
                    <div>
                        <img alt="Дата" src={date_icon} />
                        <p>
                            {fund.date.slice(8, 10) +
                                "." +
                                fund.date.slice(5, 7) +
                                "." +
                                fund.date.slice(2, 4)}
                        </p>
                    </div>
                    <button>
                        <img alt="Перейти" src={arrow} />
                    </button>
                </div>
            ))}
            <CreateFundBlock isMobile={true} />
        </div>
    );
}
