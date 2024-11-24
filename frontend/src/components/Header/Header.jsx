import React, { useState, useRef, useEffect, useContext } from "react";
import Logo from "./../../assets/images/mainLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch, role } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    handleMenuToggle();
    navigate("/home");
    toast.info("Выход...");
  };

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;
    const header = headerRef.current;

    const handleWheel = (event) => {
      const currentScrollTop = window.pageYOffset;

      if (event.deltaY > 0) {
        // Scrolling down
        header.classList.add("hidden");
      } else {
        // Scrolling up
        header.classList.remove("hidden");
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="transition-all shadow-md duration-300">
      <nav className="container mx-auto px-5 flex justify-between items-center py-2">
        {role === "admin" ? (
          <div className="h-8 md:h-12 md:hidden">
            <img src={Logo} alt="" className="h-full" />
          </div>
        ) : (
          <div className="h-8 md:h-12">
            <Link to={"/"}>
              <img src={Logo} alt="" className="h-full" />
            </Link>
          </div>
        )}

        <div className="flex gap-2 md:hidden">
          {user ? (
            <div className="flex gap-3 items-center">
              <Link
                className="text-[18px] font-semibold text-BaseColor rounded hover:text-BHoverColor cursor-pointer"
                to={role === "user" && "/my-account"}
              >
                {user.username}
              </Link>
            </div>
          ) : null}
          <BiMenu
            className="w-8 h-8 cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed text-center top-0 h-screen right-0 w-2/3 bg-gray-100 duration-300 p-4 shadow-md z-40">
            <IoClose
              className="w-8 h-8 cursor-pointer absolute top-4 right-0 mr-6 text-gray-600 hover:text-black"
              onClick={handleMenuToggle}
            />
            <ul className="flex flex-col item-center h-full justify-center gap-10">
              {role !== "admin" && (
                <>
                  <Link to="/home" onClick={handleMenuToggle}>
                    Домой
                  </Link>
                  <Link to="/tours" onClick={handleMenuToggle}>
                    Туры
                  </Link>
                  <Link to="/about" onClick={handleMenuToggle}>
                    Достопримечательности
                  </Link>
                  <Link to="/contact" onClick={handleMenuToggle}>
                    Контакты
                  </Link>
                </>
              )}
              {role === "admin" && (
                <>
                  <Link to="/all-booking" onClick={handleMenuToggle}>
                    Бронирование
                  </Link>
                  <Link to="/all-tours" onClick={handleMenuToggle}>
                    Туры
                  </Link>
                  <Link to="/create" onClick={handleMenuToggle}>
                    Создать
                  </Link>
                </>
              )}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-black text-white rounded mx-auto hover:bg-gray-800"
                >
                  Выйти
                </button>
              ) : null}
              {user ? null : (
                <div className="flex items-center justify-center gap-4">
                  <Link to="/login" onClick={handleMenuToggle}>
                    <button className="text-BaseColor rounded hover:text-BHoverColor">
                      Логин
                    </button>
                  </Link>
                  <Link to="/register" onClick={handleMenuToggle}>
                    <button className="btn">Регистрация</button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}

        {role === "admin" ? (
          <ul className="md:flex hidden space-x-8">
            <Link to="/all-booking">Бронирование</Link>
            <Link to="/all-tours">Туры</Link>
            <Link to="/create">Создать</Link>
          </ul>
        ) : (
          <ul className="md:flex hidden space-x-4">
            
            <Link to="/tours">Туры</Link>
            <Link to="/about">Достопримечательности</Link>
            <Link to="/contact">Контакты</Link>
          </ul>
        )}

        <div className="md:flex hidden items-center space-x-4">
          {user ? (
            <div className="flex gap-3 items-center">
              <Link
                className="text-[18px] font-semibold text-black rounded hover:text-black cursor-pointer"
                to={role === "user" && "/my-account"}
              >
                {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Выйти
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2  rounded hover:">
                  Логин
                </button>
              </Link>
              <Link to="/register">
                <button className="btn">Регистрация</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
