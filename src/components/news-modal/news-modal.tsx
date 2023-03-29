import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { NewsArticle } from '../../types/news-api';
import { Modal, Box, Typography, Button } from '@mui/material';
import { selectIsOpen, closeModal } from '../../slices/modal-slice';
import { useAppDispatch } from '../../app/hooks';
import "./news-modal.css"

type Props = {
  selectedNews: NewsArticle;
};

export const NewsModal: React.FC<Props> = ({ selectedNews }) => {
  const isOpen = useSelector(selectIsOpen)
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
   
    <Modal open={isOpen} onClose={handleClose}>
       <div className='modal-container'>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          {selectedNews.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" component="span" mr={2}>
            {new Date (selectedNews.publishedAt).toLocaleString() }
          </Typography>
          <Typography variant="subtitle1" component="span" color="text.secondary">
            {selectedNews.author}
          </Typography>
        </Box>
        <img src={selectedNews.urlToImage} alt={selectedNews.title} style={{ width: '100%', marginBottom: 16 }} />
      
        <Typography variant="body1" component="p" gutterBottom>
          {selectedNews.content}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <a target='_blank' href={selectedNews.url}>Read more</a>
        </Typography>
      </Box>
      </div>
    </Modal>
    
  );
};