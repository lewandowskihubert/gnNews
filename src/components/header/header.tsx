import React, { useState } from 'react';
import NewsSwitch from '../switch/switch';
import "./header.css"
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { openFeedbackModal } from '../../slices/modal-slice';
import { FeedBackModal } from '../feedback-modal/feedback-modal';
import { useAppSelector } from '../../app/hooks';
import { selectNewsList } from '../../slices/news-slice';

export const Header:React.FC = () => {
    const news = useAppSelector(selectNewsList)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch()
    const handleOpenFeedbackModal = () => {
      dispatch(openFeedbackModal());
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return <>
    <header className="header-container">
       <span className='logo-text'><a href="/" title="home"> <span><ArticleIcon fontSize='large' /></span><p>  gnNews </p>   </a> </span>
       <div className='left-side-header'>
       {news.length !==0 && <span className='switch-header'> <NewsSwitch /> </span> }
        <span className='opinion-header' onClick={() => handleOpenFeedbackModal()}> Feedback </span>
        </div>

        <div className='dropdown-menu' style={{ display: isDropdownOpen ? 'block' : 'none' }} >
        {news.length !==0 && <span className='switch-header'> <NewsSwitch /> </span> }
        <span className='opinion-header' onClick={() => handleOpenFeedbackModal()}> Feedback </span>
</div>
<div className='dropdown-toggle' onClick={handleDropdownToggle}>
          <span className='icon'><MenuIcon /></span>
        </div>  
        <FeedBackModal />
    </header>
    </>
}