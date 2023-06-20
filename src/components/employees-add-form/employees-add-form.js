import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            wrong: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) 
        return this.setState({
                    wrong: true
                });

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            wrong: false

        })
    }

    render() {
        const {name, salary, wrong} = this.state;
        const wrongInput = wrong ? {border: '2px solid red'} : null;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="First name?"
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}
                        style={wrongInput}/>
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary?"
                        name="salary" 
                        value={salary}
                        onChange={this.onValueChange}
                        style={wrongInput}/>
                    <button 
                        type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm; 