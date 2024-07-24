import { useState } from "react";
import CategoriaForm from "../components/CategoriaForm";
import ProveedoresForm from "../components/ProveedoresForm";
import ProductoForm from "../components/ProductoForm";
import { useNavigate } from "react-router-dom";
import ModificarProducts from "../components/ModificarProducts";

const Administrador = () => {
  const [formularios, setFormularios] = useState(1);
  const [createValidate, setCreateValidate] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); 
    navigate("/Login"); 
  };

  const closeValidate = ()  =>{
    setCreateValidate(false);
  }

  return (  
    <>

       <section className="btn_logout">
       <button className="Btn" onClick={handleLogout}>
        
        <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        
        <div className="text">Logout</div>
        </button>
       </section>
    <section className="section_administrador">
      <article className="article_listado">
        <ul className="ul_administrador">
            <li><a href="#" onClick={() => setFormularios(4)}>Modificar</a></li>
            <li><a href="#" onClick={() => setFormularios(1)}>Categorias</a></li>
            <li><a href="#" onClick={() => setFormularios(2)}>Proveedores</a></li>
            <li><a href="#" onClick={() => setFormularios(3)}>Productos</a></li>
        </ul>
      </article>

      <article className="article_formularios">
        {formularios === 1 ? <CategoriaForm setCreateValidate={setCreateValidate}/>: null}
        {formularios === 2 ? <ProveedoresForm setCreateValidate={setCreateValidate}/> : null}
        {formularios === 3 ? <ProductoForm setCreateValidate={setCreateValidate} /> : null}
        {formularios === 4 ? <ModificarProducts  setCreateValidate={setCreateValidate}/> : null}
      </article>
    </section>
    {
                createValidate ? <div className="card"> 
                <button className="dismiss" type="button" onClick={closeValidate}>×</button> 
                <div className="header"> 
                    <div className="image">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div> 
                        <div className="content">
                        <span className="title">Creado Exitosamente</span> 
                        </div> 
                        <div className="actions">
                            </div> 
                            </div> 
                            </div>
                            :
                            <></>
            }
    </>
  );
};

export default Administrador;
