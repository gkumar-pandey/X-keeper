import React  from "react";

const year = new Date().getFullYear();
const Footer = ()=>{
 return (
     <footer>
         <h3> Copyright &copy; {year}</h3>
     </footer>
    
 )
}

export default Footer;