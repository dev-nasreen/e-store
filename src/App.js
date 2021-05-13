import Home from './Pages/Home'
import './App.css';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import { ProductDetail } from './Pages/ProductDetail';
import Card from './Pages/Card';
import CheckOut from './Pages/CheckOut';
import MyAccount from './Pages/MyAccount';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/products">
        <Products></Products>
        </Route>
        <Route path="/productDetail">
        <ProductDetail></ProductDetail>
        </Route>
        <Route path="/card">
        <Card></Card>
        </Route>
        <Route path="/checkOut">
        <CheckOut></CheckOut>
        </Route>
        <Route path="/wishlist">
        <WishList></WishList>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/contactUs">
        <Contact></Contact>
        </Route>
        <Route path="/myAccount">
        <MyAccount></MyAccount>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
     
      
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
