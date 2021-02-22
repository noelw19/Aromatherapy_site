import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import Images from '../../Images/index';

const CardContainer = styled.div`
    background: white;
    padding: 0 1rem 0 1rem;
    
    h1{
        color: black;
        margin: 1rem 2rem 0 2rem;
        padding: 2rem 0 .5rem 0;
        height: auto;
        font-size: 1.5rem;

    }

    h3{
        font-size: .8rem;
        text-align: left;
    }

    li {
        font-size: .5rem;
        text-align: left;
    }

    p{
        font-size: .6rem;
        text-align: left;
    }

    img {
        border-radius: 50%;
        width: 60%;
        height: 6rem;
        object-fit: cover;
    }

    //clicked conditional styling for mobile
    .clicked img{
        width: 60%;
        height: 16rem;

    }

    .notClicked img {
        width:80%;
        height: 8rem;
    }

    .clicked {
        h3 {
            font-size: 1.2rem;
        }

        li {
            font-size: .8rem;
        }

        p {
            font-size: .8rem;
        }
    }
    
    //styling for desktop
    @media(min-width: 660px) {

        .clicked {
            width: 50vw;
            margin-top: 1rem;
        }

        .notClicked {
            width: 25vw;
        }

        .clicked h1{
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .notClicked h1{
            margin-bottom: 1rem;
        }

        .clicked h3{
            font-size: 1.2rem;
        }
    
        .clicked li {
            font-size: .8rem;
        }
    
        .clicked p{
            font-size: .8rem;
        }

        .clicked img{
            width: 20vw;
            height: 16rem;
            border-radius: 50%;
        }

        .clicked .flex-row {
            display: flex;
            justify-content: center;


        }

        .notClicked img {
            width: 60%;
            height: 12rem;
        }

        .titleImageContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            margin-bottom: 0;

        }

    }   
`;

const InfoContainer = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    
    
    ul {
        list-style: none;
        padding:0;
    }

    .notClicked {
        width: 100%;
    }

    .clicked {
        width: 50%;
    }
    
`;

const InnerInfo = styled.div`
    width: 35%;
    height: 60%;

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
            <div className='flex-row'>
            <div className='titleImageContainer'>
            <h1>{props.name}</h1>
            <img src={imagePicker(props.name)} alt={props.name}></img>
            </div>
            <InfoContainer className={props.clicked ? 'clicked' : 'notClicked'}>
                
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

                    {props.clicked ? BigCardView() : null}

                </InfoContainer></ div>
        )
    }

    const BigCardView = () => {
        return (
            <>
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
            </>
        )
    }
 
    const handleOnClick = () => 
    {
        SetThisHerb(props.name);
    }

    return (
        <CardContainer onClick={handleOnClick} >
                <div className={props.clicked ? 'clicked': 'notClicked'}>  
                    {SmallCardView()}
                 </div>

        </CardContainer>
    )
}

export default Card;
