import{ useState, useEffect } from 'react'

import { BehaviorSubject } from 'rxjs'

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null)
export const cart = new BehaviorSubject(null)

export const getCart = () => {
  fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt.value}`
    }
  }).then((res) => res.json()).then((res) => {
    cart.next(res)
    return res
  })
}


export const addItemToCart = (id) => {
  fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt.value}`
    },
    body: JSON.stringify({ id })
  }).then((res) => res.json()).then((res) => {
    getCart()
  })
}

export const clearCart = () => {
  fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt.value}`
    }
  }).then((res) => res.json()).then(() => {
    getCart()
  })
}

export async function login(username, password) {
  return fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then((res) => res.json()).then((data) => {
    jwt.next(data.access_token)
    getCart()
    return data.access_token
  })
}

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value)

  useEffect(() => {
    setLoggedIn(!!jwt.value)

    return jwt.subscribe(() => {
      setLoggedIn(!!jwt.value)
    })
  }, [])

  return loggedIn
}