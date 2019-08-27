import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios'
import './admin.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            startDate: new Date()
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div>
                <span><input type="button" value="ADD" onClick={this.toggle} className="btn border border-primary btn-info" style={{  width: "100px" }} />{this.props.buttonLabel}</span>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{ marginTop: '150px' }}>
                    <ModalHeader toggle={this.toggle}>Edit Student</ModalHeader>
                    <ModalBody toggle={this.toggle}>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>User</label></div>
                            <div className="col-lg-7" >
                                <select onChange={this.onChange}>
                                    <option value="volvo">Student</option>
                                    <option value="saab">Instructor</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Date</label></div>
                            <div className="col-lg-7" ><DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            /></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>ClassSection</label></div>
                            <div className="col-lg-7" >
                                <select>
                                    <option value="volvo">1-A</option>
                                    <option value="saab">1-B</option>
                                    <option value="opel">1-C</option>
                                    <option value="audi">1-D</option>
                                </select>


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Time Start</label></div>
                            <div className="col-lg-7" >

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Time End</label></div>
                            <div className="col-lg-7" >

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Title</label></div>
                            <div className="col-lg-7" >
                                <input type="text" value="" placeholder="" name="user" />
                            </div>
                        </div>
                        <button>Add</button>





                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default ModalExample;