import React from "react";
import { message } from 'antd';
import * as config from '../utils/config'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default class BindCountryDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country_name: props.name,
            loading: false,
            errored: false,
            countryDetails: null,
            borderCountries: [],
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

    //get country by name using api
    performAPICall = async (url) => {
        let response = {};
        let errored = false;

        this.setState({
            loading: true,
        });

        try {
            response = await (await fetch(`${config.apiEndpoint}/${url}`)).json();
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

    getCountryDetail = async (name) => {
        const country_url = `name/${name}?fullText=true`
        let response = await this.performAPICall(country_url)
        if (response) {
            this.setState({ countryDetails: response[0] })
            if (response[0].borders.length > 0)
                this.getBorderCountries()
        }
    }

    getBorderCountries = async () => {
        if (this.state.countryDetails) {
            let bCountries = this.state.countryDetails.borders.join(';');
            const code_url = `alpha?codes=${bCountries}`

            let response = await this.performAPICall(code_url)
            this.setState({ borderCountries: response })
            return response
        }
    }

    getCountryDetailElement = (data) => {
        return (
            <>
                <Col xs={24} sm={12} xl={6} className="mb-5 me-5">
                    <Image src={data.flag} alt="" />
                </Col>
                <Col xs={24} sm={12} xl={5} className="mb-5">
                    <h4 className="fw-bold">{data.name}</h4>
                    <ListGroup className="my-5 d-flex flex-wrap" >
                        <Row>
                            <Col xs={24} md={6} xl={6}>
                                <ListGroup.Item>Native Name: <span>{data.nativeName}</span></ListGroup.Item>
                                <ListGroup.Item>Population: <span>{data.population}</span></ListGroup.Item>
                                <ListGroup.Item>Region: <span>{data.region}</span></ListGroup.Item>
                                <ListGroup.Item>Sub Region: <span>{data.subregion}</span></ListGroup.Item>
                                <ListGroup.Item>Capital: <span>{data.capital}</span></ListGroup.Item></Col>
                            <Col xs={24} md={6} xl={6}>
                                <ListGroup.Item>Top Level Domain: <span>{data.topLevelDomain}</span></ListGroup.Item>
                                <ListGroup.Item>Currencies: <span>{data.currencies && data.currencies[0].name}</span></ListGroup.Item>
                                <ListGroup.Item>Languages: <span>{data.languages && Array.prototype.map.call(data.languages, s => s.name).toString()}</span></ListGroup.Item></Col>
                        </Row>
                    </ListGroup>
                    {this.state.borderCountries.length > 0 ?
                        <div className="d-md-flex  align-items-center fw-bold">Borders:
                            <div class="flex-wrap d-flex">
                                {this.state.borderCountries.map((country, index) => {
                                    return (
                                        <Link to={`/detail/${country.name}`} key={index}>
                                            <Button className="mt-4 ms-4 p-2 p-md-3">{country.name}</Button>
                                        </Link>
                                    )
                                }
                                )}
                            </div>
                        </div>
                        : ''}
                </Col>
            </>
        )
    }

    componentDidMount() {
        this.getCountryDetail(this.state.country_name)
    }

    componentDidUpdate(prevProps) {
        let isEnter = false;
        if (prevProps.name !== this.props.name && !isEnter) {
            isEnter = true;
            this.getCountryDetail(this.props.name)
            let arr = [{'prev': prevProps.name, 'current': this.props.name}]
            this.props.handleClick(arr)
        }
    }

    render() {
        let data = this.state.countryDetails
        return (
            <Row>

                {this.state.countryDetails ? (
                    <>
                        {this.getCountryDetailElement(data)}
                    </>
                ) : this.state.loading ? (
                    <div className="loading-text">Loading country...</div>
                ) : (
                    <div className="loading-text">Not found any record!</div>
                )}
            </Row>
        )
    }
}