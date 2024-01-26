import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Counter from './Counter';
import Effect from './Effect';
import Reducer from './Reducer/Reducer';
import Footer from './Pages/Footer';
import Callbacks from './Callbacks';

 export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path='counter' element={<Counter/>}/>
        <Route path='effect' element={<Effect/>}/>
        <Route path='reducer' element={<Reducer/>}/>
      </Route>
      </Routes>
      <Callbacks/>
      <Footer/>
      </BrowserRouter>
     
  );
 }
 
