import React from 'react';
import styled from 'styled-components';

import Images from '../../Images/index';

const CardContainer = styled.div`
    background: white;
    width: 100vw;
    height: 100%;
    margin-bottom: 3rem;
    padding: 0 1rem 0 1rem;
    
    
    h1{
        color: black;
        margin: 3rem 2rem 0 2rem;
        border-top: 1rem solid white;
        padding: .5rem 0 .5rem 0;

    }

    img {
        width: 75%;
        height: 18rem;
        object-fit: cover;
        border-radius: 30%;
        
        
    }

    @media(min-width: 660px) {
        width: 35vw;
        border-radius: 13%;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    
    ul {
        list-style: none;
        padding:0;
    }
`;

const InnerInfo = styled.div`
    width: 50%;
    height: auto;


`;

const SpanCard = styled.div`
    width:100%;
    border-top: 1px solid black;
    padding-bottom: 1rem;


`;

const Card = (props) => {

    const imagePicker = (herb) => {
        let thisHerb;
        Object.entries(Images).forEach(([key, value]) => {
            if(herb === `${key}`) {
                thisHerb = `${value}`;
            }
        })
        return thisHerb;
    }

    return (
        <CardContainer> 
            <h1>{props.name}</h1>
            <div>
            <img src={imagePicker(props.name)} alt='w'></img>
            </div>
                <InfoContainer>
                
                <InnerInfo>
                    <h3>Treatments</h3>
                    
                    <ul>
                    {props.treatment.map(treatWith => (
                        <li key={treatWith}>{treatWith}</li>
                    ))}
                    </ul>
                </InnerInfo>

                    <InnerInfo>
                        <h3>Properties</h3>
                        <ul>
                        {props.properties.map(props => (
                            <li key={props.index}>{props}</li>
                        ))}</ul>
                    </InnerInfo> 

                </InfoContainer>

                <SpanCard>
                    <h3>Ways to be used</h3>
                    <ul>
                        {props.uses.map(prop => (
                            <li key={props.index}>{prop}</li>
                        ))}</ul>

                </SpanCard>

                <SpanCard>
                    <h3>Blend With</h3>
                    {props.blendWith[0] ? 
                    <ul>
                        {props.blendWith.map(props => (
                            <li key={props.index}>{props}</li>
                        ))}</ul>
                     : <p>This herbs blends best on its own.</p>}

                </SpanCard> 

            <InfoContainer>
                
                <InnerInfo >
                    <h3>Latin Name</h3>
                    <p>{props.latin}</p>
                </InnerInfo>

                    <InnerInfo>
                        <h3>Warnings</h3>
                        {props.warning[0] ?
                        <ul>
                        {props.warning.map(prop => (
                            <li key={props.index}>{prop}</li>
                        ))}</ul>
                         : <p>No warnings to show</p>}
                    </InnerInfo> 

                </InfoContainer>

        </CardContainer>
    )
}

export default Card;
