import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import Images from '../../Images/index';

const CardContainer = styled.div`
    background: white;
    width: 50vw;
    padding: 0 1rem 0 1rem;
    
    
    h1{
        color: black;
        margin: 3rem 2rem 0 2rem;
        padding: 2rem 0 .5rem 0;
        height: auto;
        font-size: 1.5rem;

    }

    h3{
        font-size: 1rem;
    }

    li {
        font-size: .5rem;
    }

    p{
        font-size: .5rem;
    }

    img {
        border-radius: 50%;
        width: 60%;
        height: 8rem;
        object-fit: cover;
    
        @media(min-width: 660px) {
            width: 75%;
        height: 18rem;
        border-radius: 30%;
    
        }
        
    }

    .bottom {
        border-bottom: none;
    }

    //desktop breakpoint
    @media(min-width: 660px) {
        width: 35vw;
        border-radius: 13%;

        h1{
            font-size: 2rem;
        }

        h3{
            font-size: 1.5rem;
        }
    
        li {
            font-size: 1rem;
        }
    
        p{
            font-size: 1rem;
        }
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

    .warning{
        color: red;
    }

`;

//after click set up new card view for mobile with bigger image and cleaner look

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

                    <InnerInfo >
                        <h3 className='warning'>Warning!</h3>
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

                <InfoContainer className='bottom'>
                
                    <InnerInfo>
                    <h3>Ways to be used</h3>
                    <ul>
                        {props.uses.map(use => (
                            <li key={use.index}>{use}</li>
                        ))}</ul>
                    </InnerInfo>

                    <InnerInfo>
                    <h3>Blend With</h3>
                    {props.blendWith[0] ? 
                    <ul>
                        {props.blendWith.map(blend => (
                            <li key={blend.index}>{blend}</li>
                        ))}</ul>
                     : <p>This herbs blends best on its own.</p>}
                    </InnerInfo> 

                </InfoContainer>
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
