import { Button } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CSVReader from 'react-csv-reader'
import DataGrid from "./DataGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    fabButtonFile: {
        color: "#ffffff",
        backgroundColor: "#0091ea",
        '&:hover': { backgroundColor: "#2979ff" },
        paddingRight: "35px",
        paddingLeft: "35px",
        justifyContent: "left",
        marginTop: "10px",
        marginBottom: "10px"
    },
}));

const ListPrevia = (props) => {

    const classes = useStyles();
    const [arquivo, setFiles] = useState(props.file);
    const [view, setView] = useState(false);
    const [title, setTitle] = useState('Titulo');
    const [csvHeader, setCsvHeader] = useState([]);
    const [csvRow, setCsvRow] = useState([]);
    const [csv, setCsv] = useState(null);

    const [stateDois, setStateDois] = React.useState([0, 0]);
    // console.log(props.file.name);
    // console.log(arquivo);
    const handlePrevia = () => {
        setView(true);
        setTitle(props.file.name);
        setFiles(props.file);
        // console.log(arquivo);

    };

    // const processCsv = (str, delim = ',') => {
    //     const headers = str.slice(0, str.indexOf('\n')).split(delim);

    //     const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    //     const newArray = rows.map(row => {
    //         const values = row.split(delim);
    //         const eachObj = headers.reduce((obj, header, i) => {
    //             obj[header] = values[i];
    //             return obj;
    //         }, {})
    //         return eachObj;
    //     })
    //     setCsvArray(newArray => newArray);
    //     setCsvRow(rows => rows + rows);
    //     setCsvHeader(headers);
    //     setCsvArray(newArray);
    //     setTimeout(() => {

    //         console.log(csvArray);
    //     }, 5000);
    //     setTitle(props.file.name);
    //   //  const h = headers.map();
    //     console.log(csvHeader);

    //     console.log(csvRow);

    //     //   const { h } = headers[1];
    //     //console.log(csvHeader);

    // }

    useEffect(() => {
        console.log('state changed', csv)
        setCsv(csv);
    }, [csv]);

    const submit = () => {
        const csvFile = arquivo;
        const reader = new FileReader();
        reader.readAsText(csvFile);
        reader.onload = function (e) {
            const text = e.target.result;
            setCsv(parserCSV(text));
        }

        setView(true);
        //  console.log(csvArray);
    }

    //  const submit = () => {
    //     // fetch(csvFile)
    //     //     .then(r => r.text())
    //     //         .then((text) => {
    //     //             console.log(text);
    //     //         })
    //  }

    const parserCSV = (text) => {
        const result = {
            header: [],
            data: []
        }

        const [header, ...content] = text.split('\n');

        result.header = header.split(',');
        content.forEach((item) => {
            result.data.push(item.split(','));
        });
        //  console.log(result);
        return result;
    }

    return (
        <Fragment>
            {/* <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={this.handleForce}
                onError={this.handleDarkSideForce}
                parserOptions={papaparseOptions}
                inputId="ObiWan"
                inputName="ObiWan"
                inputStyle={{ color: 'red' }}
            /> */}
            <Button
                size="large"
                onClick={(e) => {
                    e.preventDefault()
                    if (arquivo) submit()
                }}
                className={classes.fabButtonFile}>
                PRÉVIA
            </Button>
            <h1 className="text-center mt-5">{title}</h1>
            <DataGrid csv={csv} />
            {/* {view ?

                <table>
                    <thead>
                        {csvHeader.map((item, index) => {
                            <tr key={index}>
                                <td>{item}</td>
                            </tr>
                        })}
                    </thead>
                </table>
                : <></>}
            {csvArray.length > 0 ?

                <table>
                    <thead>
                        {csvHeader.map((item, index) => {
                            <th key={index}>
                                <td>{item}</td>
                            </th>
                        })}
                    </thead>
                </table>

                : null} */}
        </Fragment>
    )
}

export default ListPrevia;