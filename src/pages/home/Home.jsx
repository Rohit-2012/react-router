import React from 'react'
import style from './Home.module.css'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/vans')
  }

  return (
    <section className={style.home_container}>
      <h2>You got the travel plans, we got the travel vans.</h2>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Button text={ "Find your van"} bgColor={'#FF8C38'} handleFunction={handleNavigate}/>
    </section>
  )
}

export default Home
