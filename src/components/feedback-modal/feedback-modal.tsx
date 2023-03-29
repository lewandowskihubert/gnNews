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
        <Box sx={{ width: 600, p: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            What was the hardest thing for me?
          </Typography>

          <Typography variant="body1" component ="body" gutterBottom>fsafsafs</Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            The most fun part was:
          </Typography>
          <Typography variant="body1" component ="body" gutterBottom>fsafsafs</Typography>
        </Box>
      </div>
    </Modal>
  );
};
