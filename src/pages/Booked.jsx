import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Booked = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <div className="flex items-center flex-col justify-center min-h-[500px]">
        <i>
          <FaCheckCircle size={45} className="text-BaseColor " />
        </i>
        <h2 className="text-[25px] md:text-[40px]  font-bold mb-4 text-start text-BaseColor">
          Поздравляем...!
        </h2>
        <h5 className="font-semibold text-[16px] md:text-[20px] pb-9">
        Ваш тур забронирован!
        </h5>
        <Link className="btn" to="/my-account">
          Посмотреть бронирование
        </Link>
        <button></button>
      </div>
    </div>
  );
};

export default Booked;
