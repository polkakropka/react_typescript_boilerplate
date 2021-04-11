import React from 'react';
import styles from './HelloWorld.module.scss';

function HelloWorld () {
    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>Welcome to the react typescript repository</h1>
        </div>
    )
}

export default HelloWorld;