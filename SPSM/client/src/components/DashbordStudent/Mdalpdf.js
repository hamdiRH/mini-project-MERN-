import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      numPages: null, pageNumber: 1
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));


  render() {
    const { pageNumber, numPages } = this.state;
    const { file } = this.props
    const datafile = './uploads/' + file
    return (
      <div>
        <Button color="danger" className='mx-3' style={{ width: '90px' }} onClick={this.toggle}>Open</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>title</ModalHeader>
          <ModalBody>




            <div>
              <nav>
                <button onClick={this.goToPrevPage}>Prev</button>
                <button onClick={this.goToNextPage}>Next</button>
                {datafile}
              </nav>

              <div style={{ width: 450 }}>
                <Document
                  file={datafile}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} width={450} />
                </Document>
              </div>

              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;