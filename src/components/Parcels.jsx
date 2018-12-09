import React, { Component } from 'react'

import uielems from '../uielements';

import './parcels.css';

const dummyParcels = [
    {
        id: 1,
        date: 'October 31st',
        destination: 'Ojota, Lagos',
        status: 'In Transit'
    },
    {
        id: 2,
        date: 'October 31st',
        destination: 'Ojota, Lagos',
        status: 'In Transit'
    },
    {
        id: 3,
        date: 'October 31st',
        destination: 'Ojota, Lagos',
        status: 'In Transit'
    }
]

const { Table } = uielems;
export default class Parcels extends Component {
    constructor() {
        super();
        this.state = {
            parcels: []
        }

        this.headers = ['S/N', 'Date Created', 'Destination', 'Delivery Status', 'Options'];
    }
    render() {
        return (
            <React.Fragment>
                <div className="parcel__context">
                    <p>Your parcel delivery orders
                        <a href="/create" className="action link" title="Create Order"> &#43; </a>
                    </p>
                </div>
                <Table  headers={this.headers} data={dummyParcels}/>
            </React.Fragment>
        )
    }
}
