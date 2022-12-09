
// import './App.css';
// import Appbar from './components/AppBar'
// import Product from './components/Product'

// function App() {
//   return (
//     <div className="App">
//     <Appbar/>
//     <Product/>
   
//     </div>
//   );
// }

// export default App;

import './App.css';
import registerProduct from './components/registerProduct.jsx'
import prodList from './components/prodList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<registerProduct />} />
          <Route path="/prodList" exact element={<prodList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
