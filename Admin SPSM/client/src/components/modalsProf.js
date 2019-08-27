import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'


class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            email: '',
            adresse: '',
            classe: '',

        };


    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.el._id


        const name = this.state.name === '' ? this.props.el.name : this.state.name
        const email = this.state.email === '' ? this.props.el.tel : this.state.email
        const adresse = this.state.adresse === '' ? this.props.el.adresse : this.state.adresse
        const classe = this.state.classe === '' ? this.props.el.classSection : this.state.classe

        const obj = {
            name, email, classe, adresse
        }
        axios.put(`/api/Prof/${id}`, obj)
            .catch(err => this.toggle())
        this.setState({
            modal: false
        })
        this.toggle();



    }

    render() {
        return (
            <div>
                <i className="fas fa-pencil-alt editb" onClick={this.toggle}> {this.props.buttonLabel}</i>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ marginTop: '150px' }}>
                    <ModalHeader toggle={this.toggle}>Edit Instructor</ModalHeader>
                    <ModalBody toggle={this.toggle}>

                        <form className="form" onSubmit={this.handleSubmit}>

                            <div className="row">
                                <div className="col-lg-5 pl-5">
                                    <label className="text-info" >Name</label>
                                </div>
                                <div className="col-lg-7">
                                    <input className="border border-primary border-top-0 border-right-0 border-left-0" type="text" name="name" placeholder={this.props.el.name} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-5 pl-5">
                                    <label className="text-info">Email</label>
                                </div>
                                <div className="col-lg-7">
                                    <input className="border border-primary border-top-0 border-right-0 border-left-0" type="email" name="email" placeholder={this.props.el.email} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-5 pl-5">
                                    <label className="text-info">Adress</label>
                                </div>
                                <div className="col-lg-7">
                                    <input className="border border-primary border-top-0 border-right-0 border-left-0" type="text" name="adresse" placeholder={this.props.el.adresse} onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-5 pl-5">
                                    <label className="text-info">Class</label>
                                </div>
                                <div className="col-lg-7">
                                    <input className="border border-primary border-top-0 border-right-0 border-left-0" type="text" name="classe" placeholder={this.props.el.class} onChange={this.handleChange} />
                                </div>
                            </div>

                            <input type="submit" value="Edit Contact" className="mt-4 btn btn-info" />
                        </form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default ModalExample;