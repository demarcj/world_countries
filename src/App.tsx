import React from 'react';
import './App.css';
import { Header } from "./components/header";
import { Main } from "./components/main"
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div id="color_mode" className="light_mode">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
