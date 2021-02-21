import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import Images from '../../Images/index';

const CardContainer = styled.div`
    background: white;
    width: 100vw;
    height: 100%;
    margin-bottom: 2rem;
    padding: 0 1rem 0 1rem;
    
    
    h1{
        color: black;
        margin: 3rem 2rem 0 2rem;
        padding: 2rem 0 .5rem 0;
        height: auto;

    }

    img {
        width: 75%;
        height: 18rem;
        object-fit: cover;
        border-radius: 30%;
        
        
    }

    //desktop breakpoint
    @media(min-width: 660px) {
        width: 35vw;
        border-radius: 13%;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    
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
    padding-bottom: 1rem;


`;

const Card = (props) => {
    const [thisHerb, SetThisHerb] = useState('')

    //useEffect so that when the thisHerb state is updated
    //the cardValue callback is run with the set data
    useEffect(() => {
        const val = props.cardValue;
        val(thisHerb)
    }, [thisHerb])

    const imagePicker = (herb) => {
        let thisHerb;
        Object.entries(Images).forEach(([key, value]) => {
            if(herb === `${key}`) {
                thisHerb = `${value}`;
            }
        })
        //if there is no match for current herb with the herb image default to basil image
        if(!thisHerb) {
            thisHerb = Images.Basil;
        }
        return thisHerb;
    }

    const SmallCardView = () => {
        return (
            <>
            <h1>{props.name}</h1>
            <div>
            <img src={imagePicker(props.name)} alt={props.name}></img>
            </div>
            <InfoContainer>
                
                <InnerInfo >
                    <h3>Latin Name</h3>
                    <p>{props.latin}</p>
                </InnerInfo>

                    <InnerInfo>
                        <h3>Warnings</h3>
                        {props.warning[0] ?
                        <ul>
                        {props.warning.map(warn => (
                            <li key={warn.index}>{warn}</li>
                        ))}</ul>
                         : <p>No warnings to show</p>}
                    </InnerInfo> 

                </InfoContainer></>
        )
    }

    const BigCardView = () => {
        return (
            <>
                <InfoContainer>
                
                    <InnerInfo>
                        <h3>Treatments</h3>
                        
                        <ul>
                        {props.treatment.map(treatWith => (
                            <li key={treatWith.index}>{treatWith}</li>
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
                        {props.uses.map(use => (
                            <li key={use.index}>{use}</li>
                        ))}</ul>

                </SpanCard>

                <SpanCard>
                    <h3>Blend With</h3>
                    {props.blendWith[0] ? 
                    <ul>
                        {props.blendWith.map(blend => (
                            <li key={blend.index}>{blend}</li>
                        ))}</ul>
                     : <p>This herbs blends best on its own.</p>}
                </SpanCard> 
            </>
        )
    }
 
    const handleOnClick = () => {
        SetThisHerb(props.name);
        // props.cardValue(thisHerb)
    }

    return (
        <CardContainer onClick={handleOnClick}> 
                {SmallCardView()}
                {props.clicked ? BigCardView() : null}

        </CardContainer>
    )
}

export default Card;
