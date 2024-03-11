import AddCard from "./HomeComponents/AddCard";
import HomePage2 from "./HomeComponents/HomePage2";
import HomePage from "./HomePage";
import ProductDisplay from "./ProductDisplay";
import Product_Filters from "./Product_Filters";
// import Delivary from './Delivary/Adress'
import Adress from "./Delivary/Adress";
import Checking from "./Delivary/Checking";
import Section from "./HomeComponents/Section";
import Payment from "./Delivary/Payment";
import CreateNewAccount from "./Accounts/CreateNewAccount";
import Login from "./Accounts/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Delivary/Order";
import Transform from "./Transform";
import Book from "./Delivary/Book";
import img1 from './HomeComponents/Assets/img1.jpg'
import img2 from './HomeComponents/Assets/img2.jpeg'
import img3 from './HomeComponents/Assets/img3.jpeg'
import DesignHome from "./DesignHome";
import Forget from "./Forget";


function App() {
  const val=localStorage.getItem('email')?'safag':''
  if(val){
    localStorage.setItem('request','sdfesrg')
  }
  else{
    localStorage.setItem('request','')
  }
  return (
    <div className="App">  
    <BrowserRouter>
      <Routes>
        

         
          {localStorage.getItem('request')?<Route path='/' element={<HomePage/>}/>:<Route path='/' element={<Login/>}/>}
          
          <Route path='/Reg' element={<CreateNewAccount />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Product' element={<Product_Filters />} />
          <Route path='/Addcard' element={<AddCard />} />
          <Route path='/Orders' element={<Order/>} />
          <Route path='/Dis' element={<ProductDisplay/>}/>
          <Route path='/Check' element={<Checking/>}/>
          <Route path='/Pay' element={<Payment/>}/>
          <Route path='/Order' element={<Order/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/For' element={<Forget/>}/>
      </Routes>
      </BrowserRouter>
      {/* <>
          <DesignHome/>
      </> */}
    
<>

</>
    </div>
  );
}

export default App;
