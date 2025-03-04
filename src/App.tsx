import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Home from './pages/Home';
import { useRef } from 'react';

function App() {
  const postFormRef = useRef<HTMLDivElement>(null);
  const handlePostClick = () => {
    postFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <Header onPostClick={handlePostClick} />
          <main className="mt-16">
            <Routes>
              <Route path="/" element={<Home postFormRef={postFormRef} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;