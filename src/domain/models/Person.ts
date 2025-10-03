/**
 * @author Fajar Postman
 */

export class Person {
  id: number;
  name: string;
  age: number;
  pictures?: string;
  latitude?: number;
  longitude?: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.pictures = data.pictures;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
  }
}