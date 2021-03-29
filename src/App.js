import './App.css';
import './style.css'
import tun from "./tun.jpg"

function App() {
  return (
    <div className="App">
      <div style={{ border:"solid 1 black", maxWidth: "100vw" }}>

        <h1 class="title red">Tunisia</h1>
        <br></br>      
    <img src={tun} alt="Tunisia" width="320" height="240"></img>
    <br></br>
<img src="/tn.jpg" alt="Tunisia" width="320" height="240"></img>

</div>

      <video width="320" height="240" controls>

        <source src="/tunisia.mp4" type="video/mp4" />

      </video>

    </div>
    
  );
}

export default App;
