import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Combat from "./testrun2";

function Home() {

    return (
        <Fragment>
            <div style = {{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Combat && Combat.length > 0 
                            ?
                            Combat.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Type}
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
    )
}

export default Home;