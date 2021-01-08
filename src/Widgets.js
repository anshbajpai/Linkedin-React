import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("I am back !!", "Top news - 2000 readers")}
            {newsArticle("Coronavirus: Updates", "Top news - 200 readers")}
            {newsArticle("SRK making a comeback : Pathan", "Top news - 4620 readers")}
            {newsArticle("ITesla hits new highs", "Cars & auto - 219 readers")}
            {newsArticle("React native vs Flutter", "Code - 132 readers")}
        </div>

    )
}

export default Widgets
