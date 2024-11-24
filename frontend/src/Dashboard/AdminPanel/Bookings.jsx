import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import AdminBookingCard from "../../shared/AdminBookings";

const Bookings = () => {
  const { apiData: bookings } = useFetch(`${BASE_URL}/booking`);

  return (
    <div className="py-8 px-8 w-full">
      <div className="flex flex-col gap-5  overflow-x-scroll ">
        <table className=" table-auto gap-4 text-xs md:text-sm border-collapse w-[120%]  border-gray-400 lg:w-full border">
          <thead className="w-full bg-gray-200">
            <tr>
              <th className="tableData">Названия тура</th>
              <th className="tableData">Полное Имя</th>
              <th className="tableData">ID</th>
              <th className="tableData">Лица</th>
              <th className="tableData">Телефон</th>
              <th className="tableData">Бронирования</th>
              <th className="tableData">Дата бронирования</th>
              <th className="tableData">Цена</th>
              <th className="tableData">Статус</th>
            </tr>
          </thead>
          {bookings?.map((booking) => (
            <AdminBookingCard booking={booking} key={booking._id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
