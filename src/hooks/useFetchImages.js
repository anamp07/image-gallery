import { useCallback, useEffect, useState } from 'react'

export const useFetchImages = () => {
  const [images, setImages] = useState([])
  const [input, setInput] = useState('')

  const [loading, setLoading] = useState(true)
  const key = process.env.REACT_APP_API_KEY

  const imgRequest = useCallback(async () => {

    let route = `https://api.unsplash.com/photos/?client_id=${key}`

    if (input !== '') {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&client_id=${key}`
    }

    setLoading(true);

    const res = await fetch(route)

    const data = await res.json()

    if (data.results) {
      setImages(data.results)
    } else {
      setImages(data)
    }

    setLoading(false)
  }, [input])

  useEffect(() => {
    imgRequest()
  }, [imgRequest])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target[0].value

    setInput(text)
  }

  return [images, loading, handleSubmit]
}