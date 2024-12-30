import React from "react";
import NewsBlock from "../components/NewsBlock";
import image from "../assets/img/image-for-articles-1.png";
import image2 from "../assets/img/image-for-articles-2.png";

export default function Articles() {
    const articles = [
            { id: 1, src: null, name: "Не опускайте руки", date: '19.09.24', comment_counter: 4, text: 'В современном мире идет активное развитие технологий и роботизации производств, однако уровень травматизма сохраняется. ' },
            { id: 1, src: null, name: "Всё есть и всё будет", date: '15.09.24', comment_counter: 8, text: 'Все живые организмы, возникая, приспосабливаясь и существуя в конкретных условиях, проживают свой жизненный цикл в пределах определенной им природой биологической нормы.' },
            { id: 1, src: image, name: "Отношение к инвалидам", date: '19.09.24', comment_counter: 4, text: 'Это самая болезненная тема, порой больнее, чем сама болезнь, потому что эта тема заставляет страдать человека, ограниченного во многом.' },
            { id: 1, src: image2, name: "О чем ты мечтаешь?", date: '15.09.24', comment_counter: 8, text: 'Описание' },
            { id: 1, src: null, name: "Старайся", date: '19.09.24', comment_counter: 4, text: 'В современном мире идет активное развитие технологий и роботизации производств, однако уровень травматизма сохраняется.' },
            { id: 1, src: null, name: "Наперекор всему!", date: '15.09.24', comment_counter: 8, text: 'В современном мире идет активное развитие технологий и роботизации производств, однако уровень травматизма сохраняется. Каждый десятый человек имеет нарушение структур организма, снижающие его функциональность.' },
        ];
    return <NewsBlock array={articles} type={"articles"}/>;
}
