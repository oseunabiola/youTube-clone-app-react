import React from 'react';

import { Paper, TextField } from '@material-ui/core';

export default class SearchBar extends React.Component {
    state = {
        searchQuery : ''
    }
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        
        onFormSubmit(searchTerm);
    }

    render() {
        return (
            <Paper elevation={6} style={{padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        );
    };
}