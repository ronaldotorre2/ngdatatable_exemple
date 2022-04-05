export class Person {
  id: number;
  type: number;
  name: string;
  gender: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date

  constructor(id, type, name, gender){
    this.id = id;
    this.type = type;
    this.name = name;
    this.gender = gender;
    this.active = true;
  }
}
