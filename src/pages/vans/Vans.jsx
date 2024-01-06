import { useState } from 'react'
import styles from './Vans.module.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
    const vanElements = vans.map(van => (
        <div key={van.id} className={styles.van_title}>
            <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} />
                <div className={styles.van_info}>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type[0].toUpperCase() +van.type.slice(1)}</i>
            </Link>
        </div>
    ))
  return (
    <section className={styles.vans_contianer}>
      <h2>Explore our van options</h2>
          <div className={styles.tags}>
              <span className={styles.tag}>Simple</span>
              <span className={styles.tag}>Luxury</span>
              <span className={styles.tag}>Rugged</span>
              <span>Clear filters</span>
          </div>
          <div className={styles.van_list}>
              {vanElements}
          </div>
    </section>
  )
}

export default Vans
