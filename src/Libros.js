const Libros = (props) => { 
    return (
    <>
    <hr />
    <div>Nombre: <span>{props.nombre}</span></div>
    <div>Precio: <span>{props.precio}</span></div>
    <div>Autor: <span>{props.autor}</span></div>
    <hr />
    </>
    );
   }

   export default Libros;