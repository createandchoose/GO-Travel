import React from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";  
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
import faqImg from "../assets/images/experience.png";
import ImagesGallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
    
      <div style={{backgroundColor: "#F5F5F5", height:"auto"}} className="bg-cover  md:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="min-h-screen bg-cover md:pt-4 px-6 md:px-12 bg-center">
              <h1 className="text-[33px] font-  text-center md:text-[3vw] md:text-start font-bold mb-4 ">
                Ваш идеальный тур начинается с нас{" "}
                
              </h1>
              <p className="text-[33px] md:text-[2vw]">
              Найдите для себя то, что порадует вас в любое время
              и в любом месте
              </p>
              <h3></h3>
              <div style={{display: "flex", gap:"10px",}}>
              <button className= "Greenbtn"> Посмотреть направления</button>
              <button href="/sign-up" className= "btn"> Войти</button>
              </div>
              <h3></h3>
            </div>
          </div>
          
        </div>
      </div>


      <section className="min-h-screen py-8 px-6 md:px-12">
        <h1 className="text-[40px] md:text-[40px] font- font-bold mb-4 text-center ">
          Популярные туры
        </h1>
        <p className="para md:text-lg md:leading-8 md:text-gray-800">
          
        </p>
        <div className="">  
          <FeaturedTourList />
        </div>
      </section>

      
    </>
  );
};

export default Home;
