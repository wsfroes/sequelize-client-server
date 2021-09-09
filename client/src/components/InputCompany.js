import React, { Fragment, useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListCompany from "./ListCompany";
import ListPrevia from "./ListPrevia"


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    fabButton: {
        color: "#ffffff",
        backgroundColor: "#0091ea",
        '&:hover': { backgroundColor: "#2979ff" },
        paddingRight: "35px",
        paddingLeft: "35px",
        display: "flex",
        justifyContent: "center",
        marginTop: "5px"
    },
    fabButtonFile: {
        color: "#ffffff",
        backgroundColor: "#0091ea",
        '&:hover': { backgroundColor: "#2979ff" },
        paddingRight: "35px",
        paddingLeft: "35px",
        justifyContent: "left",
     //   marginTop: "-15px",
        marginBottom: "10px"
    },
    fabButtonFiledisabled: {
        color: "#ffffff",
        backgroundColor: "#dddddd",
        '&:hover': { backgroundColor: "#808080" },
        paddingRight: "35px",
        paddingLeft: "35px",
     //   marginTop: "-15px",
        marginBottom: "10px"
    },
    fabButtondisabled: {
        color: "#ffffff",
        backgroundColor: "#dddddd",
        '&:hover': { backgroundColor: "#808080" },
        paddingRight: "35px",
        paddingLeft: "35px",
        display: "flex",
        justifyContent: "center",
        marginTop: "5px"
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        opacity: '0.5',
        position: "absolute"
    },
    input: {
        display: 'none',
    },
}));


const InputCompany = () => {

    const classes = useStyles();
    const [nameCompany, setNameCompany] = useState("");
    const [schema, setSchema] = useState("");
    const [urlHelp, setUrlHelp] = useState("");
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState(false);
    const [buttonPrevia, setButtonPrevia] = useState(false);

    const handleChangeFile = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            console.log(file);
            setButtonPrevia(true);
        }
    }

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
            <div className={classes.root}>
                <h1 className="text-center mt-5">Lista de Companhias</h1>
                <Button
                    className={classes.fabButtonFile}
                    variant="contained"
                    size="large"
                //   onclick={verifyName().then.this.disable = true}
                >
                    <input
                        className={classes.input}
                        accept=".csv"
                        id="archieve-button-file"
                        multiple
                        type="file"
                        onChange={handleChangeFile}
                    />
                    <label htmlFor="archieve-button-file">
                        ARQUIVO CSV
                    </label>
                </Button>
            </div>
            <div className={classes.root}>
                {buttonPrevia ?
                    <div>
                        <ListPrevia file={file} />
                    </div>
                    :
                    <div>
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
                        <ListCompany />
                    </div>
                }
            </div>



        </Fragment>


    )
}

export default InputCompany;