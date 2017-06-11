import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.prev = props.prev;
        this.next = props.next;
    }

    render() {
        return (
            <Pager>
                { this.prev &&
                    <Pager.Item href="#">{this.prev}</Pager.Item>
                }
                {' '}
                { this.next && 
                    <Pager.Item href="#">{this.next}</Pager.Item>
                }
            </Pager>
        );
    }

}

export default Navigation;