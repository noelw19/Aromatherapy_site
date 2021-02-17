import React, {useState} from 'react';
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

`;

const Input = styled.input`
    width: 100%;
    border: none;
    color: grey;
    text-align: center;
`;

const Button = styled.button`
    border: none;
    background-image: linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%);
    color: white;
`;

const RenderContainer = styled.div`
    

`;

const Search = () => {
    const [searchValue, setSearchValue ] = useState('what do you want to see');
    return (
        <SearchContainer>
            <InputContainer>
                <Input input='text' value={searchValue}/>
                <Button type='button' >Search</Button>
            </InputContainer>
            <h4>Search Results</h4>
            <RenderContainer>
                {herbs.map(herb => (
                <Card 
                    name={herb.herb}
                    treatment={herb.treatment}
                    properties={herb.properties}
                    uses={herb.uses}/>
            ))}</RenderContainer>
            
        </SearchContainer>
    )
}

export default Search;