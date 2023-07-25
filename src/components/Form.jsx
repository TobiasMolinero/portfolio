/* eslint-disable react/no-unescaped-entities */
import '../css/Form.css'
import { useRef } from 'react'

const Form = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const topicRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="form">
            <h1>Ready to start? Tell me about your web page, let's make it happen.</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required ref={nameRef}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required ref={emailRef}/>
                </div>
                <div>
                    <label htmlFor="topic">Topic</label>
                    <input type="text" id="topic" required ref={topicRef}/>
                </div>
                <div>
                    <label htmlFor="description">Tell me the details</label>
                    <textarea id="description" cols="30" rows="10" required></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Form