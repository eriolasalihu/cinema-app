import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  const [byIngredients, setByIngredients] = useState();
  const [mainIngredient, setMainIngredient] = useState();
  
  const getSearchData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
      .then((data) => {
        // setTest(data.data.categories)
        setSearch(data.data.meals);
        // console.log("data", data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getbyIngredientsData = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`
      )
      .then((data) => {
        // setTest(data.data.categories)
        setByIngredients(data?.data.meals);
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleName = (event) => {
    setData(event.target.value);
  };

  const handlemainIngredient = (event) => {
    setMainIngredient(event.target.value);
  };
  return (
    <>
      <div className="row rowText ">
        <div className="text col-md-6 text-left top-0">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="search form-control mt-2 mb-2"
              onChange={handleName}
            />
            <button
              className="button btn btn-success"
              onClick={() => {
                getSearchData();
              }}
            >
              Search
            </button>
            <div className="row">
              {search?.map((el, key) => {
                return (
                  <>
                    <div class="card col-md-3 pt-3 ">
                      <img
                        class="card-img-top"
                        src={el?.strMealThumb}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{el?.strCategory}</h5>
                        <p class="card-text">{el?.strIngredient1}</p>
                        <Link
                          to={`/single/${el?.idMeal}`}
                          class="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text col-md-6 top-0 ">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="search form-control mt-2 mb-2"
              onChange={handlemainIngredient}
            />
            <button
              className="button btn btn-success"
              onClick={() => {
                getbyIngredientsData();
              }}
            >
              Search
            </button>
            <div className="row">
              {byIngredients?.map((em, key) => {
                return (
                  <>
                    <div class="card col-md-3 pt-3 ">
                      <img
                        class="card-img-top"
                        src={em?.strMealThumb}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{em?.strMeal.slice(0, 11)}</h5>
                        {/* <p class="card-text">{em?.strIngredient1}</p> */}
                        <Link
                          to={`/single/${em?.idMeal}`}
                          class="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
