import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import AddQuestion from './pages/QuestionForm';
import HomePage from './pages/Home';
import ResultPage from './pages/Result';
import store from './redux/configureStore';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/result_page/:result" element={<ResultPage />} />
            <Route path="/add_question" element={<AddQuestion />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
