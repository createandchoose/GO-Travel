import React, { useRef } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";
import "./SeachhBar.css";

const SearchBar = () => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const searchTerm = cityRef.current.value;

    if (minPrice === "" || maxPrice === "" || searchTerm === "") {
      toast.error("Please fill all the fields");
    } else {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      if (!response.ok) {
        toast.error("No Record Found!");
        navigate(
          `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          { state: result.data }
        );
      }

      const result = await response.json();

      navigate(
        `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        { state: result.data }
      );
    }
  };
};

export default SearchBar;
