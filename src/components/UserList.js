import React from 'react'

function UserList() {
    return (
        <section>
            <h3 className='p-3 text-center'>Users</h3>
            <table className="table table-striped table-bordered" data-testid='userListTable'>
                <thead>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Lorem
                        </td>
                        <td>
                            Ipsum
                        </td>
                        <td>
                            1234567890
                        </td>
                        <td>
                            <button type='button'>
                                Edit
                            </button>
                            <button type='button'>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default UserList;