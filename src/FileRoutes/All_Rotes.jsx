import React from 'react'
import { Route, Routes  } from "react-router-dom";
import { Home } from '../Components/Home/Home';
import { About } from '../Components/about/About';
import { Todo } from '../Components/todolist/Todo';
import { ShoppingCart } from '../Components/shoppingcart/ShoppingCart';
import { Weather } from '../Components/weather/weather';
import { Contactus } from '../Components/contactus/Contactus';

const All_Rotes = () => {
  return (
	<div>
		 <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />}>
           </Route>
          <Route path="about" element={<About />} />
          <Route path="todo" element={<Todo />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="weather" element={<Weather />} />
          <Route path="contact" element={<Contactus />} />
        </Routes>
        
      </div>
	</div>
  )
}

export default All_Rotes