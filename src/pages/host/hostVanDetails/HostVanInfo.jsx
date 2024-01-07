import { useOutletContext } from "react-router-dom";
import styles from "./HostvanDetails.module.css";


const HostVanInfo = () => {
  const { currentVan } = useOutletContext()

  return (
    <section className={styles.vanInfo}>
      <p><span>Name:</span> { currentVan.name}</p>
      <p><span>Category:</span> { currentVan.type}</p>
      <p><span>Description:</span> { currentVan.description}</p>
      <p><span>Visibility:</span> Public</p>
    </section>
  )
}

export default HostVanInfo
