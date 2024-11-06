import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Card from "./assets/components/Card.jsx";

function App() {
  

  return (
    <>
      <Navbar/>
      


      <div className="cards">
        <Card title="card 1" description = "card 1 desc" />
        <Card title="card 2" description = "card 2 desc" />
        <Card title="card 3" description = "card 3 desc" />
        <Card title="card 4" description = "card 4 desc" />
        
      </div>
      <Footer/>
    </>
  );
}

export default App
