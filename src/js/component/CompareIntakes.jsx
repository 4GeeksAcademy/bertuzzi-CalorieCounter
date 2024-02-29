import React from 'react';
import { Table } from 'react-bootstrap';

const CompareIntakes = ({ macros }) => {
    return (
        <div>
            <Table hover stripped className='comparison-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Actual</th>
                        <th>Target</th>
                    </tr>
                </thead>
                <tbody>
                    {macros.map((macro, index) => (
                        <tr key={index} className={Object.values(macro)[1] <= Object.values(macro)[2] ? 'table-normal' : 'table-info'}>
                            <td>{Object.values(macro)[0]}</td>
                            <td>{Object.values(macro)[1]} {Object.values(macro)[0] == 'Calories' ? ' Kcal' : ' g'}</td>
                            <td>{Object.values(macro)[2]} {Object.values(macro)[0] == 'Calories' ? ' Kcal' : ' g'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CompareIntakes;

