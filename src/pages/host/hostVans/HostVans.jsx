import { useState } from 'react'
import styles from './HostVans.module.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {
    const [hostVans, setHostVans] = useState(null)

    useEffect(() => {
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    }, [])

  return (
    <section className={styles.host_vansList_container}>
          <h2>Your listed Vans</h2>
          <div className={styles.vans_container}>
              {hostVans ? (
                  hostVans.map(van => (
                      <Link to={`/host/vans/${van.id}`} key={van.id}>
                          <div className={styles.hostVan}>
                              <img src={van.imageUrl} alt={`image of ${van.name}`} />
                              <div className={styles.hostVan_info}>
                                  <h3>{van.name}</h3>
                                  <p>${ van.price }/day</p>
                              </div>
                          </div>
                      </Link>
                  ))
              ) : (
                <h2>Loading...</h2>
              )}
          </div>
    </section>
  )
}

export default HostVans
