import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import List from './List';
import Form from './Form';


class Contacts extends Component{
    render(){
        return(
            <div className="col-md-6 contacts">
                <SearchBox 
                    searchedText = {this.props.searchedText} 
                    searchValFunc = {this.props.searchValFunc}
                    />
                <hr/>
                <h3 className="text-center">Your contacts</h3>
                <hr/>
                <List 
                    contacts={this.props.contacts}
                    editInfo = {this.props.editInfo}
                    removeInfo = {this.props.removeInfo}
                />
                <hr/>
                <h3 className="text-center">Add New Contact</h3>
                <Form 
                    addContact = {this.props.addContact} 
                    onChangeFormInput = {this.props.onChangeFormInput}
                    formInputName = {this.props.formInputName}
                    formInputNumber = {this.props.formInputNumber}

                    hasNameError = {this.props.hasNameError}
                    hasNumberError = {this.props.hasNumberError}
                />
            </div>
        );
    }
}

export default Contacts;
