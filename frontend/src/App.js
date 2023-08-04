import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import OnBoarding from './layout/OnBoarding';
import Product from "./screens/Product";

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />}>
          <Route path='/' element={<Home />} exact />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
