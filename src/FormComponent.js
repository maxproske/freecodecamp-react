import React from 'react'

function FormComponent(props) {
    const nameText = (props.firstName || props.lastName) && <h1>Hi, {props.firstName} {props.lastName}</h1>
    const genderText = (props.gender) && <p>You are {props.gender}</p>
    const destinationText = (props.destination) && <p>You want to travel to {props.destination}</p>

    return (
        <main>
            <form>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
                
                <br />
            
                <input 
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
                
                <br />

                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.gender === 'male'}
                        onChange={props.handleChange}
                    /> Male
                </label>

                <br />

                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.gender === 'female'}
                        onChange={props.handleChange}
                    /> Female
                </label>

                <br />

                <select
                    name="destination"
                    onChange={props.handleChange}
                >
                    <option value="">-- Choose Destination --</option>
                    <option value="vancouver">Vancouver</option>
                    <option value="amsterdam">Amsterdam</option>
                    <option value="tokyo">Tokyo</option>
                </select>

                <br />

                <input 
                    type="checkbox"
                    name="dietaryRestrictions"
                    value="isLactose"
                    onChange={props.handleChange}
                    defaultChecked={props.dietaryRestrictions.isLactose}
                /> Lactose intolerant?

                <br />
                
                <input 
                    type="checkbox"
                    name="dietaryRestrictions"
                    value="isVegan"
                    onChange={props.handleChange}
                    defaultChecked={props.dietaryRestrictions.isVegan}
                /> Vegan?

                <br />

                <button>Submit</button>
            </form>

            <hr />

            <section>
                {nameText}
                {genderText}
                {destinationText}
            </section>
        </main>
    )
}

export default FormComponent