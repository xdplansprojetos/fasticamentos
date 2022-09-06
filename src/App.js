import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReactGA from 'react-ga'
import { useEffect } from "react";

const TRACKING_ID = "G-SRCR8C0CN3" // ID Google Analytics
ReactGA.initialize(TRACKING_ID)



function App() {

    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search)
    })

  

  return (
    <>
      
      <Navbar />
      <Header />
      <Main />
      <Footer />
      
      
    </>
  );
}

export default App;
