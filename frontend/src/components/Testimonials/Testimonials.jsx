import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "Александр",
      description:""
    },
    {
      pic: avatar2,
      name: "Татьяна",
      description:"-",
    },
    {
      pic: avatar3,
      name: "Алексей",
      description:"-",
    },
    {
      pic: avatar1,
      name: "Марина",
      description:"-",
    },
    {
      pic: avatar3,
      name: "Айтал",
      description:"-",
    },
  ];
};

export default Testimonials;
