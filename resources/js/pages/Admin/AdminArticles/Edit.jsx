import React from "react";
import EditTemplate from "../EditTemplate";
import example from "../../../assets/img/example-image.jpg";

export default function Edit() {
    const array = {
        title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        text: "В современном мире идет активное развитие технологий и роботизации производств, однако уровень травматизма сохраняется. Каждый десятый человек имеет нарушение структур организма, снижающие его функциональность, что в свою очередь отражается на уровне физической и социальной активности человека, снижает качество жизни и становится препятствием при реализации профессиональной деятельности. Но инвалидность - это не приговор. Жизнь одинаково прекрасна для всех живущих на Земле. Многие из нас этого не замечают и не умеют ценить, при любом пустяковом препятствии впадают в депрессию.Сегодня мы беседуем с очень красивой девушкой по имени Лариса. Сейчас она живет в столице, переехав недавно с Ростовской областиВ 1996 году девушка получила серьезную травму ноги в дорожно-транспортном происшествии. К сожалению, травма у нее была очень сложная/, и ради спасения жизни, врачи пошли на радикальные меры, провели ампутацию ноги.Казалось бы, в 16 лет оказаться на костылях, сложно не попасть в депрессию или нежелательную зависимость от алкоголя.Однако Лариса не замкнулась, закончила успешно школу, потом институт, вышла замуж, стала востребованной моделью. Сейчас Лариса активно ведет странички в социальных сетях, где помогает разными советами и информацией многим людям, попавшим в аналогичную ситуацию.",
        image: example,
        date: "15.09.24",
        comment_counter: 8,
        comments: [
            {
                user_id: 1,
                name: "Name Surname",
                date: "19.09.24",
                image: example,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
            },
            {
                user_id: 2,
                name: "Name Surname",
                date: "19.09.24",
                image: example,
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
            },
        ],
    };
    return <EditTemplate array={array} type="articles" title="Статьи" />;
}
