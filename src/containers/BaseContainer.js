import { Component } from 'react';
import LoaderSpinner from '../components/loader/loaderSpinner';
import {v4 as uuidv4} from 'uuid';


export class BaseContainer extends Component {
    containerId = uuidv4();

    state = {
        loading: true
    };

    extendInitialState(stateObj) {
        const state = this.state;
        Object.keys(stateObj).forEach(key => {
            state.key = stateObj[key];
        });
        return state;
    }

    async componentDidMount() {}
    async componentDidUpdate() {}
    async componentDidCatch() {}
    async componentWillUnmount() {}

    render() {
        return this.state.loading
            ? this.renderLoading()
            : this.doRender();
    }
    doRender() {}

    renderEmpty(expecting, id) {
        id = id ? id : this.containerId;
        expecting = expecting ? expecting : this.constructor.name;
        return <div hidden id={id} data-missing={expecting} className='empty'></div>
    }

    renderLoading(expecting, id) {
        id = id ? id : this.containerId;
        expecting = expecting ? expecting : this.constructor.name;
        return <div id={id} data-loading={expecting} className="loading">
            <LoaderSpinner />
        </div>
    }

    setinitialState() {this.setState(this.state);}


    isReady() {
        this.setState({loading: false});
    }


}
