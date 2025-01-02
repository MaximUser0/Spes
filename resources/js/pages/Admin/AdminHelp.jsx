import React from "react";
import GridBock from "./GridBock";

export default function AdminHelp() {
    const funds = [
        {
            title: "На лечение",
            text: "Казанцева Наталья",
            href: "./1",
        },
        {
            title: "Приобретение жилья",
            text: "Смирнов Алексей ",
            href: "./2",
        },
        {
            title: "Погашение долгов",
            text: "Казанцева Наталья",
            href: "./3",
        },
        {
            title: "Приобретение жилья",
            text: "Смирнов Алексей ",
            href: "./4",
        },
        {
            title: "На лечение",
            text: "Казанцева Наталья",
            href: "./5",
        },
        {
            title: "Погашение долгов",
            text: "Смирнов Алексей ",
            href: "./6",
        },
    ];
    return <GridBock array={funds} type="help" />;
}
