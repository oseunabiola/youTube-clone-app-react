import React from 'react';
import Axios from 'axios'

import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';

export default class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('Maybe another time - One minute short film');
    }

    handleSubmit = async (searchTerm) => {
        const response = await Axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyACc-G8t3FnVCaIl3s4r5uxS13wQkLaI9M',
                q: searchTerm
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render()  {
        const { videos, selectedVideo } = this.state;
        return (
            <Grid justify="center" container>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Search Bar */}
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            {/* Video details */}
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={ videos } onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
