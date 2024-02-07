
import './App.css';

function App() {
  return (
  <>
  {<div className="bc">
    <div className="img">
      <img src="https://institute.careerguide.com/wp-content/uploads/2020/06/music.png" alt="" />
    </div>
    <div className="btn"><button class="btn" onClick={()=>{
      window.location.href="/music"
    }} >
  <div>GET STARTED</div>
  <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M4 12.0601H14.17"></path>
<path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
</svg>
</button></div>
  </div> }
  
  </>
  );
}

export default App;
