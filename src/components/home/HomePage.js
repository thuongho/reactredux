import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Goals</h1>
                <p>When you are committed to your dreams...</p>
                <Link to="about" className="btn btn-primary btn-lg">About Us</Link>
            </div>
        );
    }
}

export default HomePage;