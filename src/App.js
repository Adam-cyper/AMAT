import React from "react";
// import LandingPage from './components/pages/LandingPage'
// import {Route, Routes} from 'react-router-dom'
// import ContactPage from "./components/pages/ContactPage";
// import NavAndFooter from "./Reusable/NavAndFooter";
// import Blog from "./components/pages/Blog";
// import Service from "./components/pages/Service";
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <div>
      <HomePage/>
      {/* <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<NavAndFooter><ContactPage/></NavAndFooter>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Service"  element={<Service/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
