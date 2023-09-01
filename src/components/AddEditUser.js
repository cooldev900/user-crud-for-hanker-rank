import React, { useState } from 'react'

const REGEX_PATTERN = {
    regexMobileNumber: /^[1-9]{1}[0-9]{9}$/,
}

function AddEditUser({user, setUser, saveUser}) {

    const [error, setError] = useState(false)

    const submitForm = event => {
        event.preventDefault()
        if (Object.values(user).some(value => value === '') || !REGEX_PATTERN.regexMobileNumber.test(user.phone)) {
            setError(true)       
            return;
        }
        saveUser(true)
    }

    const cancel = () => {
        saveUser(false)
        setError(false)
    }

    const handleChange = (event) => {
        // Update the form data as the user types in the input fields
        setUser({ ...user, [event.target.name]: event.target.value });
      };

    return (
        <section>
            <div className='pa-30'>
                <form onSubmit={submitForm} noValidate='noValidate'>
                    <div className='layout-column mb-15'>
                        <label htmlFor='firstName' className='mb-3'>First Name</label>
                        <input type='text' placeholder='Enter first name'
                            name='firstName'
                            required data-testid='firstNameInput' 
                            value={user.firstName}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className='layout-column mb-15'>
                        <label htmlFor='lastName' className='mb-3'>Last Name</label>
                        <input type='text' placeholder='Enter last name'
                            name='lastName'
                            value={user.lastName}
                            required data-testid='lastNameInput' onChange={handleChange}/>
                                
                    </div>
                    <div className='layout-column mb-15'>
                        <label htmlFor='phone' className='mb-3'>Phone Number</label>
                        <input type='number' placeholder='Enter phone number'
                            name='phone'
                            value={user.phone}
                            required data-testid='phoneInput' onChange={handleChange}    />
                    </div>
                    {error && <div className='alert error mb-30' data-testid='validationAlert'>
                    Error: All fields are mandatory. And phone number to be of 10 digits.
                    </div>}
                    <div className='layout-row justify-content-end'>
                        <button type='button' className='' data-testid='cancelEditUserButton' onClick={() => cancel()}>
                            Cancel
                        </button>
                        <button type='submit' className='mx-0' data-testid='addEditButton' >
                            Add/Edit User
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddEditUser;