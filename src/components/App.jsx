import React from 'react'
import Contacts from './Contacts';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
            searchedText : '',
            name : '',
            number : '',
            hasNameError : false,
            hasNumberError : false
        }


        this.searchValFunc = this.searchValFunc.bind(this);
        this.onChangeFormInput = this.onChangeFormInput.bind(this);
        this.addContact = this.addContact.bind(this);
        this.removeInfo = this.removeInfo.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }


    componentDidMount(){
        this.setState({
            contacts : [
                {name : 'Ahmad Mammadli' , number : 123456789},
                {name : 'Emin Xalilov' , number : 987654321},
                {name : 'Azad Samedov' , number : 192837456},
            ]
        });
    }

    searchValFunc(e){
        this.setState({
            searchedText : e.target.value,
        })
    }

    onChangeFormInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    addContact(e){
        e.preventDefault();
        if(this.state.name == '' || this.state.number == '') return;

        this.state.contacts.push({
            name : this.state.name , number : this.state.number
        });

        this.checkContactNameOrNumber(this.state.name,this.state.number);
   
        this.setState({
            contacts : this.state.contacts,
            name : '',
            number : ''     
        });
    }

    removeInfo(number){
        const filteredContacts = this.state.contacts.filter(contact => {
            return contact.number !== number
        });

        this.setState({
            contacts : filteredContacts
        })
       
    }

    editInfo(number){
        const editedInfo = this.state.contacts.filter(contact=>{
            return contact.number == number
        });

        this.setState({
            name : editedInfo[0].name,
            number : number
        })
    }

    checkContactNameOrNumber = (name,number) => {
        
        // this.state.contacts.map(contact => {
        //     if(contact.name == name){
        //         this.setState({
        //             hasNameError : true
        //         })
        //     }

        //     if(contact.number == number){
        //         this.setState({
        //             hasNumberError : true
        //         })

        //         return;
        //     }
        // })

        // return this.state.hasNameError || this.state.hasNumberError ? true : false; 
    }

    render(){

        const filteredContacts = this.state.contacts.filter(contact=>{
            return contact.name.toLowerCase().indexOf(this.state.searchedText.toLowerCase()) !== -1
        });

        return(
           <div className="container">
                <div className="row">
                    <Contacts 
                    contacts={filteredContacts} 

                    searchValFunc={this.searchValFunc} 
                    searchedText={this.state.searchedText}

                    addContact = {this.addContact}
                    onChangeFormInput = {this.onChangeFormInput}
                    formInputName = {this.state.name}
                    formInputNumber = {this.state.number}

                    editInfo = {this.editInfo}
                    removeInfo = {this.removeInfo}

                    hasNameError = {this.state.hasNameError}
                    hasNumberError = {this.state.hasNameError}
                    />
                </div>
           </div>
        );
    }
}

export default App;