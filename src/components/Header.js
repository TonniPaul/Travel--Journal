import photo1 from "../images/world.svg"

function Header(){
   return (
      <nav>
         <img src = {photo1} alt = "p"/>
         <h3>my travel journal.</h3>
      </nav>
   )
}

export default Header;