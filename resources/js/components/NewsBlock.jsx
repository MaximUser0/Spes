import React from "react";
import example from "../assets/img/example-image.jpg";
import icon from "../assets/img/forum-icon.svg";

export default function NewsBlock() {
    /**/const news = [
        { src: example, name: "Денежная компенсация", date: '19.09.24', reaction_count: 4, text: 'Денежную компенсацию за ТСР инвалидам отменяют с 1 января 2025 года. Такое положение содержится в статье 16 закона об особенностях исполнения бюджетов бюджетной системы в 2025 году.' },
        { src: example, name: "Долговременный уход", date: '15.09.24', reaction_count: 8, text: '29 сентября 2020 года Минтруд выпустил Приказ N 667 "О реализации в отдельных субъектах Российской Федерации в 2021 году Типовой модели системы долговременного ухода за гражданами пожилого возраста и инвалидами.' },
        { src: example, name: "Уход за инвалидами", date: '19.09.24', reaction_count: 4, text: 'С 1 января 2025 года произойдут изменения в системе выплат по уходу за пожилыми людьми и инвалидами. В настоящее время выплаты в размере 1200 рублей получают люди, которые ухаживают за инвалидами I группы или пенсионерами старше 80 лет.' },
        { src: example, name: "Большая пенсия", date: '15.09.24', reaction_count: 8, text: 'Описание' },
        { src: example, name: "Пенсия госслужащих", date: '19.09.24', reaction_count: 4, text: 'Выгодно быть государственным служащим на пенсии – многие и держатся за госслужбу именно для этого, ждут, когда отработают нужное количество лет. Потому что тут важна выслуга.' },
        { src: example, name: "Служба в армии", date: '15.09.24', reaction_count: 8, text: 'По нормам пенсионного законодательства, действовавшего до 1 января 2015 года, в страховой стаж засчитывались иные, так называемые «нестраховые» периоды, за которые не перечислялись страховые взносы.' },
    ];
    return (
        <div className="NewsBlock">
            {news.map((value, index) => (
                <div
                    key={"news-list-block-" + index}
                    className={"block" + index}
                >
                    <h2>{value.name}</h2>
                    <p>{value.text}</p>
                    <div className="info">
                        <img alt="Дата" src={icon} />
                        <p>{value.date}</p>
                        <img alt="Коментарии" src={icon} />
                        <p>{value.reaction_count}</p>
                    </div>
                    {index == 2 || index == 3 ?<img alt="Изображение новости" src={value.src} />: ""}
                    <button>
                        <img alt="Перейти" src={icon} />
                    </button>
                </div>
            ))}
        </div>
    );
}
