import {Component} from 'react'
import './employee-add-form.css'

class EmployeeAddForm extends Component{

    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    static onLog = () => {
        console.log('dot')
    }

    render () {
        const {name,salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                      onSubmit={this.onSubmit}>
                    <input type="text"
                           required
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           required
                           className="form-control new-post-label"
                           placeholder="ЗП в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="form-control new-post-label">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeeAddForm