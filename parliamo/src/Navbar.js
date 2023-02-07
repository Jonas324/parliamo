import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Parliamo</h1>
            <div className="links">
             <a href="/">Hem</a>
             <p/>
             <a href="/friends">Vänner</a>
             <p/>
             <a href="/login">Logga in</a>
             <p/>
             <a href="/register">Registrera</a>
             <p/>
             <a href="/logout">Logga ut</a>
            </div>
        </nav>
     );
}

export default Navbar;