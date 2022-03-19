import React from "react";
import "./App.css";

//React Route
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//Imported File
import Home from "./containers/home/Home";
import AddContact from "./containers/add/AddContact";
import EditContact from "./containers/edit/EditContact";
import ListContact from "./containers/list/ListContact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Linked />
        </Router>
      </div>
    );
  }
}

function Linked() {
  return (
    <>
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
				<Route path="/list" element={<ListContact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      {/*Set Default Page*/}
      {/* <Navigate to="/home" /> */}
    </>
  );
}


export default App;
