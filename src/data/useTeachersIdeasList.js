import useSWR from 'swr';
import API from './index';

export const useTeachersIdeasList = () => {
  const { data, error, mutate } = useSWR( '/teachers-plans', API.fetcher );

  return {
    ideas: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};