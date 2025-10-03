/**
 * @author Fajar Postman
 */

import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PeopleRepository } from '../data/repositories/PeopleRepository';
import { fetchPeople, likePerson, dislikePerson } from '../api/peopleApi';


export function usePeopleInfinite() {
  return useInfiniteQuery({
    queryKey: ['people'],
    queryFn: ({ pageParam = 1 }) => fetchPeople(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.lastPage) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
}

export function useLikeDislike() {
  const qc = useQueryClient();

  const like = useMutation({
    mutationFn: (id: number) => likePerson(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['people'] });
      qc.invalidateQueries({ queryKey: ['liked'] });
    },
  });

  const dislike = useMutation({
    mutationFn: (id: number) => dislikePerson(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['people'] });
    },
  });

  return { like, dislike };
}