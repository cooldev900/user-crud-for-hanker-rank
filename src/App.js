import React from 'react';
import './App.css';
import 'h8k-components';
import UserList from './components/UserList';
import AddEditUser from './components/AddEditUser';

const title = 'User Management'

const App = () => {
    const initialState = { firstName: '', lastName: '', phone: '' }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className='layout-row justify-content-center mt-100'>
                <div className='w-60 mr-75'>
                    <UserList />
                </div>
                <div className='layout-column w-40'>
                    <AddEditUser />
                </div>
            </div>
        </div>
    );
}

export default App;
