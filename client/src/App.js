import './App.css';
import { Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Home from "./components/Home/Home.jsx"
import RecipeCreate from "./components/RecipeCreate/RecipeCreate.jsx"
import RecipeDetail from "./components/RecipeDetail/RecipeDetail.jsx"

function App() {
  return (
      <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/create" component={RecipeCreate}/>
          <Route exact path="/recipe/:id" component={RecipeDetail}/>
      </div>
  );
}

export default App;
