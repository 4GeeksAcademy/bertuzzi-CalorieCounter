import React from 'react';
import { ProgressBar, Table } from 'react-bootstrap';

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
            {/* <ProgressBar>
        <ProgressBar
          variant="success"
          now={(data[0].actual / data[0].target) * 100}
          key={1}
          label={`Revenue: ${(data[0].actual / data[0].target) * 100}%`}
        />
        <ProgressBar
          variant="danger"
          now={(data[1].actual / data[1].target) * 100}
          key={2}
          label={`Expenses: ${(data[1].actual / data[1].target) * 100}%`}
        />
          </ProgressBar>*/}
        </div>
    );
};

export default CompareIntakes;
