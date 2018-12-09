import React from 'react';

const options = [
    {
        class: 'danger',
        text: 'Cancel'
    },
    {
        class: '',
        text: 'Details'
    },
    {
        class: '',
        text: 'Edit'
    }
]

export default props => (
    <div id="overflowContainer">
        <table className="margin-y-mixed">
            <thead>
                <tr>
                    {props.headers.map(header => (<th key={header} colSpan={header === 'Options' ? '3' : ''}>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                {props.data.map(datum => (
                <tr key={datum.id}>
                    <td>{datum.id}</td>
                    <td>{datum.date}</td>
                    <td>{datum.destination}</td>
                    <td>{datum.status}</td>
                    {
                        options.map(option => (
                            <td key={option.text}>
                               {
                                  option.text === 'Cancel' ? (
                                      <button className="button danger">Cancel</button>
                                  ) : 
                                  (
                                      <button className="button">
                                        <a href={`details?parcelId=${datum.id}`}>{option.text}</a>
                                      </button>
                                  )
                               }
                            </td>
                        ))
                    }
                </tr>))}
            </tbody>
        </table>
    </div>
);
