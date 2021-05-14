import { useState } from "react"
import fetch from 'node-fetch'

const BACKEND_URL = "http://localhost:8080"

function useRequest<Result>() {
  const [data, setData] = useState<Result>()
  const [isLoading, setIsLoading] = useState<boolean>()
  const [error, setError] = useState<string>()

  const getData = async (url: string) => {
    setIsLoading(true)

    try {
      let response = await fetch(BACKEND_URL, { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({ url }) })
      let data = await response.json()
      setData(data)
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [getData, data, isLoading, error]
}

export default useRequest
