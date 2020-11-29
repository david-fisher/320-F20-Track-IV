import React, {Component} from 'react';
import axios from 'axios';

const baseURL = 'http://e5ac4bbde7ef.ngrok.io/api/v1'; // change this if different tunnel link

let TOKEN = "abcdefghijklmnopqrstuvwxyz";
let config = {
headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br'
    }
};

class Calls extends Component{
    constructor(props){
        super(props);
        this.getAuthenticatedInstructorDashboardSummary = this.getAuthenticatedInstructorDashboardSummary.bind(this);
        this.createNewSimulation = this.createNewSimulation.bind(this);
    }
    getAuthenticatedInstructorDashboardSummary(){
        axios
            .get(baseURL + '/dashboard', config)
            .then(res => {
                let data = res.data;
                this.setState({...data});
            });
    }

    createNewSimulation(){
        axios 
            .post(baseURL + '/simulation', params, config)
            .then(res => {
                this.setState(prevState => {
                    drafts: [...prevState.drafts, res.data]
                });
            });
    }
    
    deleteSimulation(){
        axios 
            .delete(baseURL + `/simulation/${this.state.sim_id}`, config)
            .then(res=> console.log(res.data));
    }

    startSimulation(){
        axios
            .post(baseURL + `/simulation/${this.state.sim_id}/start`, {/*array of uid*/},config)
    }

    closeSimulation(){
        axios
            .post(baseURL + `/simulation/${this.state.sim_id}/close`, {/*params*/},config)
    }

    getSimulationIntroduction(){
        axios
            .get(baseURL + `/simulation/${this.state.sim_id}/introduction`, config)
            .then(res => {
                this.setState(state => {
                });
            });
    }

    addSimulationIntialIntroduction(){
        axios
            .post(baseURL + ` /simulation/${this.state.sim_id}/introduction`, config)
    }

    getInitialReflection(){
    }

    getInitialReflectionResponses(){

    }

    getInitialAction(){

    }

}
 
export default Calls;