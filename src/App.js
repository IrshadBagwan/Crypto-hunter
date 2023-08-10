
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Components/Header.js';
import HomePage from "./pages/HomePage.js";
import CoinPage from "./pages/CoinPage.js";
import {makeStyles} from "@material-ui/core";


const App = () =>{

  const useStyles = makeStyles(() => ({
    App:{
     backgroundColor: "#14161a",
     color:"white",
     minHeight:"100vh"
    }
  }));

  const classes = useStyles();
  return(
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}  exact/>
      <Route path="/coins/:id" element={<CoinPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;