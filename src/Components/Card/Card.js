import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background: white;
    width: 100vw;
    height: 100%;
    padding-top: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem 0 1rem;
    
    
    h1{
        background-image: linear-gradient(to right, #9890e3 0%, #b1f4cf 100%);
        color: white;
        margin: 3rem 2rem 0 2rem;
        border-top: 1rem solid white;
        padding: .5rem 0 .5rem 0;

    
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    

`;

const Treatment = styled.div`
    width: 50%;
    height: auto;

    ul {
        list-style: none;
        text-align: left;
        padding:0;
    }


`;

const Properties = styled.div`
    width: 50%;

    
`;

const UlContainer = styled.div`
ul{
    list-style: none;
    text-align: center;
    padding:0;
}

h3 {
    text-align:left;
    margin-left:1rem;
}
`;



const Uses = styled.div`
    width:100%;
    border-top: 1px solid black;
    padding-bottom: 1rem;

`;

function Card(props) {
    return (
        <CardContainer> 
            <h1>{props.name}</h1>
                <InfoContainer>
                
                <Treatment >
                    <h3>Treatments</h3>
                    <UlContainer>
                    <ul>
                    {props.treatment.map(treatWith => (
                        <li>{treatWith}</li>
                    ))}
                    </ul>
                    </UlContainer>
                </Treatment>

                    <Properties>
                        <h3>Properties</h3>
                        <UlContainer>
                        <ul>
                        {props.properties.map(props => (
                            <li>{props}</li>
                        ))}</ul>
                        </UlContainer>
                    </Properties> 

                </InfoContainer>

                <Uses>
                    <h3>Uses</h3>
                    <UlContainer>
                    <ul>
                        {props.uses.map(props => (
                            <li>{props}</li>
                        ))}</ul>
                    </UlContainer>

                </Uses>

        </CardContainer>
    )
}

export default Card
