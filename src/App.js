import React from 'react';
import Header from './Components/Header'; 
import Button from './Components/Button';
import Banner from './Components/Banner';
import Footer from './Components/Footer'; // Asegúrate de importar correctamente el componente Footer

const App = () => {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div>
      <Header title="Mi Aplicación React" />
      <Button onClick={handleClick} text="Clic aquí" />
      <Banner message="¡Bienvenido a mi aplicación!" />
      <p>Contenido de la aplicación...</p>
      <Footer text="© 2024 Mi Aplicación React" />
    </div>
  );
};

export default App;
