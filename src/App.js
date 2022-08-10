import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/';
import Home from './components/home/';
import Footer from './components/footer/';
import Holiday from './components/holiday';


function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/holiday" element={<Holiday />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
