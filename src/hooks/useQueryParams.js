import { useLocation } from 'react-router-dom';

export const useQueryParams = (param) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
};
