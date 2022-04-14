import { FC } from 'react'
import {
  LayersControl,
  SVGOverlay,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Circle,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getLocation } from './get-location.hook'


interface MapViewProps {
  title: string,
  subtitle: string,
  width: string,
  height: string,
  mapStyle: string, // cl0howgz1000414mxx2vhk2jw
}

const MapView: FC<MapViewProps> = ({ title, subtitle, width, height, mapStyle }) => {
  const { position } = getLocation()

  return (
    <>
      <MapContainer
        zoom={13}
        center={position}
        scrollWheelZoom={false}
        style={{
          height,
          // width,
          position: 'relative',
          // border: "15px solid #111",
          zIndex: 1,
          // boxShadow: "18px 18px 45px rgb(0 0 0 / 30%)",
        }}
        attributionControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/jbedo/cl0howgz1000414mxx2vhk2jw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamJlZG8iLCJhIjoiY2lrYm50dWR4MG03cHZqa3BycXE1dmw4dyJ9.v6Mp7vCiYGVe49UFjooYtQ`}
        />
        <div
          style={{ zIndex: 999 }}
          className="relative z-50 h-full w-full text-center "
        >
          <div
            style={{
              background:
                'linear-gradient(to bottom,rgba(255,255,255,0) 0,#fff 95%,#fff 50%)',
            }}
            className="p-5 absolute inset-x-0 bottom-0 h-17"
          >
            <h1
              style={{ fontFamily: 'Abril Fatface' }}
              className="text-black text-4xl font-bold"
            >
              Title
            </h1>
            <span
              style={{ fontFamily: 'Abril Fatface' }}
              className="text-black text-xl"
            >
              Subtitle
            </span>
          </div>
        </div>
        {/* <SVGOverlay
          attributes={{ stroke: "red" }}
          bounds={bounds}
        >

          <text x="50%" y="50%" stroke="red">
            North Carolina
          </text>
        </SVGOverlay> */}
        {/* <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/jbedo/cjria9ya35nzu2smgxatsz5fp.html?title=view&access_token=pk.eyJ1IjoiamJlZG8iLCJhIjoiY2lrYm50dWR4MG03cHZqa3BycXE1dmw4dyJ9.v6Mp7vCiYGVe49UFjooYtQ&zoomwheel=true&fresh=true#10/42.3624/-71.02`}
      /> */}
      </MapContainer>
    </>
  )
}

export default MapView
