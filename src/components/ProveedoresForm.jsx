import axios from 'axios';
import { useForm } from 'react-hook-form';

const ProveedoresForm = () => {
    const { register, handleSubmit } = useForm();
    const submit = data =>{
        console.log(data);
        const url = "http://127.0.0.1:8000/api/proveedores/"
        axios.post(url, data)
        .then(res => console.log(res))
          .catch(error => console.log(error));
      }
  return (
    
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input
            type="text"
            className="form-control"
            required
            {...register("nombre")}
            />
            </div>
        <div className="mb-3">
            <label htmlFor="contacto" className="form-label">Contacto:</label>
            <input
            type="text"
            className="form-control"
            required
            {...register("contacto")}
            />
        </div>
        <button type="submit" className="boton_categoria">Crear Proveedor</button>
        </form>
    </div>
  )
}
export default ProveedoresForm