import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import herbs from '../../herbs.json';
import Card from '../Card/Card';


const SearchContainer = styled.div`
    text-align: center;

    h4 {
        text-decoration: underline;
    }
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    input {
        width: 80%;
        height: 2rem;
        border: none;
        color: grey;
        text-align: center;
        border-radius: none;
    }

    button {
        border: none;
        background-image: linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%);
        color: white;
    }

`;



const RenderContainer = styled.div`
    width: 100vw;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;

`;

const Search = () => {
    const [searchValue, setSearchValue ] = useState('');
    const [results, setResults ] = useState([]);
    const [searchBoolean, setSearchBoolean ] = useState(true);
    

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



    const handleOnChange = (e) => {
       let searchWord = e.target.value;
        setSearchValue(searchWord);

    }

    //add some text if search results dont match any herbs
    

    return (
        <SearchContainer>
            
            <InputContainer >
                <input input='text' value={searchValue}  onChange={handleOnChange}/>
            </InputContainer>

            
                {searchBoolean ? <RenderContainer> {results.map(herb => (
                <Card
                    key={herb.id}
                    name={herb.herb}
                    treatment={herb.treatment}
                    properties={herb.properties}
                    uses={herb.uses}
                    blendWith= {herb.blendWith}
                    latin={herb.latin}
                    warning={herb.warning}
                    />
            ))} </RenderContainer> : <p>No results containing '{searchValue}'</p>}
                
            
        </SearchContainer>
    )
}

export default Search;