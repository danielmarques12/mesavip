/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { api } from '../../../services/api';
import {
  Container,
  Average,
  NumberOfComments,
  Rating,
  Comment,
  Separator,
} from './styles';
import Stars from './Stars';

export default function Ratings(props) {
  const [ratings, setRatings] = useState([]);
  const { average, totalratings, restaurant_id } = props;

  useEffect(() => {
    api.get(`ratings/list/${restaurant_id}`).then((item) => {
      setRatings(item.data);
    });
  }, []);

  return (
    <Container className="ratings">
      <Average>
        <span>CUSTOMERS RATINGS</span>
        <h3>{average}</h3>
        <Stars numberOfStars={average} starSize={25} />
        <p> {totalratings} ratings</p>
      </Average>

      <div>
        <NumberOfComments>
          <FaRegCommentAlt size={16} />
          <span> {totalratings} Comments </span>
        </NumberOfComments>

        {ratings.map((rating) => (
          <Rating key={rating.id}>
            <Separator />

            <div className="nome-data">
              <span>{rating.client}</span>
              <span>{rating.date}</span>
            </div>

            <Stars numberOfStars={rating.rating} starSize={16} />

            <Comment>
              <p>{rating.comment}</p>
            </Comment>
          </Rating>
        ))}
      </div>
    </Container>
  );
}
