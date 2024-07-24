import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import api from "../api";

const ProductoForm = ({setCreateValidate}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [proveedores, setProveedores] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const submit = (data) => {
        console.log(data);
        axios.post('https://django-ecomerce-backend.onrender.com/api/productos/', data)
            .then(response => setCreateValidate(true))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        api.get('/proveedores/')
            .then(response => setProveedores(response.data))
            .catch(error => console.error('Error fetching proveedores:', error));

        api.get('/categorias/')
            .then(response => setCategorias(response.data))
            .catch(error => console.error('Error fetching categorias:', error));
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("nombre", { required: "Este campo es requerido" })}
                            />
                        {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cantidad" className="form-label">Cantidad:</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("cantidad", { required: "Este campo es requerido", valueAsNumber: true })}
                            />
                        {errors.cantidad && <p className="text-danger">{errors.cantidad.message}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="precio" className="form-label">Precio:</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            {...register("precio", { required: "Este campo es requerido", valueAsNumber: true })}
                            />
                        {errors.precio && <p className="text-danger">{errors.precio.message}</p>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="costo" className="form-label">Costo:</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            {...register("costo", { required: "Este campo es requerido", valueAsNumber: true })}
                            />
                        {errors.costo && <p className="text-danger">{errors.costo.message}</p>}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="proveedor" className="form-label">Proveedor:</label>
                    <select
                        className="form-control"
                        {...register("proveedor", { required: "Este campo es requerido" })}
                        >
                        <option value="">Seleccione un proveedor</option>
                        {proveedores.map(proveedor => (
                            <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
                        ))}
                    </select>
                    {errors.proveedor && <p className="text-danger">{errors.proveedor.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen_url" className="form-label">URL de la Imagen:</label>
                    <input
                        type="url"
                        className="form-control"
                        {...register("imagen_url")}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">Categoría:</label>
                    <select
                        className="form-control"
                        {...register("categoria")}
                        >
                        <option value="">Seleccione una categoría</option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="boton_categoria">Crear Producto</button>
            </form>
        </div>
    );
}

export default ProductoForm;
