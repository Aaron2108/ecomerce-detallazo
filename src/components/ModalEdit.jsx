import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ModalEdit = ({ showModal, handleClose, product, handleSave }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [proveedores, setProveedores] = useState()
  const [categoria, setCategoria] = useState()

  useEffect(() => {
  const urlProveedor = "https://django-ecomerce-backend.onrender.com/api/proveedores/"    
  axios.get(urlProveedor)
  .then(res => setProveedores(res.data))
  .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const urlCategoria = "https://django-ecomerce-backend.onrender.com/api/categorias/"    
    axios.get(urlCategoria)
    .then(res => setCategoria(res.data))
    .catch(err => console.log(err))
    }, [])

  useEffect(() => {
    if (product) {
      setValue("nombre", product.nombre);
      setValue("cantidad", product.cantidad);
      setValue("precio", product.precio);
      setValue("costo", product.costo);
      setValue("imagen_url", product.imagen_url || "");  
      setValue("proveedor", product.proveedor);          
      setValue("categoria", product.categoria);         
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    const editedData = {
      ...data,
      precio: parseFloat(data.precio).toFixed(2),
      costo: parseFloat(data.costo).toFixed(2),
    };
    handleSave(editedData); 
  };

  return (
    <>
      {showModal && (
        <div className="modal-container">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Producto</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      {...register("nombre", { required: "El nombre es obligatorio" })}
                    />
                    {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cantidad" className="form-label">Cantidad:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      {...register("cantidad", { 
                        required: "La cantidad es obligatoria",
                        valueAsNumber: true
                      })}
                    />
                    {errors.cantidad && <p className="text-danger">{errors.cantidad.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="precio"
                      {...register("precio", { 
                        required: "El precio es obligatorio",
                      })}
                    />
                    {errors.precio && <p className="text-danger">{errors.precio.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="costo" className="form-label">Costo:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="costo"
                      {...register("costo", { 
                        required: "El costo es obligatorio",
                      })}
                    />
                    {errors.costo && <p className="text-danger">{errors.costo.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imagen_url" className="form-label">Imagen URL:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imagen_url"
                      {...register("imagen_url")}
                    />
                    {errors.imagen_url && <p className="text-danger">{errors.imagen_url.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="proveedor" className="form-label">Proveedor:</label>
                    <select
                      className="form-control"
                      id="proveedor"
                      {...register("proveedor", { required: "El proveedor es obligatorio" })}
                    >
                      <option value="">Selecciona un proveedor</option>
                      {proveedores?.map(proveedor => (
                        <option key={proveedor.id} value={proveedor.id}>
                          {proveedor.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.proveedor && <p className="text-danger">{errors.proveedor.message}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">Categoría:</label>
                    <select
                      className="form-control"
                      id="categoria"
                      {...register("categoria", { required: "La categoría es obligatoria" })}
                    >
                      <option value="">Selecciona un proveedor</option>
                      {categoria?.map(categorias => (
                        <option key={categorias.id} value={categorias.id}>
                          {categorias.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.categoria && <p className="text-danger">{errors.categoria.message}</p>}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEdit;
