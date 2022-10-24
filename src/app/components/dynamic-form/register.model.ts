export class RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;

  constructor(data: any) {
    if (!data) return;

    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.gender = data.gender;
  }
}
