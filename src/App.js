import './App.css';

// import router dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import header components
import Header from './components/Header';

// import footer components
import Footer from './components/Footer';

// import homepage pages
import Homepage from './pages/Homepage';

// import cart shop pages
import CartShop from './pages/CartShop';

function App() {
  return (
    <Router>

      {/* header */}
      <Header/>
      
      {/* main */}
      <main className='bg-zinc-900 text-white'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart-shop' element={<CartShop/>} />
        </Routes>
      </main>

      {/* footer */}
      <Footer/>

    </Router>
  );
}

export default App;
