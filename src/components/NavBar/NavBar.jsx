import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
    const [open ,setOpen] =useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' },
      ];
      

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="text-xl md:hidden" onClick={() => setOpen(!open)} >
                {
                    open === true ? 
                    <MdOutlineClose /> : <IoMenu  />
                }
            </div>
            
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'} 
            bg-yellow-200 px-6`}>
            {
                routes.map((route) => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;