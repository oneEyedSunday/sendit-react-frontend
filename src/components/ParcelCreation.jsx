import React, { Component } from 'react';
import './parcelCreation.css'

export default class ParcelCreation extends Component {
    render() {
        return (
            <div className="card my-2 flex-column">
                <div className="parcel__context sevenOfWidth">
                <a href="/parcels" title="Go Back to Parcel Inventory" className="float-left">&larr;</a>
                Edit your parcel delivery order. 
                </div>
                <form action="#" className="form parcel__creation">
                    <div className="form__field flex">
                        <label htmlFor="destination">New Destination</label>
                        <input type="text" name="destination" className="parcel__input" placeholder="New Parcel Destination"/>
                    </div>
                    <div className="form__field flex">
                        <label htmlFor="pick-up-location">New Pick Up Location</label>
                        <input type="text" name="pick-up-location" className="parcel__input" placeholder="New Pick Up Location"/>
                    </div>
                    <div className="form__field flex">
                        <button type="submit" className="button primary-action y-four-fifths four-fifths">Update Order</button>
                    </div>
                </form>
            </div>
        )
    }
};
