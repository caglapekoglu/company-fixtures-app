import { persistor } from "../src/Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Fixures from "./Pages/Fixures";
import Navbar from "./components/Navbar";
import AddDevice from "./Pages/AddDevice";
import Details from "./components/Details";
import Categories from "./Pages/Categories";
function App() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  return (
    <PersistGate persistor={persistor}>
      <div>
        <BrowserRouter className="App">
        <Navbar />
          <Routes>

              <Route
                path="/"
                exact
                element={
                  <div>
                    <Categories />
                  </div>
                }
              />
             {token&&  <Route path="/add-device" element={<AddDevice/>} />}
            <Route path="/auth" element={<Auth />} />
            <Route path="/:type" element={<Fixures />} />
            <Route path="/:type/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </PersistGate>
  );
}

export default App;
