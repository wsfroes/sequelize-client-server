import React, { Fragment, useState } from "react";

const InputCompany = () => {

    const [nameCompany, setNameCompany] = useState("");
    const [schema, setSchema] = useState("");
    const [urlHelp, setUrlHelp] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { nameCompany, schema, urlHelp };
            console.log(body);

            const response = await fetch("http://localhost:5000/companys", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.mesage);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Companhias</h1>
            <form className="mt-5">
                <h3>Nome da Companhia: </h3>
                <input
                    type="text"
                    className="form-control"
                    value={nameCompany}
                    onChange={e => setNameCompany(e.target.value)}
                />
                <h3>Schema: </h3>
                <input
                    type="text"
                    className="form-control"
                    value={schema}
                    onChange={e => setSchema(e.target.value)}
                />
                <h3>Link Ajuda: </h3>
                <input
                    type="text"
                    className="form-control"
                    value={urlHelp}
                    onChange={e => setUrlHelp(e.target.value)}
                />
            </form>
            <br />
            <div class="d-grid gap-2" onClick={onSubmitForm}>
                <button className="btn btn-success">Add</button>
            </div>

        </Fragment>


    )
}

export default InputCompany;