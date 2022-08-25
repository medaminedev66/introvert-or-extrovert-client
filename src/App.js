import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';
import ResultPage from './pages/ResultPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/result_page/:result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
