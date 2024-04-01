import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import Image from 'next/image'
import ReactDOMServer from 'react-dom/server'; 



import { IoLocationSharp } from "react-icons/io5";


const iconComponent = <IoLocationSharp style={{ fontSize: "25px"  , color:"red"}} />;


function iconToImage(icon) {
    const svgString = ReactDOMServer.renderToString(icon);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    return url;
}

const customIconUrl = iconToImage(iconComponent);

const customIcon = new L.icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38]
});



const Ubicacion = () => {
   
    return (


        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='ubi z-0' >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={customIcon}>

                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    <Image
                    src="/images/licencia.jpg"
                    alt="images"
                    objectFit="cover"
                    layout="fill"
                    className="opacity-100"
                />
                </Popup>
                
            </Marker>
        </MapContainer>




    );
};

export default Ubicacion;
