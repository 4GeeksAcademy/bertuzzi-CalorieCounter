import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function MacroBar({ macros }) {


    return (
        <div>
            {
                macros.map((macro) => {
                    const macroDifference = Object.values(macro)[1] - Object.values(macro)[2];
                    let macroStatus = ((Object.values(macro)[1] / Object.values(macro)[2]) * 100);
                    macroStatus = macroStatus.toFixed(2);

                    return (
                        <div className='d-flex justify-content-center'>
                            <span style={{ width: '20%' }}>{Object.values(macro)[0]}</span>
                            < ProgressBar className='my-3 mx-5' style={{ height: '30px', width: '70%' }}>
                                <ProgressBar striped variant={macroStatus >= 100 ? 'danger' : 'success'} now={Object.values(macro)[1]} key={1} label={macroStatus + ' %'} max={(Object.values(macro)[2])} animated='true' />
                                <span></span>
                            </ProgressBar >
                        </div>
                    )
                })
            }
        </div >
    );
}

export default MacroBar;