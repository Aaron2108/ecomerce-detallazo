import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalEdit = ({ showModal, handleClose, product, handleSave }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (product) {
      setValue("nombre", product.nombre);
      setValue("cantidad", product.cantidad);
      setValue("precio", product.precio);
      setValue("costo", product.costo);
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
                      type="number"
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
                      type="number" 
                      className="form-control"
                      id="costo"
                      {...register("costo", { 
                        required: "El costo es obligatorio",
                      })}
                    />
                    {errors.costo && <p className="text-danger">{errors.costo.message}</p>}
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
