import axios from "axios";
import React, { useState } from "react";
import "./addproduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    category: "",
    kode: "",
    desc: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products/", {
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
        kode: product.kode,
        desc: product.desc,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Tambah Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h6>Nama Product</h6>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <h6>Harga</h6>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <h6>Stock</h6>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <h6>Kategori</h6>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <h6>Kode</h6>
            <input
              type="text"
              name="kode"
              value={product.kode}
              onChange={handleChange}
            />
          </div>
          <div>
            <h6>Deskripsi</h6>
            <input
              type="text"
              name="desc"
              value={product.desc}
              onChange={handleChange}
            />
          </div>
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
