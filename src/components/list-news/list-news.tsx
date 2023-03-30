import React, { useState } from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { useAppSelector } from "../../app/hooks";
import { selectNewsList } from "../../slices/news-slice";
import "./list-news.css"
import { useDispatch } from 'react-redux';
import { openModal } from '../../slices/modal-slice';
import { NewsArticle } from '../../types/news-api';
import { NewsModal } from '../news-modal/news-modal';


export const NewsList:React.FC = () => {
    const newsData = useAppSelector(selectNewsList);
    const fallBackImage = "https://cdn.sanity.io/images/0vv8moc6/contpeds/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png?fit=crop&auto=format"
    const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);

    const dispatch = useDispatch();
    const handleOpenModal = (news: NewsArticle) => {
      dispatch(openModal());
      setSelectedNews(news);
    }

    return (
        <main className="news-list-container">
            
        {newsData.map((news) => (
           
            <ListItem alignItems="flex-start" onClick={() => handleOpenModal(news)}>
            <ListItemAvatar>
                <Avatar alt="news-img" src={news.urlToImage === null ? fallBackImage : news.urlToImage} />
            </ListItemAvatar>
            <ListItemText
                primary={news.title}
                secondary={
                    <>
                        <Typography component="span" variant="body2" color="text.primary">
                            {news.source.name} - {new Date(news.publishedAt).toLocaleString() }
                        </Typography>
                        <br />
                       
                    </>
                }
            />
        </ListItem>

     
        ))}

         {selectedNews && (
          <NewsModal selectedNews={selectedNews} />
        )}
           </main>
       
    );
}