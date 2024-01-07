import { useOutletContext } from "react-router-dom";
import styles from "./HostVanDetails.module.css";

const HostVanPhotos = () => {
  const {currentVan} = useOutletContext()
  return <img src={currentVan.imageUrl} alt={`photo of ${currentVan.name}`} className={ styles.vansPhoto}/>
}

export default HostVanPhotos
