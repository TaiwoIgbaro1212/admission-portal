// import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Registration';
import Course from './Pages/Course';
import Academic from './Pages/Academic';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/academic" element={<Academic />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
