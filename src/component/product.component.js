import ProductDetail from "../modals/product";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    stok: "48",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    stok: "35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    stok: "89",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$89",
    stok: "35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    stok: "48",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    stok: "35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    stok: "89",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    stok: "35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const ProductComponent = () => {
  const [isProduct, setIsProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setIsProduct(true);
  };

  const openCart = () => {
    setIsProduct(true);
  };

  const toggleCart = () => {
    setIsProduct(!isProduct);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div>
              {isProduct && <ProductDetail data={selectedProduct} isOpen={openCart} onCartClose={toggleCart} />}
              <a key={product.id} href={product.href} onClick={() => openProduct(product)} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.stok}</p>
              </a>
              <Button className="mr-2">Add To Cart</Button>
              <Button>Update</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
