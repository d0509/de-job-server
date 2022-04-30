import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import SeeProduct from './components/SeeProduct';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateComponent from './components/UpdateComponent';
import SeeProfile from './components/SeeProfile';



function App() {
  return (
    <div className="App">
      <header className='App-header'>
      
        <BrowserRouter >
          <Nav />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateComponent />} />
              <Route path="/logout" element={<h1> Logout Component</h1>} />
              <Route path="/profile" element={<SeeProfile/>} />
            </Route>

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
        </header>
    </div>
  );
}

export default App;
