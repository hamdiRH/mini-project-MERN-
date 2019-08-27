import React, { Component } from 'react'
import './Report.css'
import axios from 'axios'

class Report extends Component {
    state = {
        user: '',
        email: '',
        phone: '',
        subject: '',
        ReportS: '',
        msg: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const { user, email, phone, subject, ReportS } = this.state
        if (user === '' || email === ''|| phone === ''|| subject === ''||ReportS === '') {
            this.setState({
                msg: 'complete all fields'
            })
        }
        else {
            axios.post(`/api/ReportS/`, { user, email, phone, subject, ReportS })
                .then(res => this.setState({
                    msg: 'Report Send'
                }));

        }
    }
    render() {
        console.log(this.state)
        return (
            <div class="shade">
                <div class="blackboard">
                    <div class="formmm">
                        {this.state.msg === 'complete all fields' &&
                            <div class="alert alert-danger w-50" role="alert">
                                {this.state.msg}
                            </div>}
                        {this.state.msg === 'Report Send' &&
                            <div class="alert alert-success w-50" role="alert">
                                {this.state.msg}
                            </div>}
                        <p className='ppp'>
                            <label className='labell'>Name: </label>
                            <input className="contact-input" type="text" name="user" onChange={this.onChange} />
                        </p>
                        <p className='ppp'>
                            <label className='labell'>Email: </label>
                            <input className="contact-input" type="text" name="email" onChange={this.onChange} />
                        </p>
                        <p className='ppp'>
                            <label className='labell'>Phone: </label>
                            <input className="contact-input" type="tel" name="phone" onChange={this.onChange} />
                        </p>
                        <p className='ppp'>
                            <label className='labell'>Subject: </label>
                            <input className="contact-input" type="text" name="subject" onChange={this.onChange} />
                        </p>
                        <p className='ppp'>
                            <label className='labell'>Message: </label>
                            <textarea className="contact-textarea" name="ReportS" onChange={this.onChange}></textarea>
                        </p>
                        <p class="wipeout ppp">
                            <input className="contact-input" type="submit" value="Send" onClick={this.onSubmit} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report
