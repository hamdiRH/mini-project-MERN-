
import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    WeekView,
    Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";


const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/Sscheduling')
            .then(res => {
                this.setState({ data: res.data })
            })
            .then(res => this.setState({ fetch: true }))
            .catch(error => { console.log(error) }
            )
    }


    render() {


        return (
            <MuiThemeProvider theme={theme}>
                <Paper>
                    <Scheduler data={this.state.data}>
                        <ViewState currentDate="2019-05-24" />
                        <WeekView startDayHour={9} endDayHour={17} />
                        <Appointments />
                    </Scheduler>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App
