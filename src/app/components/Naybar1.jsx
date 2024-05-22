"use client";

import React, { useState, useEffect } from "react";

const Naybar1 = () => {
    // Establece la fecha de expiración al próximo viernes
    const getNextFriday = () => {
        const today = new Date();
        const nextFriday = new Date(
            today.setDate(today.getDate() + ((12 - today.getDay()) % 7))
        );
        nextFriday.setHours(23, 59, 59, 999); // Fija la hora a las 23:59:59
        return nextFriday;
    };

    const expirationDate = getNextFriday();

    const calculateTimeLeft = () => {
        const difference = expirationDate.getTime() - new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const intervalID = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    if (!timeLeft) {
        return null; // O mostrar un indicador de carga
    }

    return (
        <div className="bg-orange-500 text-white text-center py-2 fixed w-full z-10">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ marginRight: '10px' }}>Examen medio en oferta:</h2>
                {timeLeft.days > 0 && <p style={{ margin: '0 5px' }}>{timeLeft.days} días</p>}
                <p style={{ margin: '0 5px' }}>{timeLeft.hours}h</p>
                <p style={{ margin: '0 5px' }}>{timeLeft.minutes}m</p>
                <p style={{ margin: '0 5px' }}>{timeLeft.seconds}s</p>
            </div>
        </div>
    );
};

export default Naybar1;
