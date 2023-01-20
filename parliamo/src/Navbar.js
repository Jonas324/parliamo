const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Parliamo</h1>
            <div className="links">
             <a href="/">Hem</a>
             <a href="/friends">Vänner</a>
             <a href="/logout">Logga ut</a>
            </div>
        </nav>
     );
}
 
export default Navbar;