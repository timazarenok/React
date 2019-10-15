import React, {Component} from 'react'

class AddPerson extends Component {
    state = {
        name: ''
    };

    nameChange = (event) => {
      this.setState({
          name: event.target.value
      })
    };

    submit = (event) => {
        event.preventDefault();
        const {name} = this.state;
        this.props.addNewPerson(name);
        this.setState({name: ''});
    };

    render() {
        const {name} = this.state;
        return(
            <div onSubmit={this.submit}>
                <form>
                    <input value={name}
                            onChange={this.nameChange}
                            required
                            placeholder={'Please input ur name'}/>
                </form>
            </div>
        );
    }
}

export default AddPerson;