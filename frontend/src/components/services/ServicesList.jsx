// ServicesList.jsx
import React from 'react';
import ServicesCard from './ServicesCard';
import { MdHotel } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";

const ServicesList = () => {
  const services = [
    {
      title: 'Туры',
      description: 'Исследуйте захватывающие места с нашими приключенческими турами.',
      icon: <IoMdBus />,
    },
    {
      title: 'Планирование путешествия',
      description: 'Разберемся с деталями! Мы планируем, чтобы вы наслаждались отдыхом своей мечты.',
      icon: <FaPlaneDeparture />,
    },
    {
      title: 'Высококачественное жилье',
      description: 'Ощутите комфорт и роскошь в наших тщательно отобранных номерах.',
      icon: <MdHotel />,
    },
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
