import React, { useState } from 'react';
import styled from 'styled-components';

const TargetDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2%;
`;

const BtDiv = styled.div`
    background-color: ${({ isUbicacion }) => isUbicacion ? 'red' : 'white'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ isUbicacion }) => isUbicacion ? 'white' : 'black'};
    padding: 3% 0%;
    border-radius: 5px;
    cursor: pointer;
`;

const Popup = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp, FaTiktok, FaSquareFacebook } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";


const InfoPortada = () => {
    const [showPopup, setShowPopup] = useState(false);

    const xy = [
        { val: "Ofertas", icon: <GiTakeMyMoney style={{ fontSize: "25px" }} /> },
        { val: "Whatsapp", icon: <FaWhatsapp style={{ fontSize: "25px" }} />, link: "https://wa.me/51913334439" },
        { 
            val: "Ubicacion", 
            icon: <IoLocationSharp style={{ fontSize: "25px" }} />, 
            link: "https://www.google.com/maps?q=-16.4214873,-71.5084898&z=17&hl=es" 
          }
          
    ];
    
    const handleClick = (val) => {
        if (val === "Ofertas") {
            setShowPopup(true);
        } else {
            const item = xy.find((x) => x.val === val);
            if (item && item.link) {
                window.open(item.link, '_blank');
            }
        }
    };
    return (
        <div className="absolute w-full p-[2%] top-[83%]">
            <div className="">
                <TargetDiv>
                    {xy.map((x, index) => (
                        <BtDiv
                            key={index}
                            isUbicacion={x.val === "Ubicacion"}
                            onClick={() => handleClick(x.val)}
                        >
                            {x.icon}{x.val}
                        </BtDiv>
                    ))}
                </TargetDiv>
                {showPopup && (
                    <Popup onClick={() => setShowPopup(false)}>
                        Mas informacion comunicate con nosotros a nuestro Whatsapp 
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default InfoPortada;

