// @React
import { useEffect } from "react";

// @React-redux
import { useDispatch } from "react-redux";
// @React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @Actions
import { checkingLocalStorage } from "./actions/shoppingCarActions";

// @Components
import Cart3 from "./components/Cart2/Cart3";
import Home from "./components/Home/Home";
import MenSection from "./components/Men/MenSection";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import WomenSection from "./components/Women/WomenSection";

function App() {

    const dispatch = useDispatch();

   useEffect(() => {
     const getShoesFromLocalStorage = () => {
       dispatch(checkingLocalStorage());
     };
     getShoesFromLocalStorage();
   }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men-section" component={MenSection} />
          <Route exact path="/women-section" component={WomenSection} />
          <Route exact path="/shopping-car" component={Cart3} />
          <Route
            exact
            path="/productDetail/:idShoe"
            component={ProductDetail}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
