import React, { useState } from "react";
import "./Practitioner.css";
import PractionerCard from "../../Components/PractionerCard/PractionerCard.jsx";
import { useGetListOfPractitionerQuery } from "../../api/appApi.js";
import Pagination from "../../Pages/Pagination/Pagination.jsx";
import Loader from "../../Helper/Loader.js";
import { IoIosStar } from "react-icons/io";

const Practitioner = () => {
  const [rating, setRating] = useState(null);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useGetListOfPractitionerQuery({
    rating,
    category,
    page,
  });
  console.log(data, isLoading);
  const handleActiveRating = (value) => {
    setRating(value);
    refetch();
  };
  const handleActiveCategory = (value) => {
    setCategory(value);
    refetch();
  };

  const hangleActivePage = (value) => {
    setPage(value);
    refetch();
  };
  const handleReset = () => {
    setRating(null);
    setCategory(null);
    setPage(1);
    refetch();
  };
  return (
    <div className="practionsers-container">
      <h1>List of Practioners</h1>
      <div className="practionsers-filter">
        <div className="product-shop-filter-section6">
          <h3>Rating</h3>
          <div>
            <IoIosStar
              fill={rating >= 1 ? "orange" : "#aaaaaa"}
              onClick={() => handleActiveRating(1)}
            />
            <IoIosStar
              fill={rating >= 2 ? "orange" : "#aaaaaa"}
              onClick={() => handleActiveRating(2)}
            />
            <IoIosStar
              fill={rating >= 3 ? "orange" : "#aaaaaa"}
              onClick={() => handleActiveRating(3)}
            />
            <IoIosStar
              fill={rating >= 4 ? "orange" : "#aaaaaa"}
              onClick={() => handleActiveRating(4)}
            />
            <IoIosStar
              fill={rating >= 5 ? "orange" : "#aaaaaa"}
              onClick={() => handleActiveRating(5)}
            />
          </div>
          <p>{rating} Stars</p>
        </div>
        <div>
          <h4>Category</h4>
          <select
            onChange={(e) => handleActiveCategory(e.target.value)}
            name="category"
            id="category"
          >
            <option value={"null"}>All</option>
            <option value="65b0e15ce9ced837aa67cde0">psychologist</option>
            <option value="65b0e16be9ced837aa67cde4">physiotherapist</option>
            <option value="65b0e179e9ced837aa67cde8">neurologist</option>
          </select>
        </div>
        <button onClick={handleReset} className="clear-filter">
          Clear Filter
        </button>
      </div>
      {isLoading ? (
        <Loader color="orange" size="60px" />
      ) : (
        <div className="practionsers">
          {data?.data?.map((item) => {
            return (
              <PractionerCard
                image={item.userId.userImages[0].filename}
                name={item.userId.name}
                description={item.description}
                id={item._id}
                rating={Math.round(item.avgRating)}
              />
            );
          })}
        </div>
      )}
      {!isLoading ? (
        <Pagination
          hangleActivePage={hangleActivePage}
          currentPage={data?.page}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Practitioner;
