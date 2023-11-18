import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootAction } from '../store/root-actions';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootAction, dispatch);
};
