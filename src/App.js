import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <img src="/logo.jpg" alt="Logo de Dollar Store" className="h-24 w-auto mb-4" />

      {/* Título principal */}
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        ¡Bienvenido a Dollar Store!
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 text-center max-w-md">
        Encuentra productos increíbles a precios bajos. ¡Explora nuestra tienda hoy mismo!
      </p>
    </div>
  );
}

export default App;
