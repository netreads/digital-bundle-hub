
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  discount?: string;
  bestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  discount,
  bestSeller,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md product-card-shadow hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {bestSeller && (
          <Badge className="absolute top-2 left-2 bg-netreads-primary">
            Best Seller
          </Badge>
        )}
        {discount && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            {discount}
          </Badge>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-netreads-primary font-bold text-xl">{price}</span>
          <Button className="bg-netreads-primary hover:bg-netreads-secondary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
