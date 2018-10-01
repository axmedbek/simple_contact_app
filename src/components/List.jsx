import React, { Component } from 'react'
import PropTypes from 'prop-types'


class List extends Component{
    render(){

        const elements = this.props.contacts.map(contact =>
            <li key={contact.number}>
                <span className="text-name">{contact.name}</span>
                <span className="text-number">
                    {contact.number}
                    <button 
                        style= {{ marginLeft : '10px'}}
                        className="btn btn-primary btn-sm"
                        onClick={this.props.editInfo.bind(this,contact.number)}
                        >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button
                        style={{position: 'absolute',marginLeft: '5px'}}
                        className="btn btn-danger btn-sm"
                        onClick={this.props.removeInfo.bind(this,contact.number)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </span>
            
            </li>);

        return(
            <ul>
                {elements}
            </ul>
        );
    }
}

export default List;