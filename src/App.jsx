
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../src/pages/landing/index"
import Success from "../src/pages/success/index"


function App() {
  return (
    <>
     
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;