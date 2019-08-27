import React from 'react';
import axios from 'axios'
import Modals from './modalsProf'

class DatatablePage extends React.Component {
    state = {
        Prof: []
    }
    componentWillMount() {
        axios.get("/api/prof")
            .then(res => {
                this.setState({ Prof: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        let i = 0;

        return (
            <div className="mx-5 my-5">
               <h3 className="text-center mb-5" style={{ color: '#fa3380' }}>Instructor Management </h3>
                <table id="dtBasicExample" className="table table-striped table-bordered  mt-5 shadow-lg p-3 mb-5 bg-white rounded" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>#
                                </th>
                            <th className="th-sm">Name
      </th>
                            <th className="th-sm">Email
      </th>
                            <th className="th-sm">Adresse
      </th>
                            <th className="th-sm">Tel
      </th>
                            <th className="th-sm">Class
      </th>
                            <th className="th-sm">Edit
      </th>
                            <th className="th-sm">Delete
      </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Prof.map(el =>

                            <tr key={el._id}>
                                <th>{i++}</th>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.adresse}</td>
                                <td>{el.tel}</td>
                                <td>{el.class}</td>

                                <td><Modals el={el} /></td>

                                <td><i className="fas fa-trash-alt deleteb" onClick={() => {

                                    axios.delete(`/api/prof/${el._id}`)
                                        .then(res => axios.get("/api/prof")
                                            .then(res => {
                                                this.setState({ Prof: res.data });
                                            }))
                                        .catch(error => {
                                            console.log(error);
                                        })
                                }}></i></td>
                            </tr>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#
                                </th>
                            <th className="th-sm">Name
      </th>
                            <th className="th-sm">Email
      </th>
                            <th className="th-sm">Adresse
      </th>
                            <th className="th-sm">Tel
      </th>
                            <th className="th-sm">Class
      </th>
                            <th className="th-sm"> Edit
      </th>
                            <th className="th-sm"> Delete
      </th>
                        </tr>
                    </tfoot>
                </table></div>
        )

    }
}

export default DatatablePage;