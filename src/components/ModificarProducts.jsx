import React, { useEffect, useState } from "react";
import api from "../api";
import axios from "axios";
import ModalEdit from "./ModalEdit";

const ModificarProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [idEdit, setIdEdit] = useState(0)

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/productos/";
    api.get(url)
      .then(res => setProducts(res.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    const url = `http://127.0.0.1:8000/api/productos/${id}`;
    axios.delete(url)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
    setIdEdit(product.id)
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const handleSave = (editedProduct) => {
    const url = `http://127.0.0.1:8000/api/productos/${idEdit}/`;
    console.log(editedProduct);
    axios.put(url, editedProduct)
      .then(res => {
        console.log("Producto actualizado:", res.data);
        setProducts(products.map(product => 
          product.id === editedProduct.id ? res.data : product
        ));
      })
      .catch(error => {
        console.error("Error al actualizar el producto:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        }
      });
    setShowModal(false);
    setCurrentProduct(null);
  };
  
  

  return (
    <div className="containerModificar">
      <h2>Lista de Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Costo</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.cantidad}</td>
              <td>{product.precio}</td>
              <td>{product.costo}</td>
              <td>
                <button className="btn btn-sm btn-info" onClick={() => handleEdit(product)}>Editar</button>
                <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <ModalEdit
          showModal={showModal}
          handleClose={handleClose}
          product={currentProduct}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default ModificarProducts;
