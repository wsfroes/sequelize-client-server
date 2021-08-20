import React, { Fragment, useState, useEffect } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    //delete Todo function
    const deleteUser = async(id) => {
        try {
            const deleteUser = await fetch(`https://node-serv-todo.herokuapp.com/users/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(users => users.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("https://node-serv-todo.herokuapp.com/users");
            const jsonData = await response.json();
            console.log(jsonData);
            setTodos(jsonData);
        } catch (err) {
            console.error(err.mensage);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(users => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td><EditTodo users={users} /></td>
                            <td>
                                <button 
                                className="btn btn-danger" 
                                onClick={() => deleteUser(users.id)} 
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo;