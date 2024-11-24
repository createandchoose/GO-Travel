import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterImg from "../assets/images/Signup2.png";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo: "",
    role: "user",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await response.json();

      if (response.ok) {
        // console.log('User registered successfully:', message);
        toast.success(message);
        navigate("/login");
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Сервер не");
    }
  };

  return (
    <div className="min-h-screen md:min-h-[400px] flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-6 p-6 md:p-8 rounded-lg shadow-md w-full max-w-xl m-8 md:max-w-5xl ">
        {/* Sign Up Photo */}
        

        
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Регистрация
            </h2>
            <p className="text-sm md:text-base text-GrayColor">
            Создайте свою учетную запись, чтобы начать свое путешествие.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                имя пользователя
              </label>
              <input
                type="text"
                name="username"
                placeholder="Введите свое имя пользователя"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Введите свой email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-md md:text-lg font-medium text-GrayColor"
              >
                Пароль
              </label>
              <input
                type="password"
                name="password"
                placeholder="Введите свой пароль"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-BaseColor"
                value={formData.password}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn my-3"
                disabled={isLoading}
              >
                {isLoading ? "Регистарция..." : "Регистрация"}
              </button>
              <p className="text-sm md:text-base text-center">
                У вас уже есть учетная запись?{" "}
                <Link
                  className="text-BaseColor hover:text-BHoverColor"
                  to="/login"
                >
                  Логин здесь
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
