import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTZ7jBtSScueyptvx3LfnSAy5tJxTM9IrfA&s" alt="Logo SENA" /> {/* Reemplaza con la URL real del logo */}
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#programas">Programas</a>
        <a href="#acerca">Acerca</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;