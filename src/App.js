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


function App() {
  return (
    <div className="App">
      {/* <Routes>
  <Route path='/' element={<Login />} />
</Routes> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Reg' element={<CreateNewAccount/>}></Route>
          <Route path='/Home' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <HomePage/> */}
      {/* <Product_Filters/>  */}
      {/* <HomePage/> */}
      {/* <AddCard/> */}
      {/* <ProductDisplay/> */}
      {/* <Adress/> */}
      {/* <Checking/> */}
      {/* <Section/> */}
      {/* <Payment/>  */}
      {/* <CreateNewAccount/> */}
      {/* <Login/> */}
      {/* <Routes>
              <Route path='' ></Route>
           </Routes> */}
           {/* <Login/> */}

    </div>
  );
}

export default App;
