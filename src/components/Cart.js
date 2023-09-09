import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  
  const products = useSelector(state => state.cart)
  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: '10px'}}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }}/>
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: ₹{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger"onClick={() => removeFromCart(product.id)} >Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <>
      <h1>Cart </h1>
      {cards}
    </>
  )
}

export default Cart
