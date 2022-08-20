import { Component } from 'react';
import { v4 as uuidV4} from 'uuid';

export class BaseComponent extends Component {
    componentId = uuidV4();

    allowedAttributes = [
        'loading'
    ];

    baseProps = {
        loading: false
    }

    constructor(props) {
        super(props)
        this.initAttributes();
    }

    renderAttributes() {
        return(
            
        )
    }

    getXProps(key = null) {

        if(key) {
            return this.props.xprops[key];
        }
        return this.props.xprops;
    }

    setXProps(key = null, value, fu = true) {

        if(key) {
            this.getXProps()[key] = value;
        }
        else {
            this.props.xprops = value;
        }

        if(fu) {
            this.forceUpdate();
        }
    }

    extendProps(propsObj = this.baseProps) {
        const props = this.props;
        Object.keys(propsObj).forEach(key => {
            if(!props.xprops[key]) {
                props.xprops[key] = propsObj[key];
            }
        });
        return props;
    }
    
    render() {
        return this.doRender();
    }
    doRender() {};
}
