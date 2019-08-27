import React from "react";
import DatePicker from "react-datepicker";
import Modal from "./ModalAddSch"
import axios from "axios"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            arr: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    componentWillMount() {

        axios.get("/api/Sscheduling")
            .then(res => {
                this.setState({ arr: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let i = 0;

        return (<div className="mx-5 my-3">


<h3 className="text-center mb-5" style={{ color: '#fa3380' }}>Scheduling Management </h3>

            <div className="d-flex flex-row-reverse">
                <Modal />
            </div>

            
                <table id="dtBasicExample" className="table table-striped table-bordered  mt-5 shadow-lg p-3 mb-5 bg-white rounded" cellspacing="0" width="100%">
          
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="th-sm">User
      </th>
                        <th className="th-sm">Date
      </th>
                        <th className="th-sm">Time Start
      </th>
                        <th className="th-sm">Time End
      </th>
                        <th>Title</th>
                        <th className="th-sm">Delete
      </th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.arr.map(el => <tr >
                        <th>{i = i + 1}</th>
                        <td>Student</td>
                        <td>{el.startDate && el.startDate.slice(0, 10)}</td>
                        <td>{el.startDate && el.startDate.slice(11, 16)}</td>
                        <td>{el.endDate && el.endDate.slice(11, 16)}</td>


                        <td>{el.title}</td>
                        <td ><i className="fas fa-trash-alt deleteb"
                            onClick={() => {

                                axios.delete(`/api/Sscheduling/${el._id}`)
                                    .then(res => axios.get("/api/Sscheduling")
                                        .then(res => {
                                            this.setState({ arr: res.data });
                                        }))
                                    .catch(error => {
                                        console.log(error);
                                    })
                            }}></i></td>
                    </tr>)}


                </tbody>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th className="th-sm">User
      </th>
                        <th className="th-sm">Date
      </th>
                        <th className="th-sm">Time Start
      </th>
                        <th className="th-sm">Time End
      </th>
                        <th>Title</th>
                        <th className="th-sm">Delete
      </th>
                    </tr>

                </tfoot>
            </table>
        </div>)

    }
}
