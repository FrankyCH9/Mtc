


import styled from 'styled-components';

const TargetDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2%;
`;

const BtDiv = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 3% 0%;
    border-radius: 5px;
    cursor: pointer;
`;


import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp, FaTiktok, FaSquareFacebook } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const InfoPortada = () => {
    const xy = [
        
        { val: "Ofertas" , icon:<GiTakeMyMoney style={{fontSize:"25px"}} />  },
        { val: "Whatsapp",icon:<FaWhatsapp style={{fontSize:"25px"}} />  },
        { val: "Ubicacion" ,icon:<IoLocationSharp style={{fontSize:"25px"}} /> }
    ]
    return (
        <div className="absolute w-full p-[2%]   top-[83%]">
            <div className="">
                <TargetDiv>
                    {xy.map((x, index) => (
                        <BtDiv style={x.val === "Ubicacion" ? { background: "red" , color:"white" } : { background: "white" }} key={index}>
                            {x.icon}{x.val}
                        </BtDiv>
                    ))}

                </TargetDiv>
            </div>

        </div>
    );
}

export default InfoPortada;