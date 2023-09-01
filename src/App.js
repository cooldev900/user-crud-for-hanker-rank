import React from 'react';
import './App.css';
import 'h8k-components';
import UserList from './components/UserList';
import AddEditUser from './components/AddEditUser';

const title = 'User Management'

const App = () => {
    const initialState = { firstName: '', lastName: '', phone: '' }
    const [users, setUsers] = React.useState([])
    const [user, setUser] = React.useState(initialState)
    const [selectedIndex, setSelectedIndex] = React.useState(-1)

    const onEdit = (id) => {
        setSelectedIndex(id)
        const selectedUser = users.find((user, index) => index === id)
        if (selectedUser) setUser(selectedUser)
        else setUser(initialState)
    }

    const onDelete = (id) => {
        setSelectedIndex(id)
        const excludedUsers = users.filter((user, index) => index !== id)
        setUsers(excludedUsers)

    }

    const saveUser = (flag) => {
        if (flag) {
            if (selectedIndex === -1) {
                setUsers(prev => [...prev, user])
            } else {
                setUsers(prev => {
                    prev[selectedIndex] = user
                    return prev
                })
            }
        }
        setUser(initialState)
        setSelectedIndex(-1)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className='layout-row justify-content-center mt-100'>
                <div className='w-60 mr-75'>
                    <UserList users={users} onEdit={onEdit} onDelete={onDelete} />
                </div>
                <div className='layout-column w-40'>
                    <AddEditUser user={user} setUser={setUser} saveUser={saveUser} />
                </div>
            </div>
        </div>
    );
}

export default App;
