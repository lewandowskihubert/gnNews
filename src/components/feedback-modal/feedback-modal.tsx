import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import {
  closeFeedbackModal,
  selectIsFeedbackOpen,
} from "../../slices/modal-slice";

export const FeedBackModal: React.FC = () => {
  const isFeedbackOpen = useSelector(selectIsFeedbackOpen);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeFeedbackModal());
  };
  return (
    <Modal open={isFeedbackOpen} onClose={handleClose}>
      <div className="modal-container">
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            What was the hardest thing for me?
          </Typography>

          <Typography variant="body1" component ="body" gutterBottom>The most difficult thing for me was to ensure the proper appearance of the website. I can replicate it, but coming up with the design of the page is something I need to work on.</Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            The most fun part was:
          </Typography>
          <Typography variant="body1" component ="body" gutterBottom>Frankly? The entire project was interesting for me. It was a pleasure to learn new things and refine what I already knew.</Typography>
        </Box>
      </div>
    </Modal>
  );
};
