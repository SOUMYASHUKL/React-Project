// src/components/CustomerReviews.js

import React, { useState } from 'react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      rating: 5,
      comment: 'Amazing work! I love the photos.',
      image: "", // Update with actual image path
      
    },
    {
      id: 2,
      name: 'Bob Smith',
      rating: 4,
      comment: 'Great experience and beautiful results.',
      image: '', // Update with actual image path
    },
    {
      id: 3,
      name: 'Charlie Brown',
      rating: 3,
      comment: 'Good, but could use some improvements.',
      image: '', // Update with actual image path
    },
  ]);

  return (
    <section className="container mx-auto py-16 flex flex-col items-center"  style={{ backgroundImage: "url('/src/img/michael-olsen--djS1aPrSr4-unsplash.jpg')" 
    , backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mb-4" />
            <h2 className="font-semibold text-white">{review.name}</h2>
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
              {[...Array(5 - review.rating)].map((_, index) => (
                <span key={index} className="text-gray-300">★</span>
              ))}
            </div>
            <p className="text-center text-white">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
