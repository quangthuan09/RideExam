import { useEffect } from 'react';
import { FetchApi } from './api';
import { useAppDispatch } from '~/store';
import { setTopics } from '~/store/setting/reducer';

export const useGetTopics = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      const resData = await FetchApi.getTopics();
      dispatch(setTopics(resData));
    };
    fetch();
  }, [dispatch]);
  return null;
};
