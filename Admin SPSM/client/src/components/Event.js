import React from 'react'
import './admin.css'
import axios from 'axios';
import Modal from './ModalAddEvent'

class Event extends React.Component {
    state = {
        arr: []
    }
    componentWillMount = () => {
        axios.get("api/ReportS")
            .then(res => {
                this.setState({ arr: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let i = 0;
        return (

            <div className="mx-5 my-3">
               <h3 className="text-center mb-5" style={{ color: '#fa3380' }}>Event & News Management </h3>
               <div className="d-flex flex-row-reverse">
                <Modal />
                </div>
                <table id="dtBasicExample" className="table table-striped table-bordered  mt-5 shadow-lg p-3 mb-5 bg-white rounded" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="th-sm">Name
              </th>
                            <th className="th-sm">Email
              </th>
                            <th className="th-sm">Subject
              </th>
                            <th className="th-sm">Report
              </th>
                            <th className="th-sm"> Delete
              </th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.arr.map(el =>
                            <tr >
                                <th>{i = i + 1}</th>
                                <td>{el.user}</td>
                                <td>{el.email}</td>
                                <td>{el.subject}</td>
                                <td>{el.ReportS}</td>
                                <td><i className="fas fa-trash-alt deleteb"
                                    onClick={() => {

                                        axios.delete(`/api/ReportS/${el._id}`)
                                            .then(res => axios.get("api/ReportS")
                                                .then(res => {
                                                    this.setState({ arr: res.data });
                                                }))
                                            .catch(error => {
                                                console.log(error);
                                            })
                                    }}
                                >
                                    
                                </i>

                                </td>

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
                            <th className="th-sm">Subject
              </th>
                            <th className="th-sm">Report
              </th>
                            <th className="th-sm"> Delete
              </th>
                        </tr>

                    </tfoot>
                </table></div>
        )

    }
}

export default Event