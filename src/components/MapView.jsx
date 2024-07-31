import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Importa Leaflet
import "leaflet/dist/leaflet.css";
import MapIcon from '../assets/svg/MapIcon.svg'; // Ajusta la ruta según donde tengas almacenado tu icono


const customIcon = L.icon({
    iconUrl: MapIcon,
    iconSize: [40, 40], // Tamaño del icono [ancho, alto]
    iconAnchor: [20, 40], // Punto del icono que coincide con la posición del marcador [la mitad del ancho, la parte inferior del alto]
    popupAnchor: [0, -40] // Punto desde donde se abre el popup del marcador [arriba, centrado]
    });
    
function MapView ({lat=-25.65099944465083, lng=-68.62191923990408}){ //coordenadas predeterminadas si no se pone ninguna


    return (
        <MapContainer center={[lat, lng]} zoom={14} style={{ height: "400px", width: "100%",}} className="leaflet-map">
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
            Ubicacion de la construcción. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    );
    };

export default MapView;
