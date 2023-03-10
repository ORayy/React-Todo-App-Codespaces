import { useState } from "react";

import '../styles/form.css'

export default function Form() {

    // setting initial state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageSend = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + name);
        event.preventDefault();
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleName} />
            </label>
            <br />
            <label>
                Email:
                <input type="text" value={email} onChange={handleEmail} />
            </label>
            <br />
            <label>
                Message:
                <textarea value={message} onChange={handleMessageSend} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}
