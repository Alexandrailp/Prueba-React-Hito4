import Navbar from './components/Navbar'
import Home from './pages/Home'
import Pizza from './components/Pizza'
import Footer from './components/Footer'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home /> 
      {/* <RegisterPage /> */} 
      {/* <LoginPage /> */} 
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App
