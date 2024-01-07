import React, { useEffect, useState } from "react";
import styles from "./HostvanDetails.module.css";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
    .then(data => setCurrentVan(data.vans[0]))
  }, [])
  
  return (
    <section className={styles.hostVan_details_container}>
      <span>
        &larr;
        <Link to=".." relative="path">
          Back to all vans
        </Link>
      </span>
      {currentVan ? (<div className={styles.details_container}>
        <div className={styles.top}>
          <img src={currentVan.imageUrl} alt={currentVan.name} />
          <div className={styles.text_content}>
            <i className={`van-type ${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
          </div>
        </div>
        <nav className={styles.details_nav}>
          <NavLink to="." end style={({isActive})=>isActive ? activeStyles : null}>Details</NavLink>
          <NavLink to="pricing" style={({isActive})=>isActive ? activeStyles : null}>Pricing</NavLink>
          <NavLink to="photos" style={({isActive})=>isActive ? activeStyles : null}>Photos</NavLink>
        </nav>
      </div>) : (
          <h2>Loading....</h2>
      )}
      {currentVan && <Outlet context={ {currentVan}} />}
    </section>
  );
};

export default HostVanDetails;
