import React, { Fragment, useState, useEffect } from "react";

import EditCompany from "./EditCompany";

const ListCompany = () => {

    const [companys, setCompanys] = useState([]);

    //delete Todo function
    const deleteCompany = async(id) => {
        try {
            const deleteCompany = await fetch(`http://localhost:5000/companys/${id}`, {
                method: "DELETE",
            });
            setCompanys(companys.filter(companys => companys.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getCompanys = async () => {
        try {
            const response = await fetch("http://localhost:5000/companys");
            const jsonData = await response.json();
            console.log(jsonData);
            setCompanys(jsonData);
        } catch (err) {
            console.error(err.mensage);
        }
    }
    useEffect(() => {
        getCompanys();
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Companhia</th>
                        <th>Link de Ajuda</th>
                        <th>Schema</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {companys.map(companys => (
                        <tr key={companys.id}>
                            <td>{companys.nameCompany}</td>
                            <td>{companys.urlHelp}</td>
                            <td>{companys.schema}</td>
                            <td><EditCompany companys={companys} /></td>
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

export default ListCompany;