import { FC } from 'react'
import { DefaultFrame, CircleFrame } from './FrameLayout';
import useLocation from './use-location.hook'

interface MapViewProps {
  title: string
  subtitle: string
  width: string
  height: string
  mapStyle: string // cl0howgz1000414mxx2vhk2jw
  lat: number
  lng: number
  layout: number
  titleColor: string
  subtitleColor: string
  onMove?(coords: [number, number], zoom: number): any
}

const MapView: FC<MapViewProps> = (args) => {
  const { position } = useLocation()
  const { layout } = args;

  switch (layout) {
    case 0:
      return <DefaultFrame {...args} />
      break;
    case 1:
      return <CircleFrame {...args} />
      break;
    default:
      return <DefaultFrame {...args} />
  }
}


export default MapView
