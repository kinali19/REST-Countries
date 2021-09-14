import { InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

function Search(props) {
    return (
        <>
            <Row className="d-flex">
                <Col xs={12} xl={4}>
                    <div className="pb-5 search-container">
                        <InputGroup size="lg" className="shadow rounded">
                            <InputGroup.Text className="p-4" id="inputGroup-sizing-lg" ><FaSearch /></InputGroup.Text>
                            <FormControl aria-label="Large" onKeyUp={props.onHandleSearch} placeholder="Search for Country..." aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </div>
                </Col>
                <Col xs={12} xl={8} className="d-flex justify-content-xl-end">
                        <select className="dropdown shadow mb-5" title="Filter by Region" onChange={props.filterByRegion} >
                            <option value="">Filter by Region</option>
                            {props.regions && props.regions.map((ele, index) => {
                                return ele && <option key={index} value={ele}>{ele}</option>
                            })}
                        </select>
                </Col>
            </Row>
        </>
    )
}

export default Search