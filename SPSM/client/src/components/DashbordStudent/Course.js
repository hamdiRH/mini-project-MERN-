import React from 'react'
import axios from 'axios'
import ModalPdf from './Mdalpdf'
class Course extends React.Component {
    state = {
        arr: []
    }
    componentWillMount() {
        axios.get('/getfile')
            .then(res => {
                this.setState({ arr: res.data })
            })
            .catch(error => { console.log(error) }
            )
    }
    render() {
        // <img src='./img/pdf.png' style={{ width: '150px', height: '150px' }} />
        // <img src='./img/ppt.png' style={{ width: '150px', height: '150px' }} />
        // <img src='https://cdn3.iconfinder.com/data/icons/file-and-folder-7/48/81-512.png' style={{ width: '150px', height: '150px' }} />
        // <img src='https://www.serasta.nl/images/word.png' style={{ width: '150px', height: '150px' }} />
        return (
            <div className='d-flex flex-wrap' >
                {
                    this.state.arr.map(el =>
                        <div class="card border-info my-3 mx-5 " style={{ maxWidth: '18rem' }}>
                            <div class="card-header text-info font-weight-bold text-center">{el}</div>
                            <div class="card-body text-info text-center">
                                {el.slice(-3) === 'pdf' && <img alt='cour' src='./img/pdf.png' style={{ width: '150px', height: '150px' }} />}
                                {el.slice(-4) === 'pptx' && <img alt='cour' src='./img/ppt.png' style={{ width: '150px', height: '150px' }} />}
                                {el.slice(-3) === 'txt' && <img alt='cour' src='https://cdn3.iconfinder.com/data/icons/file-and-folder-7/48/81-512.png' style={{ width: '150px', height: '150px' }} />}
                                {el.slice(-4) === 'docx' && <img alt='cour' src='https://www.serasta.nl/images/word.png' style={{ width: '150px', height: '150px' }} />}
                                <div className="d-flex mt-5 text-center">
                                    <ModalPdf file={el} />
                                    <a href={`./uploads/${el}`} download={el}><button className='btn btn-danger ml-2'>download</button></a>

                                </div>
                            </div>
                        </div>
                    )}




                {/* {
                    this.state.arr.map(el =>
                        <div className='mx-5 my-3 text-center border border-primary' style={{ width: '10%' }}>

                            {el.slice(-3) === 'pdf' && <img src='./img/pdf.png' style={{ width: '150px', height: '150px' }} />}
                            {el.slice(-4) === 'pptx' && <img src='./img/ppt.png' style={{ width: '150px', height: '150px' }} />}
                            {el.slice(-3) === 'txt' && <img src='https://cdn3.iconfinder.com/data/icons/file-and-folder-7/48/81-512.png' style={{ width: '150px', height: '150px' }} />}
                            {el.slice(-4) === 'docx' && <img src='https://www.serasta.nl/images/word.png' style={{ width: '150px', height: '150px' }} />}

                            <a href={`./uploads/${el}`} download={el}><p className='w-100  '>{el}</p></a>
                            <div className="d-flex ">
                                <ModalPdf />
                                <button className='btn btn-danger ml-2'>download</button>
                            </div>
                        </div>
                    )
                } */}
            </div >

        )
    }
}


export default Course