import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Food = () => {
 const [single, setSingle] = useState();
 const { id } = useParams()
   console.log("id", id);

const getSingleData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        setSingle(data.data?.meals[0]);
        console.log("data", single);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <>
      <div className="row rowText align-items-center ">
      <div class="card col-md-5  mx-auto text-center border border-light pt-5" >
        <img class="card-img-top" src={single?.strMealThumb} alt="Card image cap"/>
        </div>
      <div class="card col-md-4  mx-auto text-center pt-3 border border-warning" >
        <div class="card-body">
          <h3 class="card-title">{single?.strMeal}</h3>
          <p class="card-text">{single?.strTags}</p>
          <p class="card-text">{single?.strIngredient1}</p>
          <p class="card-text">{single?.strIngredient2}</p>
          <p class="card-text">{single?.strIngredient3}</p>
          <p class="card-text">{single?.strIngredient4}</p>
          <p class="card-text">{single?.strIngredient5}</p>
          <p class="card-text">{single?.strIngredient6}</p>
          <p class="card-text">{single?.strIngredient7}</p>
          <p class="card-text">{single?.strIngredient8}</p>
          <p class="card-text">{single?.strMeasure1}, {single?.strMeasure2}, {single?.strMeasure3}, {single?.strMeasure4}, {single?.strMeasure5}</p>
          <p class="card-text">{single?.strInstructions?.slice(0, 150)}</p>

          
        </div>
      </div>
    </div>
    </>
  );
};

export default Food;
