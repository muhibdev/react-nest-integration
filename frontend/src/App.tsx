import AllUsers from "./component/AllUsers";
import CreateUser from "./component/createUser";
import User from "./component/user";

const style = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px'
}

function App() {


  return (
    <div className="App">
      <div style={style} >  <CreateUser /></div>
      <div style={style}>  <AllUsers /></div>
      <div style={style} >  <User id="4" /></div>
    </div>
  );
}

export default App;
