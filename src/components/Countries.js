import React from "react";
import { message, Row, Col } from "antd";
import * as config from '../utils/config'
import CountryList from './CountryList'
import Search from "./Search";
import '../styles/Country.css'

const LIMIT = 10;

export default class Countries extends React.Component {
    constructor(props) {
        super(props)
        this.countries = []
        this.state = {
            showMore: true,
            setList: [],
            index: LIMIT,
            regions: [],
            filteredbyRegion: [],
            filteredbyCountry: []
        }
    }

    validateResponse = (errored, response) => {
        if (errored || (!response.length && !response.message)) {
            message.error(
                "Could not fetch countries. Check that the backend is running, reachable and returns valid JSON."
            );
            return false;
        }

        if (!response.length) {
            message.error(response.message || "No countries found in database");
            return false;
        }

        return true;
    };

    //get all countries using api
    performAPICall = async () => {
        let response = {};
        let errored = false;

        this.setState({
            loading: true,
        });

        try {
            response = await (await fetch(`${config.apiEndpoint}/all`)).json();
        } catch (e) {
            errored = true;
        }

        this.setState({
            loading: false,
        });

        if (this.validateResponse(errored, response)) {
            return response;
        }
    };

    componentDidMount() {
        this.getCountries()
        document.addEventListener('scroll', this.trackScrolling);
    }

    getCountries = async () => {
        let response = await this.performAPICall()
        if (response) {
            this.countries = response
            this.setState({ setList: response.slice(0, LIMIT) })
            this.getRegions()
        }
    }

    getRegions = () => {
        let regions = this.countries.reduce((unique, item) => {
            return unique.includes(item.region) ? unique : [...unique, item.region];
        }, []);
        this.setState({ regions: regions })
    }

    getCountryElement = (country, index) => {
        return (
            <Col  sm={24} md={12} xl={6} key={index} className="mb-5">
                <CountryList
                    data={country}
                />
            </Col>
        );
    };

    loadMore = () => {
        let newList = []
        const newIndex = this.state.index + LIMIT;
        let newShowMore = newIndex < (this.countries.length - 1);

        if (this.state.filteredbyRegion.length > 0) {
            newList = this.state.setList.concat(this.state.filteredbyRegion.slice(this.state.index, newIndex));
            newShowMore = newIndex < (this.state.filteredbyRegion.length - 1);
        }
        else if (this.state.filteredbyCountry.length > 0) {
            newList = this.state.setList.concat(this.state.filteredbyCountry.slice(this.state.index, newIndex));
            newShowMore = newIndex < (this.state.filteredbyCountry.length - 1);
        }
        else
            newList = this.state.setList.concat(this.countries.slice(this.state.index, newIndex));

        this.setState({
            index: newIndex,
            setList: newList,
            showMore: newShowMore
        })
    }

    onHandleSearch = (event) => {
        if (event.target.value.length >= 3) {
            const filtered = this.countries.filter((ele) => {
                if (ele.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
                    return ele
            })
            this.setState({ setList: filtered.slice(0, LIMIT), filteredbyCountry: filtered })
            this.setStateforFilter(filtered)
        }
        else {
            this.backtoDefaultState()
        }
    }

    filterByRegion = (event) => {
        if (event.target.value) {
            const filtered = this.countries.filter((ele) => {
                if (ele.region.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
                    return ele
            })
            this.setState({ setList: filtered.slice(0, LIMIT), filteredbyRegion: filtered })
            this.setStateforFilter(filtered)
        }
        else {
            this.backtoDefaultState()
        }
    }

    setStateforFilter = (filtered) => {
        if (filtered.length > LIMIT) {
            this.setState({ showMore: true })
        }
        else
            this.setState({ showMore: false })

        if (filtered.length > 0) {
            this.setState({ index: LIMIT })
        }
    }

    backtoDefaultState = () => {
        this.setState({ 
            setList: this.countries.slice(0, LIMIT),
            showMore: true,
            index: LIMIT,
            filteredbyRegion : [],
            filteredbyCountry : []
        })
    }

    render() {
        return (
            <div className="country-home p-5">
                <Search onHandleSearch={this.onHandleSearch} regions={this.state.regions} filterByRegion={this.filterByRegion} />
                <Row>
                    {this.countries.length !== 0 ? (
                        this.state.setList.map((country, index) =>
                            this.getCountryElement(country, index)
                        )
                    ) : this.state.loading ? (
                        <div className="loading-text">Loading countries...</div>
                    ) : (
                        <div className="loading-text">No Country to list</div>
                    )}
                </Row>
                {this.state.showMore && <button className=" loadMore" onClick={this.loadMore}> Load More </button>}
            </div>
        )
    }
}