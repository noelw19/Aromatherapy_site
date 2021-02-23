import React, {useState} from 'react';
import styled from 'styled-components';
import HeaderContainer from '../HeaderCont/headerCont';
import Search from '../Search/Search';
import img1 from '../../Images/herbs-png-23001.png';

const LandingContainer = styled.div`
    width: 100vw;
    height:100vh;
    background: #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const DisplayArea = styled.div`
    width: 90%;
    height: 90%;
    background: #00796B;
    text-align: center;
    animation-name: background;
    animation-duration: .8s;
    animation-timing-function: ease-in-out;

    //mobile breakpoint

    

    .ball{
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
        background-color: #03A9F4;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);
        z-index: 0;
        animation-name: slideLeft;
        animation-duration: .8s;
        animation-timing-function: ease-in-out;
        animation-delay: .8s;
        animation-fill-mode: backwards;
        
        @media(max-width: 700px) {
            width: 10rem;
            height: 10rem;
        }

    }

    h1{
        position: relative;
        top: -40px;
        color: white;
        font-size: 6rem;
        z-index:10;
        animation-name: slideRight;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-delay: .8s;
        animation-fill-mode: backwards;

        @media(max-width: 700px) {
            font-size: 2.5rem;
            position: absolute;
            top: 60px;
        }

    }

    h5{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%) translateY(140px);
        font-size: 2rem;
        border: 4px solid white;
        padding: 2rem;
        border-radius: 50px;
        color: #ffff;
        z-index: 10;
        letter-spacing: 1px;
        
        animation: slideUp 1.5s;
        animation-delay: 1.5s;
        animation-fill-mode: backwards;

        @media(max-width: 700px) {
            font-size: 1rem;  
            padding: 1rem;
            top: 210px;
                 
        }
    }

    @keyframes slideLeft {
        from {left: -25%}
        to {transform: translateX(-50%)}
    }

    @keyframes slideUp {
        from {transform: translateY(700px);}
        to {transform: translateY(135px): transform: translateX(50px)}
    }


    @keyframes slideRight {
        from {
            transform: translateX(50%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opcity: 1;
        }
    }

    @keyframes background {
        from {background: lightblue}
        to {background: #00796B}
    }

`;

const DisplayContainer = styled.div`
    width:100%;

    .pot {
        width: 40%;
        z-index: 2;
        position: relative;
        transform: translateY(-270px) translateX(-15px);
        animation: hideAndShow 2s;
        animation-delay: 2s;
        animation-fill-mode: backwards;
        filter: grayscale(50%);

        @media(max-width: 700px) {
            width: 70%;
            position: absolute;
            transform: none;
            left: 60px;
            top: 70px;
       
        }
    }

    @keyframes hideAndShow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

const LandingPage = () => {
    const [isClicked, setIsClicked] = useState(false);

    function handleOnClick() {
        setIsClicked(true);
    }

    return(
        <>
            {!isClicked ? <LandingContainer onClick={handleOnClick}>
               <DisplayArea>
                   <div className='ball'></div>
                   <h1>Aromatherapy Information</h1>
                   <h5>Click anywhere to begin.</h5>
                   <DisplayContainer>
                        <img className='pot' src={img1} alt="herbs hd @transparentpng.com"/>
                    </DisplayContainer>
               </DisplayArea>
            </LandingContainer> : 
            
            <>
                <HeaderContainer />
                <Search />
            </> 
            }

            
        </>
    )
}

export default LandingPage;