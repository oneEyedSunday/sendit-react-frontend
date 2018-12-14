import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './parcelCreation.css'

const getContext = mode => {
    const context = {
        heading: 'Create a parcel delivery order.',
        destinationLabel: 'Destination',
        pickUpLocationLabel: 'Pick Up Location',
        buttonText: 'Create Order'
    }
    if (mode.toLowerCase() === 'edit'){
        context.heading = 'Edit your parcel delivery order.'
        context.pickUpLocationLabel = 'New Pick Up Location'
        context.destinationLabel = 'New Destination'
        context.buttonText = 'Update Order'
    }
    return context;
}

class ParcelCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            destination: '',
            pickUpLocation: '',
            weight: ''
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleChange = evt => {
        const newData = {
            ...this.state,
            [evt.target.name]: evt.target.value
        }
        this.setState(newData);
    }

    submitForm = evt => {
        evt.preventDefault();
        this.props.history.push('/parcels')
    }

    render() {
        const { heading, pickUpLocationLabel, destinationLabel, buttonText } = getContext(this.props.mode);
        return (
            <div className="card my-2 flex-column">
                <div className="parcel__context sevenOfWidth">
                <a href="/parcels" title="Go Back to Parcel Inventory" className="float-left">&larr;</a>
                 {heading}
                </div>
                <form action="#" className="form parcel__creation" onSubmit={this.submitForm}>
                    <div className="form__field flex">
                        <label htmlFor="destination">{destinationLabel}</label>
                        <input type="text" name="destination"
                        className="parcel__input"
                        placeholder={destinationLabel}
                        value={this.state.destination}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__field flex">
                        <label htmlFor="pickUpLocation">{pickUpLocationLabel}</label>
                        <input type="text" name="pickUpLocation"
                        className="parcel__input"
                        placeholder={pickUpLocationLabel}
                        value={this.state.pickUpLocation}
                        onChange={this.handleChange}
                        />
                    </div>
                    {
                        this.props.mode.toLowerCase() === 'create' ? 
                        (
                            <React.Fragment>
                                <div className="form__field flex">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="number" range="50" name="weight" 
                                    placeholder="Weight in Kilogrammes (kg)"
                                    className="parcel__input"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </React.Fragment>   
                        ): ''
                    }
                    <div className="form__field flex">
                        <button type="submit" className="button primary-action y-four-fifths four-fifths">{buttonText}</button>
                    </div>
                </form>
            </div>
        )
    }
};


export default withRouter(ParcelCreation);
