import React from "react";
import GridBock from "./GridBock";

export default function AdminPanel() {
    const pages = [
        { title: "Новости", text: "Удаление, добавление, редактирование", href: "./news" },
        { title: "Фонд помощи", text: "Удаление, добавление, редактирование", href: "./help" },
        { title: "Пользователи", text: "Удаление аккаунтов, блокировка пользователей", href: "./users" },
        { title: "Статьи", text: "Удаление, добавление, редактирование", href: "./articles" },
        { title: "Форумы", text: "Удаление, добавление, редактирование", href: "./forum" },
    ];
    return <GridBock array={pages} type="home" />;
}
