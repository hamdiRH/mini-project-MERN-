import React from 'react';
import axios from 'axios'
import Modals from './modals'
import './admin.css'

class DatatablePage extends React.Component {
    state = {
        students: []
    }
    componentWillMount() {
        axios.get("/api/Student")
            .then(res => {
                this.setState({ students: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {


        let i = 0;
        return (
            <div className="mx-5 my-3">
                <h3 className="text-center mb-5" style={{ color: '#fa3380' }}>Student Management </h3>
                <table id="dtBasicExample" className="table table-striped table-bordered  mt-5 shadow-lg p-3 mb-5 bg-white rounded" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="th-sm">Name
      </th>
                            <th className="th-sm">Email
      </th>
                            <th className="th-sm">birthday
      </th>
                            <th className="th-sm">Gender
      </th>
                            <th className="th-sm">Adresse
      </th>
                            <th className="th-sm">Class
      </th>
                            <th className="th-sm"> Guardie Name
      </th>
                            <th className="th-sm"> Guardienemail
      </th>
                            <th className="th-sm"> Guardien Tel
      </th>
                            <th className="th-sm"> Edit
      </th>
                            <th className="th-sm"> Delete
      </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(el =>

                                <tr key={el._id}>
                                    <th>{i = i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.birthday}</td>
                                    <td>{el.gender}</td>
                                    <td>{el.adresse}</td>
                                    <td>{el.classSection}</td>
                                    <td>{el.guardienName}</td>
                                    <td>{el.guardienEmail}</td>
                                    <td>{el.guardienTel}</td>
                                    <td><Modals el={el} refrech={this.componentWillMount} /></td>
                                    <td><i className="fas fa-trash-alt deleteb"

                                        onClick={() => {

                                            axios.delete(`/api/Student/${el._id}`)
                                                .then(res => axios.get("/api/Student")
                                                    .then(res => {
                                                        this.setState({ students: res.data });
                                                    }))
                                                .catch(error => {
                                                    console.log(error);
                                                })
                                        }}></i></td>
                                </tr>
                            )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th className="th-sm">Name
      </th>
                            <th className="th-sm">Email
      </th>
                            <th className="th-sm">birthday
      </th>
                            <th className="th-sm">Gender
      </th>
                            <th className="th-sm">Adresse
      </th>
                            <th className="th-sm">Class
      </th>
                            <th className="th-sm"> Guardie Name
      </th>
                            <th className="th-sm"> Guardienemail
      </th>
                            <th className="th-sm"> Guardien Tel
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

export default DatatablePage
