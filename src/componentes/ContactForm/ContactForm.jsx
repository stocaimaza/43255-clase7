import { useState } from "react"
import emailjs from "emailjs-com"
import './ContactForm.css'

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send(
            "service_4uxbj0l",
            "template_gt20lz3",
            templateParams,
            "QMqmfHymrwfi0YFB0"
        )
        .then((respuesta) => {
            console.log(respuesta.text);
            alert("Mensaje enviado correctamente");
        })
        .catch((error)=> {
            console.log(error);
            alert("Error al enviar mensaje");
        })

        setNombre("");
        setEmail("");
        setMensaje("");
    }


  return (
    <form onSubmit={enviarMensaje} className="contact-form">
        <label htmlFor="">Nombre: </label>
        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor=""> Mensaje </label>
        <textarea value={mensaje} onChange={(e)=> setMensaje(e.target.value)}/>

        <button type="submit"> Enviar Mensaje </button>

    </form>
  )
}

export default ContactForm