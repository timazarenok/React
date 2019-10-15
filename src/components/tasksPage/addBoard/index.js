import React, {Component} from 'react'

class AddBoard extends Component {
    state = {
        label: '',
        text: '',
        startData: '',
        finalData: ''
    };

    labelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    textChange = (event) => {
        this.setState({
            text: event.target.value
        })
    };

    startDataChange = (e) => {
        this.setState({
            startData: e.target.value
        })
    };

    finalDataChange = (e) => {
        this.setState({
            finalData: e.target.value
        })
    };

    submit = (event) => {
        event.preventDefault();
        const {label, text, startData, finalData} = this.state;
        this.props.addItem(label, text, startData, finalData);
        this.setState({
            label: '',
            text: '',
            startData: '',
            finalData: ''
        })
    };

    render() {
        const {label, text, startData, finalData} = this.state;
        return(
            <div onSubmit={this.submit}>
                <form>
                    <input value={label}
                            onChange={this.labelChange}
                            required
                            placeholder={'write ur label here'}/>
                </form>
                <form>
                    <input value={text}
                            onChange={this.textChange}
                            required
                            placeholder={'write ur task here'}/>
                </form>
                <form>
                    <input type='date'
                            value={startData}
                            onChange={this.startDataChange}/>
                </form>
                <form>
                    <input type='date'
                            value={finalData}
                            onChange={this.finalDataChange}/>
                </form>
            </div>
        );
    }
}

export default AddBoard;