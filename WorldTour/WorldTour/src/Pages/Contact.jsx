import "./Contact.css"
export const Contact = () => {

    const handleSubmit = (formData) =>{
       const data = Object.fromEntries(formData.entries());
       console.log(data)
    }
    return<div className="contact-form-container">
    <h2>Contact Us</h2>
    <form action={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Johnny Bravo"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="xyz123@google.com"/>
        </div>
        <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
    </form>
</div>
}