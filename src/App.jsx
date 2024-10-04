import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatList from './components/CatList';
import CatDetail from './components/CatDetail';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatList />} />
        <Route path="/cat/:id" element={<CatDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
