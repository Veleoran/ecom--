
import React from 'react';
import Typography from '../common/Typography';

const ProductCard = ({ product }) => {
    const priceFormatted = `${product.price.toFixed(2)} €`;

    return (
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden">
           
            <img src={product.mainImageURL} alt={product.name} className="w-full h-auto object-cover" />
            <div className="p-4">
                <Typography tag="h3" variant="primary" customClasses="font-bold text-lg mb-2">
                    {product.name}
                </Typography>
                <Typography tag="p" variant="secondary" customClasses="mb-4">
                    {product.description}
                </Typography>
                <Typography tag="p" variant="secondary" customClasses="text-red-500 font-bold">
                    {priceFormatted}
                </Typography>
            </div>
        </div>
    );
};

export default ProductCard;
