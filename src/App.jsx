
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {LoginPage} from "./routes/routes"

import "./App.css"
import { ToastContainer } from "react-toastify";
function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/login" element={<LoginPage/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;