
import './App.css';
// import Header from './components/header/Header';
import 'remixicon/fonts/remixicon.css';
import Navbar from './contain/navbar/Navbar';
import Hero from './contain/hero/Hero';
import Layout from './contain/layout/Layout';
import Footer from './contain/footer/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
