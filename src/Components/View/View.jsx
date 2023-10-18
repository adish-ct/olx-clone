import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection, getDocs, where, query } from 'firebase/firestore';

function View() {
  const [userDetails, setUserDetails] = useState(null)
  const { postDetails } = useContext(PostContext)
  const { firestore } = useContext(FirebaseContext)

  useEffect(() => {
    const { userId } = postDetails.data
    const fetchUserData = async () => {
      const q = query(collection(firestore, 'users'), where('userId', '==', userId))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUserDetails({
          id: doc.id,
          data: doc.data(),
        })
      })
    }
    fetchUserData();

  }, [firestore, postDetails])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.data.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.data.price}  </p>
          <span>  </span>
          <p> {postDetails.data.name} </p>
          <p> {postDetails.data.category} </p>
          <span> {postDetails.data.createdAt} </span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p> {userDetails ? userDetails.data.username : ''} </p>
          <p> {userDetails ? userDetails.data.phone : ''} </p>
        </div>
      </div>
    </div>
  );
}
export default View;
