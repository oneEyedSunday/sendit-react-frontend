import React, { Component } from 'react'
import './forms.css';
import './parcels.css';

export default class Parcels extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="card flex-column">
                    <div className="parcel__context sevenOfWidth">
                        <a href="/parcels" title="Go Back to Parcel Inventory" className="float-left">&larr;</a> Order Details
                    </div>
                    <div className="info__container">
                        <div className="info__field">
                            <span className="info__label">Date Created</span>
                            <span className="info">November 23rd</span>
                        </div>
                        <div className="info__field">
                            <span className="info__label">Status</span>
                            <span className="info">In Transit</span>
                        </div>
                        <div className="info__field">
                            <span className="info__label">Destination</span>
                            <span className="info">Akoka, Lagos</span>
                        </div>
                        <div className="info__field">
                            <span className="info__label">Pick Up Location</span>
                            <span className="info">University of Lagos, Multi Purpose Hall</span>
                        </div>
                        <div className="info__field">
                            <span className="info__label">Present Location</span>
                            <span className="info">Akoka, Lagos</span>
                        </div>
                        <div className="info__field">
                            <span className="info__label">Price</span>
                            <span className="info">N500</span>
                        </div>
                        <div className="info__field">
                            <button type="submit" className="button danger" id="actionButton">Cancel Order</button>
                            <a href="edit.html" className="text-center float-right">Edit &rarr;</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
