import React, { Fragment, useState, useEffect } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    //delete Todo function
    const deleteCompany = async(id) => {
        try {
            const deleteUser = await fetch(`http://localhost:5000/companys/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(users => users.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/companys");
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
                        <th>Companhia</th>
                        <th>Schema</th>
                        <th>Link de Ajuda</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(companys => (
                        <tr key={companys.id}>
                            <td>{companys.name}</td>
                            <td>{companys.email}</td>
                            <td><EditTodo companys={companys} /></td>
                            <td>
                                <button 
                                className="btn btn-danger" 
                                onClick={() => deleteCompany(companys.id)} 
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