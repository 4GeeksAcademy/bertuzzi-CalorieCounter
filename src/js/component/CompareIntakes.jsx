import React from 'react';
import { Table } from 'react-bootstrap';

const CompareIntakes = ({ macros }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Actual</th>
                        <th>Target</th>
                    </tr>
                </thead>
                <tbody>
                    {macros.map((macro, index) => (
                        <tr key={index} className={Object.values(macro)[1] <= Object.values(macro)[2] ? 'table-success' : 'table-danger'}>
                            <td>{Object.values(macro)[0]}</td>
                            <td>{Object.values(macro)[1]}</td>
                            <td>{Object.values(macro)[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CompareIntakes;
