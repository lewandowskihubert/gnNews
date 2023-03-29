import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ModalState {
  isOpen: boolean;
  isFeedbackOpen:boolean;

}

const initialState: ModalState = {
  isOpen: false,
  isFeedbackOpen:false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openFeedbackModal:(state) => {
      state.isFeedbackOpen = true;
    },
    closeFeedbackModal:(state) => {
      state.isFeedbackOpen = false;
    }
  },
});



export const { openModal, closeModal, openFeedbackModal, closeFeedbackModal } = modalSlice.actions;
export const selectIsOpen =(state:RootState) => state.modalState.isOpen
export const selectIsFeedbackOpen =(state:RootState) => state.modalState.isFeedbackOpen
export default modalSlice.reducer;