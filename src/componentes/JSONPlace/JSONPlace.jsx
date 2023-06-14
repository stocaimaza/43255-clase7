import { useState, useEffect } from "react"

const JSONPlace = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {


        /*fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log("Ayudame!", error))
        */
        //Si quiero trabajar con async y await en lugar de then y catch puedo hacer lo siguiente: 

        //try y catch me permite manejar un error.  Si algo adentro del try falla el código continua en el catch. 
        try {
            const pedirUsuarios = async () => {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await respuesta.json()
                setUsuarios(data);
            }

            pedirUsuarios();

        } catch (error) {

            
            console.log(error);
        }



    }, [])
    return (
        <div>
            <h2>Usuarios: JSONPlaceHolder</h2>
            <ul>
                {
                    usuarios.map(usuario => {
                        return (
                            <li key={usuario.id}> {usuario.name} - {usuario.email}  </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default JSONPlace