import React, { Component } from 'react';
import {
    Modal,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import './SignUpModal.css'

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        gender: '',
        birthday: '',
        adresse: '',
        tel: '',
        classSection: '',
        guardienName: '',
        guardienOccupation: '',
        guardienTel: '',
        guardienEmail: '',
        Padresse: '',
        Ptel: '',
        Ppassword: '',
        Pemail: '',
        Pname: '',
        Pbirthday: '',
        PclassSection: '',
        msg: null,


        SU: 'active-sx formm',
        SI: 'inactive-dx formm'

    };


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, email, password, birthday, tel, gender, adresse, classSection, guardienName, guardienTel, guardienEmail } = this.state;
        let newUser = {}
        // Create user object
        newUser = {
            user: 'S',
            name, email, password, birthday, tel, gender, adresse, classSection, guardienName, guardienTel, guardienEmail
        };


        // Attempt to register
        this.props.register(newUser);
    };


    onSubmit2 = e => {
        e.preventDefault();
        const { Ppassword, Pemail, Pname, Pbirthday, Ptel, Padresse, PclassSection } = this.state;
        let newUser = {}
        // Create user object
        newUser = {
            user: 'P', Padresse, Ptel, Ppassword, Pemail, Pname, Pbirthday, PclassSection
        }
        console.log(newUser)
        // Attempt to register
        this.props.register(newUser);
    };

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href='#' className="Athbtn" style={{ borderRadius: '30px' }}>
                    Sign Up
        </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop: "15%" }} >
                    <div className="container-auth">
                        <form className={this.state.SU} onSubmit={this.onSubmit}>
                            <h3 className='h3auth'>Sign Up</h3>
                            <p className='pp' >Student</p>
                            {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}

                            <input className="w100 authinput" type="text" name='name' onChange={this.onChange} placeholder="Insert Full Name" />
                            <input className="w100 authinput" type="email" name='email' onChange={this.onChange} placeholder="Insert Email" />
                            <input className='authinput' type="password" name='password' onChange={this.onChange} placeholder="Insert Password" />
                            <input className="w100 authinput" type="date" name='birthday' onChange={this.onChange} placeholder="Insert birthday" /><br />

                            <input type="radio" name="gender" value="male" onChange={this.onChange} placeholder="Insert birthday" /><span className="mx-3" style={{ fontSize: "1.3rem", color: '#dc006c' }}>Male</span>
                            <input type="radio" name="gender" value="female" onChange={this.onChange} placeholder="Insert birthday" /><span className="mx-3" style={{ fontSize: "1.3rem", color: '#dc006c' }}>Female</span>

                            <input className="w100 authinput mt-2" type="number" name='tel' onChange={this.onChange} placeholder="Insert Num Tel" />
                            <input className="w100 authinput" type="text" name='adresse' onChange={this.onChange} placeholder="Insert Adress" />
                            <input className='authinput' type="text" name='classSection' onChange={this.onChange} placeholder="Insert Class Section" />
                            <input className='authinput' type="text" name='guardienName' onChange={this.onChange} placeholder="Insert Guardien Name" />
                            <input className='authinput' type="number" name='guardienTel' onChange={this.onChange} placeholder="Insert Guardien Tel" />
                            <input className='authinput mb-5' type="email" name='guardienEmail' onChange={this.onChange} placeholder="Insert Guardien Email" />





                            <br /><br /><br />


                            <button className="authbutton form-btn sx log-in mt-5" type="button" onClick={() => { this.setState({ SU: 'inactive-sx formm', SI: 'active-dx formm' }) }}>Instructor</button>
                            <button className="form-btn dx authbutton mt-5" type="submit">Sign Up</button>
                        </form>
                        <form className={this.state.SI} onSubmit={this.onSubmit2}>
                            <h3 className='h3auth'>Sign Up</h3>
                            <p className='pp'>Instructor</p>

                            <input className="w100 authinput" type="text" name='Pname' onChange={this.onChange} placeholder="Insert Full Name" />
                            <input className="w100 authinput" type="email" name='Pemail' onChange={this.onChange} placeholder="Insert Email" />
                            <input className='authinput' type="password" name='Ppassword' onChange={this.onChange} placeholder="Insert Password" />
                            <input className="w100 authinput" type="date" name='Pbirthday' onChange={this.onChange} placeholder="Insert birthday" /><br />
                            <input className="w100 authinput mt-2" type="number" name='Ptel' onChange={this.onChange} placeholder="Insert Num Tel" />
                            <input className="w100 authinput" type="text" name='Padresse' onChange={this.onChange} placeholder="Insert Adress" />
                            <input className="w100 authinput mb-5" type="text" name='PclassSection' onChange={this.onChange} placeholder="Insert your Class " />

                            <br /><br /><br />

                            <button className="authbutton form-btn sx back mt-5" type="button" onClick={() => { this.setState({ SU: 'active-sx formm', SI: 'inactive-dx formm' }) }}>Student</button>
                            <button className="authbutton form-btn dx mt-5" type="submit">Sign Up</button>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});



export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);
