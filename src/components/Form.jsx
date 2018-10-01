import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Form extends Component{
    render(){
        return(
            <form>
                <div className="form-group text-center">
                    <input
                     type="text" name="name" 
                     className="form-control" 
                     id="name" placeholder="Name"
                     value={this.props.formInputName} 
                     onChange={this.props.onChangeFormInput}
                    />
                    {this.props.hasNameError ? 'error' : ''}
                </div>
                <div className="form-group text-center">
                    <input type="text" name="number" 
                    className="form-control" id="number" 
                    placeholder="Number"
                    value={this.props.formInputNumber}
                    onChange={this.props.onChangeFormInput} />
                    {this.props.hasNumberError ? 'error' : ''}    
                </div>
                <div className="form-group text-center">
                    <button onClick={this.props.addContact} 
                    className="btn btn-success" 
                    style={{ width : '120px'}}>
                        <i className="fa fa-save"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;