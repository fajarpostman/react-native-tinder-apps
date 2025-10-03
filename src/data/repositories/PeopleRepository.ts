/**
 * @author Fajar Postman
 */

import { fetchPeople, likePerson, dislikePerson, fetchLikedList } from "../../api/peopleApi";
import { Person } from '../../domain/models/Person';
import { getPeople } from "../../domain/usecases/getPeople";

export const PeopleRepository = {
    getPeople: fetchPeople,
//   async getPeople(page: number) {
//     const res = await fetchPeople(page);
//     console.log(">>> PeopleRepository getPeople:", res);
//     return res;
//   },

  async like(id: number) {
    return likePerson(id);
  },

  async dislike(id: number) {
    return dislikePerson(id);
  },

  async getLiked() {
    const res = await fetchLikedList();
    return res.data.map((p: any) => new Person(p));
  },
};