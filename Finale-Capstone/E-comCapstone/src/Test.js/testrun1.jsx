import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import Combat from "./testrun2";
// import { useSelector } from "react-redux";

function Home() {
    // const users = useSelector((state) => state.users);

    return (
        <>
        <Fragment>
            <div className="crud" style = {{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Action
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Combat && Combat.length > 0 
                            ?
                            Combat.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Type}
                                        </td>
                                        <td>
                                            <Button className="edit" onClick={() => alert(item.id)}>Edit</Button>
                                            <Button className="delete" onClick={() => alert(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
        </>
    )
}

export default Home;