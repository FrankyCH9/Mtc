import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import Image from 'next/image'
import ReactDOMServer from 'react-dom/server'; 

import { IoLocationSharp } from "react-icons/io5";

const iconComponent = <IoLocationSharp style={{ fontSize: "25px", color: "red" }} />;

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
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps/place/16%C2%B025\'40.3%22S+71%C2%B030\'51.6%22W/@-16.4278611,-71.5143333,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-16.4278611!4d-71.5143333?hl=es&entry=ttu', '_blank');
    };

    return (
        <MapContainer center={[-16.4278611, -71.5143333]} zoom={17} scrollWheelZoom={false} className='ubi z-0'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-16.4278611, -71.5143333]} icon={customIcon} eventHandlers={{ click: openGoogleMaps }}>
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


