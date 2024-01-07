import { useOutletContext } from "react-router-dom";
import styles from "./HostVanDetails.module.css";

const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <p className={styles.van_pricing}>
      <span>${ currentVan.price}</span>/day
    </p>
  )
}

export default HostVanPricing
