import { useEffect, useState } from 'react'

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/pizzas.json')
      if (!res.ok) {
        throw {
          msg: 'Falló el consumo de la api',
          error: res.status,
        }
      }
      const db = await res.json()
      setPizzas(db)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    pizzas,
    loading,
    error,
  }
}
