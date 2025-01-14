import React from "react";

export default function Map() {
    return (
        <div className="MapBlock">
            <a
                href="https://yandex.ru/maps/37/astrahan/?utm_medium=mapframe&utm_source=maps"
                className="city"
            >
                Астрахань
            </a>
            <a
                href="https://yandex.ru/maps/37/astrahan/house/smolyanoy_pereulok_2/YEEYdgJpQUMPQFpsfX92dX9jZQ==/?ll=48.062603%2C46.376320&utm_medium=mapframe&utm_source=maps&z=16.67"
                className="address"
            >
                Смоляной переулок, 2 — Яндекс Карты
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=48.062603%2C46.376320&mode=whatshere&whatshere%5Bpoint%5D=48.058987%2C46.374731&whatshere%5Bzoom%5D=17&z=16.67"
                width="560"
                height="400"
                frameborder="1"
                allowfullscreen="true"
            ></iframe>
        </div>
    );
}
