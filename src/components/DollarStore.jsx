import React from "react";

export default function DollarStore() {
  return (
    <div className="p-6 font-sans">
      <header className="bg-green-700 text-white p-4 rounded-xl mb-6">
        <h1 className="text-3xl font-bold">Dollar Store</h1>
        <nav className="mt-2 space-x-4">
          <a href="#inicio" className="hover:underline">Inicio</a>
          <a href="#productos" className="hover:underline">Productos</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>
      </header>
      <section id="inicio" className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Bienvenido a Dollar Store</h2>
        <p>Tu tienda de variedad inspirada en Mundo Nica.</p>
      </section>
      <section id="productos" className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Productos</h2>
        <ul className="list-disc pl-5">
          <li>Llaveros, lentes, labiales</li>
          <li>Artículos escolares</li>
          <li>Decoración de fiestas</li>
        </ul>
      </section>
      <section id="contacto">
        <h2 className="text-2xl font-bold mb-2">Contacto</h2>
        <p>Escribinos para más información.</p>
      </section>
    </div>
  );
}
