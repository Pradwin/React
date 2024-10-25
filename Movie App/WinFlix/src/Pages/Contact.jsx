import { Form } from "react-router-dom"
import "./Contact.css"

// eslint-disable-next-line react-refresh/only-export-components
export const formSubmit = async( {request} ) => {
    try{
    const response = await request.formData();
    const data = Object.fromEntries(response)
    console.log(data)
    return null
    }
    catch(error){
        console.log(error)
    }

}

export const Contact = () => {
    return (
        <div className="form-container">
    <h2>Contact Us</h2>
    <Form action="/contact" method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
    </Form>
</div>
    )
}