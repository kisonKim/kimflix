import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error : null,
        loading : true
    }

    async componentDidMount() {
        try {
            //API로 nowPlaying 받아오기
            const {data: {results:nowPlaying}} = await moviesApi.nowPlaying();

            //API로 upcoming 받아오기
            const {data: {results:upcoming}} = await moviesApi.upcoming();

            //API로 popular 받아오기
            const {data: {results:popular}} = await moviesApi.popular();
            
            this.setState({nowPlaying, upcoming, popular});

        } catch {
            this.setState({
                error : "Can't find movie informations.."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        return (
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular}
                error={error}
                loading={loading} />
        )
    }
}