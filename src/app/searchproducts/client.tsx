"use client";

import React, { useState, useEffect } from "react";

import ProductCard from "@/src/components/Products/ProductCard";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const ProductListing = ({ products }) => {
  const firstProduct = products.props.products;
  // TODO : Implement search functionality vol:1
  //   const handleChange = (event) => {
  //     const searchQuery = event.target.value.toLowerCase();
  //     setQuery(searchQuery);
  //     const filteredData = PRODUCTS.filter(
  //       (product) =>
  //         product.name.toLowerCase().includes(searchQuery) ||
  //         product.description.toLowerCase().includes(searchQuery) ||
  //         product.category.toLowerCase().includes(searchQuery)
  //     );
  //     setFilteredProducts(filteredData);
  //   };
  // TODO : Implement search functionality with debaunce vol:2
  //   useEffect(() => {
  //     const handleDebaunceSearch = () => {
  //       const filteredData = PRODUCTS.filter(
  //         (product) =>
  //           product.name.toLowerCase().includes(query) ||
  //           product.description.toLowerCase().includes(query) ||
  //           product.category.toLowerCase().includes(query)
  //       );
  //       setFilteredProducts(filteredData);
  //     };

  //     const timer = setTimeout(handleDebaunceSearch, 500);
  //     return () => clearTimeout(timer);
  //   }, [query]);

  // TODO : Implement search functionality with debaunce and search params vol:3

  const searchParams = useSearchParams() as any;
  const queryParam = searchParams.get("query") || "";
  const [query, setQuery] = useState(queryParam);
  const [filteredProducts, setFilteredProducts] = useState(firstProduct);
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
      replace(`${pathname}?${params.toString()}`);
    } else if (query === "") {
      params.delete("query");
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("query");
    }
    const timerId = setTimeout(() => {
      const filteredData = firstProduct.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(filteredData);
    }, 500);
    return () => clearTimeout(timerId);
  }, [pathname, query, replace, searchParams]);

  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <input
          type="text"
          className="border-2 border-gray-300 p-2"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <div>
        <h1 className="text-xl text-center w-full">Product List</h1>
        <div className="flex flex-wrap">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h1>No products found!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
