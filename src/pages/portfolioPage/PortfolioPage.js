import React from 'react';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.user.map((user,key)=> <li key={key}>{user}</li>)}
                </ul>
            </div>
        )
    }
}

export default PortfolioPage;