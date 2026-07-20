import "./NavBar.css";
import { imgensNavBar } from "../../data/mockData";

function LogoNavBar() {
  return (
    <>
      {imgensNavBar.map((icone) => (
        
        <div className="container-icone-navBar" key={icone.id}>
          <img src={icone.img} alt={icone.desc} />
        </div>

       
      ))}


    </>
  );
}

export function NavBar() {
  return (
    <nav className="container-navBar">
      <LogoNavBar />
    </nav>
  );
}