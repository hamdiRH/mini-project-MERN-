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
            startDate: new Date(),
            startDate2: new Date(),
            user:'student',
            classSection:'1-A',
            title:''

        };


    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange=(date)=> {
        this.setState({
            startDate: date
        });
    }
    handleChange2=(date)=> {
        this.setState({
            startDate2: date
        });
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addSchedul = () =>{
      
       //this.state.startDate.getFullYear() + "-" + (this.state.startDate.getMonth() + 1) + "-" + this.state.startDate.getDate()+'T'+this.state.startDate.getHours()+':'+this.state.startDate.getMinutes()+':00'+' /// '+
     console.log( this.state.startDate.getFullYear() + "-" + (this.state.startDate.getMonth() + 1) + "-" + this.state.startDate.getDate()+'T'+this.state.startDate2.getHours()+':'+this.state.startDate2.getMinutes()+':00'
     )
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
                                <select onChange={this.onChange} name='user'>
                                    <option value="student">Student</option>
                                    <option value="user">Instructor</option>
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
                                <select name="classSection" onChange={this.onChange}>
                                    <option value="1-A">1-A</option>
                                    <option value="1-B">1-B</option>
                                    <option value="1-C">1-C</option>
                                    <option value="1-D">1-D</option>
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
                                    timeIntervals={30}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Time End</label></div>
                            <div className="col-lg-7" >

                                <DatePicker
                                    selected={this.state.startDate2}
                                    onChange={this.handleChange2}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-info ml-5" ><label>Title</label></div>
                            <div className="col-lg-7" >
                                <input type="text" value="" placeholder="" name="title" onChange={this.onChange}/>
                            </div>
                        </div>
                        <button onClick={this.addSchedul} >Add</button>





                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default ModalExample;