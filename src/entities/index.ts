export class ContactModel {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;

  constructor(payload: any) {
    this.id = payload.id;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.age = payload.age;
    this.photo = payload.photo;
  }

  get() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      photo: this.photo,
    };
  }
}
