import { createEffect, createSignal, Show } from 'solid-js'

import { jwt, addItemToCart } from 'cart/cart'

export default ({ id }) => {
 
  const [loggedIn, setLoggedIn] = createSignal(false)


  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt)
    })
  })

  return (
    <Show when={loggedIn()}>
      <button className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5" onClick={() => addItemToCart(id)}>
        Add To Cart
      </button>
    </Show>
  )
}