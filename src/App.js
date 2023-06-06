import './App.css';

import MoviesFromServer from "./components/MovieFromServer/MoviesFromServer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
        <ToastContainer
            position="top-left"
            autoClose={350}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
      <MoviesFromServer />
    </>
  );
}

export default App;
