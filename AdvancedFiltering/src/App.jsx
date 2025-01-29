import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

import products from './db/data'

import Card from './components/Card'
import './index.css'



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')
  // ------------------Input Filter---------------------
  

  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter(product =>
     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    )


  // ------------------Radio Filter---------------------
  
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  // ------------------Buttons Filter---------------------

  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    //  Filtering Input items

    if (query){
      filteredProducts = filteredItems
    }

    // Selected FIlter

    if (selected){
      filteredProducts = filteredProducts.filter(
      ({category, color, company, newPrice, title}) => 
      category === selected || 
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected)


    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) =>(
      <Card key={Math.random()}
      img = {img}
      title ={title}
      star = {star}
      reviews ={reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice} />
    ))
  }


  const result = filteredData(products, selectedCategory, query)
  return (
    <>
    <Sidebar handleChange={handleChange} />
    <Nav query={query} handleInputChange ={handleInputChange}></Nav>
    <Recommended handleClick={handleClick}></Recommended>
    <Products result ={result}></Products>
    
    
    </>
  )
}

export default App
