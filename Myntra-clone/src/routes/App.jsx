import "./App.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "./home";
import { Outlet } from "react-router-dom";
import Fetch from "../components/fetchItems";
import { useSelector } from "react-redux";
import LoadingS from "../components/loading";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <Fetch />
      {fetchStatus.currentlyFetch ? <LoadingS /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
