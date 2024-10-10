import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recap from './components/recap';
import HomePage from './components/homepage';

function App() {
  return (
    <Router>
      <div className='w-full min-h-screen'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recap" element={<Recap />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App