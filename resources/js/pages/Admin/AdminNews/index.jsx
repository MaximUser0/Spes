import React from "react";
import GridBock from "../GridBock";
import { Link } from "react-router-dom";

export default function AdminNews() {
    const pages = [
        {
            title: "Денежная компенсация",
            text: "Денежную компенсацию за ТСР инвалидам отменяют с 1 января 2025 года. Такое положение содержится в статье 16 закона об особенностях исполнения бюджетов бюджетной системы в 2025 году.",
            href: "./edit/1",
        },
        {
            title: "Долговременный уход",
            text: '29 сентября 2020 года Минтруд выпустил Приказ N 667 "О реализации в отдельных субъектах Российской Федерации в 2021 году Типовой модели системы долговременного ухода за гражданами пожилого возраста и инвалидами.',
            href: "./edit/2",
        },
        {
            title: "Уход за инвалидами",
            text: "С 1 января 2025 года произойдут изменения в системе выплат по уходу за пожилыми людьми и инвалидами. В настоящее время выплаты в размере 1200 рублей получают люди.",
            href: "./edit/3",
        },
        {
            title: "Большая пенсия",
            text: "Способ первый - купить статус “инвалид”. В среднем человек с ОВЗ в нашей стране получает ежемесячно около 13 000 рублей. По достижении пенсионного возраста ему положена ещё ",
            href: "./edit/4",
        },
        {
            title: "Пенсия госслужащих",
            text: "Выгодно быть государственным служащим на пенсии – многие и держатся за госслужбу именно для этого, ждут, когда отработают нужное количество лет. Потому что тут важна выслуга.",
            href: "./edit/5",
        },
        {
            title: "Служба в армии",
            text: "По нормам пенсионного законодательства, действовавшего до 1 января 2015 года, в страховой стаж засчитывались иные, так называемые «нестраховые» периоды, за которые не перечислялись страховые взносы.",
            href: "./edit/6",
        },
    ];
    return (
        <div className="AdminNews">
            <GridBock array={pages} type="news" />
            <Link to="./add"><button>Добавить новость</button></Link>
        </div>
    );
}
