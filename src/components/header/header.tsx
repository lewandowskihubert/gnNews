import React, { useState } from 'react';
import NewsSwitch from '../switch/switch';
import "./header.css"
import ArticleIcon from '@mui/icons-material/Article';


export const Header:React.FC = () => {
    return <>
    <header className="header-container">
       <span className='logo-text'><a href="/" title="home"> <span><ArticleIcon fontSize='large' /></span> gnNews </a> </span>
        <div className='header-buttons'>
        <span className='opinion-header'> My opinion </span>
        <span className='switch-header'> <NewsSwitch /> </span>
        </div>
    </header>
    </>
}