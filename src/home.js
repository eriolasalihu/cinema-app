import React, { useEffect, useState } from "react";
import axios from "axios";
import Test from "./img/logo10.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [test, setTest] = useState([]);
  const [Search, setSearch] = useState("");
  const [categorit, setCategoit] = useState();
  const [random, setRandom] = useState();
  const [hide, setHide] = useState(true);

  
  const getLanguageData = () => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php/")
    .then((data) => {
      setCategoit(data.data.categories);
      console.log("test", data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRandomData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((data) => {
        setRandom(data.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function Searchfunc (event)  {
    event.preventDefault();
    setSearch(event.target.value)
  }
  useEffect(() => {
    getLanguageData();

  }, []);

console.log("random",random)

  return (
    <>
      <div className="containerPage">
        <div className="bgimg">
          <img src={Test} alt="" />
        </div>
        <div className="buttons">
             {categorit?.map((blog) => (
                <div className="button">
                  <button onClick={(e) => {setTest(blog) ; setHide(false)}}>
                    {blog.strCategory}
                  </button>
                </div>
              ))
            }
            <button className="button btn btn-secondary" onClick={(e)=> {setHide(true); setTest([])}}>All</button>

          <input
            type="text" placeholder="Search..." className="search form-control mt-2 mb-2"
            onChange={(event) => {
              Searchfunc(event)
            }}
          />
          
        </div>
        <div>
          <div className="blogs">
            {categorit?.slice(0,12)
              ?.filter((val) => {
                if (Search === "") {
                  return val.strCategoryThumb;
                } else if (
                  val.strCategoryThumb
                    .toLowerCase()
                    .includes(Search.toLocaleLowerCase())
                ) {
                  return val.strCategoryThumb;
                }
              })
              .map((e, key) => {
                return (
                  <>
                  {hide === true ?<div className="row">
                      <div className="col-sm-4">
                        <img src={e.strCategoryThumb} alt="" />
                      </div>
                    </div>
                    :
                    "" }
                    
                  </>
                );
              })}
              {test.strCategoryDescription !== undefined ?
              <div className="blog_info" key={test.idCategory}>
              <div className="blog_img">
                <img src={test.strCategoryThumb} alt="" />
              </div>
              <div className="title_blog">
                <h2>{test.strCategory}</h2>
              </div>
              <div className="text_blog no-focusborder">
                <p>
                  Written by{" "}
                  {test?.strCategoryDescription?.slice(0, 150) + "..."}
                </p>
              </div>
              <div className="button_blog">
                <a href="">asd</a>
              </div>
            </div> 
             :
             ""
              }       
          </div>
        </div>
      </div>
      <div className="text-center pt-3 pb-3 bg-secondary">

      <button className="button btn btn-success" onClick={()=>{getRandomData()}}>Surprise Me</button>
      </div>

      {random !== undefined ? 
      <div class="card col-md-4  mx-auto text-center pt-3" >
        <img class="card-img-top" src={random?.strMealThumb} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{random?.strMeal}</h5>
          <p class="card-text">{random?.strInstructions?.slice(0,100)}</p>
          <Link to={`/single/${random?.idMeal}`} class="btn btn-primary">Read More</Link>
          {/* <a href="#" class="btn btn-primary">Read More</a> */}
        </div>
      </div>
      : ""}
    
    </>
  );
};

export default Home;
