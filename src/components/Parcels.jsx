import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import uielems from '../uielements';
import ParcelDetailsComponent from './ParcelDetails';

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
            parcels: dummyParcels
        }

        this.headers = ['S/N', 'Date Created', 'Destination', 'Delivery Status', 'Options'];
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route  path="/parcels/details/:id" render={() => <ParcelDetailsComponent parcels={this.state.parcels}/>}/>
                    <Route path="**"  render={
                        () => (
                            <React.Fragment>
                                <div className="parcel__context">
                                    <p>Your parcel delivery orders
                                        <a href="/create" className="parcel__floating__btn" title="Create Order"> &#43; </a>
                                    </p>
                                </div>
                                <Table  headers={this.headers} data={this.state.parcels}/>
                            </React.Fragment>
                        )
                    } />
                </Switch>
            </Router>
        )
    }
}
