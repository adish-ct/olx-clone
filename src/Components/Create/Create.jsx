import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const Create = () => {
  // use context for store data and user
  const { storage, firestore } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const date = new Date().toISOString()
  const createdAtDate = new Date(date);
  // Format the date to display only the date part
  const formattedDate = createdAtDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [name, setName] = useState("");
  const getName = (event) => setName(event.target.value);

  const [category, setCategory] = useState("");
  const getCategory = (event) => setCategory(event.target.value);

  const [price, setprice] = useState("");
  const getPrice = (event) => setprice(event.target.value);

  // fetching images from its input field.
  const [image, setImage] = useState(null);
  const getImage = (event) => setImage(event.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `/image/${image.name}`);

    // Upload the file
    await uploadBytes(storageRef, image);

    // Get the download URL
    const url = await getDownloadURL(storageRef);
    console.log(url);
    // product adding to firestore
    const docRef = await addDoc(collection(firestore, 'products'), {
      name,
      category,
      price,
      url,
      userId: user.uid,
      createdAt: formattedDate
    })
    console.log("document added :", docRef.id);
    navigate('/')
  };

  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="Name"
              onChange={getName}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={getCategory}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="price"
              name="Price"
              onChange={getPrice}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : "Loading"}
          ></img>
          <form>
            <br />
            <input type="file" onChange={getImage} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </>
  );
};

export default Create;
