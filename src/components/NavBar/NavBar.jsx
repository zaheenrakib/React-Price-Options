import Link from "../Link/Link";


const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' },
      ];
      

    return (
        <nav>
            <ul className="md:flex">
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