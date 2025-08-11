import React from "react";
import Card from "./Card";

const ImageGallery = ({ images }) => (
  <Card>
    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Gallery ${idx + 1}`}
          className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      ))}
    </div>
  </Card>
);

export default ImageGallery;
