"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, img }) => {
  return (
    <article className="group flex flex-col items-center bg-brand-cream/60 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-brand-wine/20 border border-brand-wine/5 hover:-translate-y-2">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-4">
        <h4 className="text-2xl font-serif text-brand-wine text-center leading-tight">
          {name}
        </h4>
      </div>
    </article>
  );
};

export default ProductCard;
