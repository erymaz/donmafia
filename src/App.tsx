import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Footer from 'components/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
