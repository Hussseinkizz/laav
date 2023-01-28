import ServiceCard from "../components/ServiceCard";
import React from "react";
import * as Icons from "react-icons/io5";

const servicesCards = [
  {
    name: "buy medicine",
    icon: (
      <Icons.IoMedkit className="h-10 w-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: "services/buy-medicine",
  },
  {
    name: "book appointment",
    icon: (
      <Icons.IoCalendar className="h-10 w-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: "services/book-appointment",
  },
  {
    name: "lab test",
    icon: (
      <Icons.IoBeaker className="h-10 w-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: "services/lab-test",
  },
  {
    name: "contact professional",
    icon: (
      <Icons.IoCall className="h-10 w-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: "services/contact-professional",
  },
];

const services = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">What would you like to do?</h1>
      <div className="grid w-full grid-cols-2 place-items-center gap-4 md:grid-cols-4">
        {servicesCards.map((card) => (
          <ServiceCard
            key={card.name}
            name={card.name}
            icon={card.icon}
            route={card.route}
          />
        ))}
      </div>
    </section>
  );
};

export default services;
