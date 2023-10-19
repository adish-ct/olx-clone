import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { firestore } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if postDetails is defined before trying to destructure its properties
    if (postDetails && postDetails.data && postDetails.data.userId) {
      const { userId } = postDetails.data;

      const fetchUserData = async () => {
        const q = query(collection(firestore, 'users'), where('userId', '==', userId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setUserDetails({
            id: doc.id,
            data: doc.data(),
          });
        });
      };

      fetchUserData();
    }
  }, [firestore, postDetails]);

  // Check if postDetails and postDetails.data are defined before accessing the url property
  if (postDetails && postDetails.data && postDetails.data.url) {
    return (
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={postDetails.data.url} alt="" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.data.price}</p>
            <span> </span>
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
  } else {
    navigate('/');
  }
}

export default View;
