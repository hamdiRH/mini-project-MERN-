import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios'
import './prof.css'

class Prof extends React.Component {
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
        axios.get("/api/profilinfop")
            .then(res => {
                this.setState({ arr: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const m = ['React', 'HTML + CSS', 'JS6', 'Redux', 'Node', 'Express', 'MongoDB']
        // const { isAuthenticated, user, token } = this.props.auth;
        let i = 0;
        const src = ["https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

            "https://i.pinimg.com/originals/b8/27/39/b82739dd787137627a6e7cd6cd7e6e24.jpg",



            "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://www.thederminstitute.com/wp-content/uploads/2016/09/attractive-man-strong-jaw.jpg",
            "https://www.blog.loventine.com/wp-content/uploads/2013/12/hombres-buscando-mujeres.jpg",
            "https://www.irishcentral.com/uploads/article/126050/cropped_hot_man_outdoors_istock.jpg?t=1527064487",
            "https://www.ties.com/blog/wp-content/uploads/2017/09/women_mens_fashion_grooming.jpg",
            "https://thumbs.dreamstime.com/t/mujer-triguena-joven-feliz-con-sonrisa-asombrosa-26038696.jpg",
            "https://i.pinimg.com/originals/6e/90/aa/6e90aac743491b64c8a8e77e47cbb645.jpg",
            "https://i.pinimg.com/originals/70/81/70/708170de0051108c5d508b69f1dce819.jpg",
            " https://qph.fs.quoracdn.net/main-qimg-f47439c477cbac418dda84a851eb21c4-c",
            "https://i.pinimg.com/originals/29/d9/91/29d9918df3645ef04ccfc8a01bfb25ad.jpg"]
        return (
            <div className='d-flex flex-wrap'>
                {this.state.arr.map(el => <figure class="snip0056" key={el._id}>
                    <figcaption>
                        <h2><span>{el.name}</span></h2>
                        <h2>{el.email}</h2>
                        <h2>{el.tel}</h2>
                        <h2>{el.birthday.slice(0, 10)}</h2>
                        <h2>{el.class}</h2>

                    </figcaption><img src={src[i++]} alt="sample8" style={{ width: '250px', height: '200px' }} />
                    <div class="position">

                        <h5 style={{ color: '#dc006c' }}>{m[(Math.random() * m.length) | 0]}</h5>

                    </div>
                </figure>)}
            </div>

            // <div className="box" >
            //     {this.state.arr.map(el => <div className="card" key={el._id}>
            //         {console.log(el)}
            //         <div className="imgBx">
            //             <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
            //         </div>
            //         <div className="details">
            //             <h2>{el.name}<br /><span>{el.email}</span></h2>
            //         </div>
            //     </div>)}
            //     <div className="card">
            //         <div className="imgBx">
            //             <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
            //         </div>
            //         <div className="details">
            //             <h2>SomeOne Famous<br /><span>Director</span></h2>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="imgBx">
            //             <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
            //         </div>
            //         <div className="details">
            //             <h2>SomeOne Famous<br /><span>Producer</span></h2>
            //         </div>
            //     </div>

            //     <div className="card">
            //         <div className="imgBx">
            //             <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
            //         </div>
            //         <div className="details">
            //             <h2>SomeOne Famous<br /><span>Actor</span></h2>
            //         </div>
            //     </div>

            // </div>
        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, null)(Prof);
