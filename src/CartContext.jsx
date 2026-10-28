import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { products } from './data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const add = useCallback((product, qty = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [...current, { ...product, qty }]
    })
  }, [])

  const setQty = useCallback((id, qty) => {
    setItems((current) =>
      qty <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) => (item.id === id ? { ...item, qty } : item)),
    )
  }, [])

  const remove = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0)
    const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      add,
      setQty,
      remove,
      clear,
    }
  }, [items, isOpen, add, setQty, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}

export const catalogue = products
