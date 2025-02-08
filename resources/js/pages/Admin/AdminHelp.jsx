import React from "react";
import GridBock from "./GridBock";

export default function AdminHelp() {
    const [funds, setFunds] = React.useState([]);
    React.useEffect(() => {
        axios
            .get(window.location.origin + "/api/fund", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then((result) => {
                setFunds(
                    result.data.map(function (elem) {
                        elem["href"] = "#";
                        return elem;
                    })
                );
            });
    }, []);
    return <GridBock array={funds} type="help" func={deleteFunds} />;
    function deleteFunds(index) {
        if (!window.confirm("Удалить фонд?")) return;
        axios
            .delete(window.location.origin + "/api/fund/" + funds[index].id, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
            .then(() => {
                funds.splice(index, 1);
                setFunds([...funds]);
            });
    }
}
