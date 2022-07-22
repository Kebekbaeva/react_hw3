import React from 'react';

class NamePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.array.map((user,key)=> <li key={key}>{user}</li>)}
                </ul>
            </div>
        )
    }
}

export default NamePage;