import './App.css';

// import router dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import homepage pages
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      
      {/* main */}
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;
