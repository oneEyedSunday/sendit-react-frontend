import React from 'react';
import { Link } from 'react-router-dom';
import './table.css';

const options = [
    {
        class: 'danger',
        text: 'Cancel'
    },
    {
        class: '',
        text: 'Details',
        url: 'details'
    },
    {
        class: '',
        text: 'Edit',
        url: 'edit'
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
                                      <button className="button parcel__button danger">Cancel</button>
                                  ) : 
                                  (
                                      <div className="button parcel__button">
                                        <Link to={`/parcels/${option.url}/${datum.id}`}>{option.text}</Link>
                                      </div>
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
