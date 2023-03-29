import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { openModal } from "../../slices/modal-slice";
import { selectNewsList } from "../../slices/news-slice"
import { NewsArticle } from "../../types/news-api";
import { NewsModal } from "../news-modal/news-modal";
import "./news.css"

export const NewsComponent:React.FC = () => {
    const newsData = useAppSelector(selectNewsList);
    const fallBackImage = "https://cdn.sanity.io/images/0vv8moc6/contpeds/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png?fit=crop&auto=format"
    const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);

    const dispatch = useAppDispatch();
    const handleOpenModal = (news: NewsArticle) => {
      dispatch(openModal());
      setSelectedNews(news);
    }

    return (
      <main className="news-card-container">
        <Grid container spacing={2}>
          {newsData.map((news) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={news.title} onClick={() => handleOpenModal(news)}>
              <Card sx={{ maxWidth: 320, minHeight:320, maxHeight:320 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={news.urlToImage === null ? fallBackImage : news.urlToImage}
                    alt="news-img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {news.title}
                    </Typography>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        {selectedNews && (
          <NewsModal selectedNews={selectedNews} />
        )}
      </main>
    );
}