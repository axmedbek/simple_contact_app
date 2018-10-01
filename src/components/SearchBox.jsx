import React, { Component } from 'react'
import PropTypes from 'prop-types'


class SearchBox extends Component{
    render(){
        return(
            <input className="form-control searchBox" 
            type="text" name="searchedText" 
            value={this.props.searchedText}
             placeholder="Search name or phone number"
             onChange={this.props.searchValFunc}/>
        );
    }
}

export default SearchBox;