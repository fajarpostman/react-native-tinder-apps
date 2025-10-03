/**
 * @author Fajar Postman
 */

import { PeopleRepository } from "../../data/repositories/PeopleRepository";

export async function getPeople(page: number) {
    return PeopleRepository.getPeople(page);
}