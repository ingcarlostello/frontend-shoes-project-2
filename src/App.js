// @React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @Components
import Home from "./components/Home/Home";
import MenSection from "./components/Men/MenSection";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ShoppingCar from "./components/ShoppingCar/ShoppingCar";
import WomenSection from "./components/Women/WomenSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/men-section" component={MenSection} />
          <Route exact path="/women-section" component={WomenSection} />
          <Route
            exact
            path="/productDetail/:idShoe"
            component={ProductDetail}
          />
          <Route exact path="/shopping-car" component={ShoppingCar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
