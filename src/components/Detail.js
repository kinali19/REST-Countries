import {useState} from 'react'
import {
    useParams, Link
} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import {FaArrowLeft} from 'react-icons/fa';
import '../styles/Country.css'
import BindCountryDetails from './BindCountryDetail';

export default function CountryDetail() {
    const { name } = useParams();
    const [prevCountry, changeCountry] = useState("/")

   const handleClick = (arr) => {
        if(arr && arr[0].prev)
            changeCountry(`/detail/${arr[0].prev}`)
        if(prevCountry.indexOf(arr[0].current) > -1)  
            changeCountry(`/`)  
   }

    return (
        <div className="detail-view p-5">
            <Link to={prevCountry}><Button className="shadow mt-3 mb-5"><FaArrowLeft />&nbsp; Back</Button></Link>
            <BindCountryDetails name={name} handleClick={handleClick}/>
        </div>
    )
}