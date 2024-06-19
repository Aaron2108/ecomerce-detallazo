import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate  } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleLogin = (data) =>{
        if(data.email === "oliver123@gmail.com" && data.contraseña === "123"){
        localStorage.setItem("userEmail", data.email);
        navigate("/Administrador")
        console.log("logueado");
        }else{
            console.log("Datos incorrectos");
        }
    }

    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
            navigate("/Administrador");
        }
    }, [navigate]);
  return (
    <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
            <div className="card-body">
                <h2 className="card-title text-center">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-group">
                        <label>Correo Electronico</label>
                        <input type="email" className="form-control" placeholder="Gmail"   {...register("email")}/>
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Contraseña"  {...register("contraseña")} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block custom-btn">Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  </div>
  )
}
export default Login