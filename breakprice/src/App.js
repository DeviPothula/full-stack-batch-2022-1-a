import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from './features/login';
import Home from './features/home';
import Register from './features/register';
import Friend from './features/friend';
import { Provider } from 'react-redux';
import store from './app/store';
import AddExpense from './features/Addexpense';
import Forgot from './features/forgot';
import Reset from './features/reset';
import Frdslist from './features/frdslist';
import Expenses from './features/myexpanse';
function App() {
  
  return (
   <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Routes>
          
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/friends" element={<Friend></Friend>}></Route>
          <Route path="/addfrd" element={<Friend></Friend>}></Route>
          <Route path="/addexpense" element={<AddExpense></AddExpense>}></Route>
          <Route path="/forgot" element={<Forgot></Forgot>}></Route>
          <Route path="/reset" element={<Reset></Reset>}></Route>
          <Route path='/ListFriends' element={<Frdslist></Frdslist>}></Route>
          <Route path="friends/myexpanse" element={<Expenses></Expenses>}></Route>  
   </Routes>
  </div>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
