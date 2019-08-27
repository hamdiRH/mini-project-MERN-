import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

class Profil extends React.Component {
    state = {

        adresse: '',
        tel: '',
        password: '',
        email: '',
        name: '',
        birthday: '',
        clas: '' 
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount = () => {
        const { adresse,
            tel,
            password,
            email,
            name,
            birthday
           
        } = this.props.auth.user ? this.props.auth.user : '';
        const clas = this.props.auth.user ? this.props.auth.user.class : ''
        this.setState({
            msg: false,
            tel,
            password,
            email,
            name,
            birthday,
            clas,
            adresse
        })
    }

    render() {
        console.log(this.props.auth.user)
        return (<div>
            <h1 className="mb-5 my-5" style={{ letterSpacing: '20px', color: '#cb42f4', marginLeft: '15%' }}>USER PROFILE</h1>

            <div className="d-flex" style={{ marginLeft: '200px ' }}>

                <div className="mx-5">


                    <h5 className="mt-5">User Name</h5> <input className="ml-5 px-3 my-2" type="text" name='name' value={this.state.name} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white',height:'35px' }} />
                    <h5>User Email</h5> <input className="ml-5 px-3 my-2" type="text" name='email' value={this.state.email} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white' }} />
                    <h5>Birthday</h5> <input className="ml-5 px-3 my-2" type="text" name='birthday' value={this.state.birthday && this.state.birthday.slice(0, 10)} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white',height:'35px' }} />
                    <h5>Tel</h5> <input className="ml-5 px-3 my-2" type="text" name='tel' value={this.state.tel} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white' }} />
                    <h5>classSection</h5> <input className="ml-5  px-3 my-2" type="text" name='clas' value={this.state.clas} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white',height:'35px' }} />
                    <h5>Adresse</h5> <input className="ml-5  px-3 my-2" type="text" name='clas' value={this.state.adresse} onChange={this.onChange} style={{ borderRadius: '30px', backgroundColor: 'white',height:'35px' }} />
                </div>

                <div className="mx-5 px-5  mt-3">
                    <img src="https://image.flaticon.com/icons/png/512/163/163815.png" alt ='user' className="rounded-circle border border-primary mt-5" style={{ widh: '250px', height: '250px' }} />

                    <br /><br />
                    <input type="button" value="Update profile" className='mt-5 ml-5 btn btn-info p-3' onClick={() => {
                        axios.put(`/api/profilinfoP/${this.props.auth.user.id}/`, this.state)
                            .then(res => this.setState({ msg: true }))
                            .catch(err => this.setState({ msg: true }))

                    }} />
                    {this.state.msg && <div class="alert alert-success" role="alert">
                        Update success
        </div>}




                </div>
            </div>
        </div>)

    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps
)(Profil);
