"use client";
import { useEffect, useState } from "react";
import { CardEventoContainer } from "./CardEventoContainer";
import { FilterBar } from "./FilterBar";
import { FilterBarButtons } from "./FilterBarButtons";
import { Eventos } from "@/helpers/interfaces";

const eventos: Eventos[] = [
  {
    nombre: "Winona Riders + Fonso",
    dueño: "Indie Folks",
    categoria: "Música",
    location: "Club TRI",
    fecha: "8 de Febrero 2024",
    stock: 2000,
    precio: 2000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 2",
    dueño: "Dueño 2",
    categoria: "Categoría 2",
    location: "Ubicación 2",
    fecha: "8 de Febrero 2024",
    stock: 1000,
    precio: 1500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 3",
    dueño: "Dueño 3",
    categoria: "Categoría 3",
    location: "Ubicación 3",
    fecha: "8 de Febrero 2024",
    stock: 800,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 4",
    dueño: "Dueño 4",
    categoria: "Categoría 4",
    location: "Ubicación 4",
    fecha: "8 de Febrero 2024",
    stock: 500,
    precio: 800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },

  {
    nombre: "Evento 5",
    dueño: "Dueño 5",
    categoria: "Categoría 5",
    location: "Ubicación 5",
    fecha: "8 de Febrero 2024",
    stock: 1200,
    precio: 1800,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: true,
    online: false,
  },
  {
    nombre: "Evento 6",
    dueño: "Dueño 6",
    categoria: "Categoría 6",
    location: "Ubicación 6",
    fecha: "Fecha 6",
    stock: 300,
    precio: 500,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 7",
    dueño: "Dueño 7",
    categoria: "Categoría 7",
    location: "Ubicación 7",
    fecha: "8 de Febrero 2024",
    stock: 700,
    precio: 1000,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 8",
    dueño: "Dueño 8",
    categoria: "Categoría 8",
    location: "Ubicación 8",
    fecha: "7 de Diciembre 2023",
    stock: 1500,
    precio: 2200,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 9",
    dueño: "Dueño 9",
    categoria: "Categoría 9",
    location: "Ubicación 9",
    fecha: "7 de Diciembre 2023",
    stock: 100,
    precio: 300,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: false,
  },
  {
    nombre: "Evento 10",
    dueño: "Dueño 10",
    categoria: "Categoría 10",
    location: "Ubicación 10",
    fecha: "7 de Diciembre 2023",
    stock: 2000,
    precio: 0,
    comentarios: [],
    imagen: "/images/evento1.png",
    popular: false,
    online: true,
  },
];

export const EventosDestacados = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState<string>("todos");

  const filteredEvents = (events: Eventos[], value: string) => {
    if (value === "online") {
      return events.filter((event) => event.online === true);
    }
    if (value === "populares") {
      return events.filter((event) => event.popular === true);
    }
    if (value === "gratis") {
      return events.filter((event) => event.precio === 0);
    }
    if (value === "hoy") {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();

      const nombresMeses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];

      const nombreMes = nombresMeses[month];
      const hoy = `${day} de ${nombreMes} ${year}`;
      return events.filter((event) => event.fecha.toLocaleLowerCase() === hoy);
    }
    return events;
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [value]);

  return (
    <section className="font-bold text-[42px] py-8 pl-10 ">
      <h2>Eventos Destacados</h2>
      <div className="flex justify-between items-center mb-8 border-b pb-2 border-b-slate-400 mr-10">
        <FilterBar setValue={setValue} />
        <FilterBarButtons
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          eventos={filteredEvents(eventos, value)}
        />
      </div>
      <CardEventoContainer
        eventos={filteredEvents(eventos, value)}
        currentIndex={currentIndex}
      />
    </section>
  );
};
