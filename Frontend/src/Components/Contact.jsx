import React from 'react'
import { useState } from 'react'
import './Contact.css'

function Contact() {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        msg:""

    })

    function handleChange(e){
        
        setFormData({...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSumbit(e){
        e.preventDefault()
    }

     const URL = "http://localhost:5000/portfolio/contact"

     async function addContact(){
        try{
            let response = await fetch(URL,{
                method:"POST",
                headers:{"content-type":'application/json'},
                body:JSON.stringify({
                    name:formData.name,
                    email:formData.email,
                    msg:formData.msg
                })
            })

            setFormData({
                name:"",
                email:"",
                msg:""
            }
            )

            if(!response.ok){
                alert('Could not send')
            }

            else{
                const data = await response.json();

                alert(data.msg)
            }

            

            
        }
        catch(error){
            alert("Server error")
        }
     }






  return (
   <>
   
   <div className="contact-container">

    <div>
        <h5 className="contact">
            <span></span>
            GET IN TOUCH
        </h5>

        <h1 className="together">
            Let's Work <span>Together</span>
        </h1>

        <p className="paras">
            I'm always open to discussing new projects,
            opportunities and ideas. Feel free to reach out!
        </p>

        <button className="linkedin">
            Connect on LinkedIn
        </button>
    </div>

    <div className="mydetails">
        <p className="mail">Mail: guptasomil166@gmail.com</p>
        <p className="phone">Phone: 9354379276</p>
        <p className="location">Location: India</p>
    </div>

    <form action='/sumbit' method='post' onSubmit={handleSumbit}>
        <input type="text" placeholder="Your Name" className="name" name="name" value={formData.name} onChange={handleChange} />

        <input type="email" placeholder="Your Email" className="email" name="email" value={formData.email} onChange={handleChange} />

        <input type="text" placeholder="Your Message" className="message" name="msg" value={formData.msg} onChange={handleChange} />

        <button className="msg" onClick={addContact}>Send Message</button>
    </form>

</div>
   
   </>
  )
}

export default Contact
