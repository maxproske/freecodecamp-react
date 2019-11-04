import React from 'react'
import ContactCard from './ContactCard'

function ContactList() {
    return (
        <div className="contact-list">
            <ContactCard contact={{name: "Mr. Whiskers", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "whiskers@meow.com"}} />
        </div>
    )
}

export default ContactList