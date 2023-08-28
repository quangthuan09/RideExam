import { useEffect, useState } from 'react';
import { FetchApi } from './api';
import { TTopicItem } from './type';

export const useGetTopics = () => {
  const [data, setData] = useState<Array<TTopicItem>>([]);
  useEffect(() => {
    const fetch = async () => {
      const resData = await FetchApi.getTopics();
      setData(resData);
    };
    fetch();
  }, []);
  return data;
};
