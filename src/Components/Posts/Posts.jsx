import React, { useContext, useEffect, useState } from "react";

import Heart from "../../assets/Heart";
import "./Post.css";
import { FirebaseContext } from "../../store/Context";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";

function Posts() {
  const { firestore } = useContext(FirebaseContext);
  const { postDetails, setPostDetails } = useContext(PostContext)
  const navigate = useNavigate()

  // there is a possible to multiple data for a user
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // get documents products from firestore
      const querySnapshot = await getDocs(collection(firestore, "products"));
      const productsArray = [];
      querySnapshot.forEach((doc) => {
        productsArray.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setProducts(productsArray);
    };
    fetchData();
  }, [firestore]);

  const clickViewPost = (product) => {
    setPostDetails(product);
    navigate('/view-product');
  };
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {products.map((product) => (
            <div className="card" key={product.id} onClick={() => clickViewPost(product)}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img width="300px"
                  height="200px"
                  src={product.data.url} alt="Loading" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.data.price}</p>
                <span className="kilometer"> {product.data.category} </span>
                <p className="name"> {product.name} </p>
              </div>
              <div className="date">
                <span> {product.data.createdAt} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
