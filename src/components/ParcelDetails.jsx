import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './forms.css';
import './parcels.css';
class ParcelDetails extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="card flex-column my-2">
                    <div className="parcel__context sevenOfWidth">
                        <Link to="/parcels" title="Go Back to Parcel Inventory" className="float-left">&larr;</Link> Order Details
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
                            <Link to={`/parcels/edit/${this.props.match.params.id}`} className="text-center float-right">Edit &rarr;</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ParcelDetails);
