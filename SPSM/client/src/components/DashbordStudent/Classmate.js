import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios'
import './classmate.css'

class Classmate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount = () => {
        axios.get("/api/profilinfos")
            .then(res => {
                this.setState({ arr: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {

        // const { isAuthenticated, user, token } = this.props.auth;  {el.name}{el.email}{el.tel}
        const src = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg",
            "https://www.enstoyota.ca/wp-content/uploads/2016/04/bigstock-female-student-115677548@2x.png",
            "https://www.caprent.com/img/student.jpg",
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1238014.jpg",

            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg",
            "https://www.enstoyota.ca/wp-content/uploads/2016/04/bigstock-female-student-115677548@2x.png",
            "https://www.caprent.com/img/student.jpg",
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1238014.jpg",

            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg",
            "https://www.enstoyota.ca/wp-content/uploads/2016/04/bigstock-female-student-115677548@2x.png",
            "https://www.caprent.com/img/student.jpg",
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1238014.jpg",


        ]
        let i = 0;
        return (
            <div className='d-flex flex-wrap'>
                {this.state.arr.map(el => <figure class="snip0051">
                    <img src={src[i++]} alt="sample1" />



                    <figcaption>
                        <h2>{el.name} <span>{el.name} </span></h2>
                        <p><strong>Email: </strong>{el.email}<br />
                            <strong>Tel: </strong>{el.tel}<br />
                            <strong>Birthday: </strong>{el.birthday}<br />
                            <strong>Gender: </strong>{el.gender}<br />
                            <strong>Adresse: </strong>{el.adresse}<br />
                            <strong>Class: </strong>{el.classSection}<br />



                        </p>


                    </figcaption>
                </figure>)}

            </div>


            // this.state.arr.map(el => )

        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, null)(Classmate);
