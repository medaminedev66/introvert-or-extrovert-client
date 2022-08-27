import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuestion from './components/AddQuestion';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result_page/:result" element={<ResultPage />} />
          <Route path="/add_question" element={<AddQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
