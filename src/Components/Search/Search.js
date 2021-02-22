import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import errorImage from '../../Images/pexels-alleksana-4271933.jpg'

import herbs from '../../herbs.json';
import Card from '../Card/Card';


const SearchContainer = styled.div`
    width:100vw;
    text-align: center;

    h4 {
        text-decoration: underline;
    }

    button {
        border: none;
        border-radius: none;
        cursor: pointer;
        background: white;
        color: black;
    }

    button:hover {
        background-color: black;
        color: white;
    }
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    input {
        width: 40%;
        height: 2rem;
        border: none;
        color: grey;
        text-align: center;
        border-radius: none;
    }
`;



const RenderContainer = styled.div`
    width: 100vw;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    div{
        margin-bottom: 1rem;
    }

`;

const NoResult = styled.div`
    width: 100vw;
    height:100vh;

    img{
        width:50%;
        height:auto;
    }
`;

const Search = () => {
    const [searchValue, setSearchValue ] = useState('');
    const [results, setResults ] = useState([]);
    const [searchBoolean, setSearchBoolean ] = useState(true);
    const [clickedView, setClickedView] = useState(false);
    

    useEffect(() => {
        const handleSearch = () => {
            let filteredSearch = herbs.filter( herb => {return herb.herb.toLowerCase().includes( searchValue.toLowerCase())});
        
            if(!filteredSearch[0]) {
                setSearchBoolean(false);
            }else{
                setSearchBoolean(true);
                setResults(filteredSearch);
            }
        }

        handleSearch();

    }, [searchValue])


    //handles input onChange
    const handleOnChange = (e) => {
       let searchWord = e.target.value;
        setSearchValue(searchWord);
    }
    
    const clickValue = (value) => {
        
        if(value[0]) {
            let val = value;

            setSearchValue(val);
            setClickedView(true);
            document.documentElement.scrollTop = 0
        }
    }

    function handleGoBack(){
        setSearchValue('');
        setClickedView(false);
    }
   
    const CardMap = () => {
        return (
            <>{results.map(herb => (
                    <div><Card 
                    key={herb.id}
                    name={herb.herb}
                    treatment={herb.treatment}
                    properties={herb.properties}
                    uses={herb.uses}
                    blendWith= {herb.blendWith}
                    latin={herb.latin}
                    warning={herb.warning}
                    clicked={clickedView}
                    cardValue={clickValue}
                    /> </ div>
            
                
                ))}</>)
    }
    return (
        <SearchContainer>
            
            <InputContainer >
                <input input='text' value={searchValue}  disabled={clickedView ? true : false} onChange={handleOnChange}/>
            </InputContainer>
            {clickedView && <button onClick={handleGoBack}>Go back</button>}
            {searchBoolean ? <RenderContainer> {CardMap()} </RenderContainer> : <NoResult><p>No results containing '{searchValue}'</p><img src={errorImage} alt='error'></img></NoResult>}
                
                
            
        </SearchContainer>
    )
}

export default Search;