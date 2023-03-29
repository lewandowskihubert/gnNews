import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import './App.css';
import Footer from "./components/footer/footer";
import { Header } from "./components/header/header";
import { HomeView } from './views/home-view/home-view';
import { NewsView } from "./views/news-view/news-view";

function App() {
  return (
   <Router>
    
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="country/:cca2" element={<NewsView />} />


    </Routes>
    
  
   </Router>
  );
}

export default App;
