import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./Components/javascript/HomePage";
import StateHandler from './Components/javascript/StateHandler';
import Result from './Components/javascript/Result';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/exam' element={<StateHandler />} />
        <Route exact path='/result' element={<Result />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
