import React from 'react'
import './Tchat.css'


class Tchat extends React.Component {
    render() {
        return (

            <div class="container ">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 ">
                        <div class="panel panel-primary border border-primary">
                            <div class="panel-heading bg-primary" style={{ height: '70px' }}>
                                <i class="fas fa-comments mx-3 mt-2" style={{ color: 'white', fontSize: '40px' }}></i>
                                <span className="font-weight-bold text-light" style={{ fontSize: '30px' }}>Chat</span>
                            </div>
                            <div class="panel-body">
                                <ul class="chat"> </ul>
                            </div>
                            <div class="panel-footer">
                                <div class="input-group">
                                    <input id="Mensaje" type="text" class="form-control input-sm" placeholder="Escribe un mensaje..." />
                                    <span class="input-group-btn">
                                        <button class="btn btn-warning btn-sm" id="btnEnviar" style={{ height: '50px', width: '100px' }}>
                                            send</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


export default Tchat
