import React from 'react';
import styles from './MainContainer.module.css';
import Search from '../Search/Search';


const MainContainer = () => {
    return (
        <>
        <div className={styles.container}>
            <Search />
        </div>
         </>)
}
export default MainContainer;