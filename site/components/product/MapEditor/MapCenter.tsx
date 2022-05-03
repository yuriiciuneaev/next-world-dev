import { useCallback, useEffect } from 'react'
import { useMap } from 'react-leaflet'
type MapSetCenterProps = { center: [number, number], onMove: any }

// Because react-leaflet is, uh, special,
// lets make a function component that can pan the map.
const MapCenter: React.FC<MapSetCenterProps> = (props) => {
  const parentMap = useMap();

  const onMove = useCallback(() => {
    props.onMove(parentMap.getCenter(), parentMap.getZoom());
  }, [parentMap])

  useEffect(() => {
    // parentMap.panTo(props.center)
    parentMap.on('move', onMove);
  }, [parentMap])

  return <div></div>
}

export default MapCenter