import { useState } from 'react'
import styles from './Vans.module.css'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
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
              <Link to='?type=simple' className={`${styles.simple} ${styles.tag}`}>Simple</Link>
              <Link to='?type=luxury' className={`${styles.luxury} ${styles.tag}`}>Luxury</Link>
              <Link to='?type=rugged' className={`${styles.rugged} ${styles.tag}`}>Rugged</Link>
              <Link to='.' className={styles.clear}>Clear filters</Link>
          </div>
          <div className={styles.van_list}>
              {vanElements}
          </div>
    </section>
  )
}

export default Vans
