export class User {
    public constructor (
      public username?: string,
      public password?: string,
      public email?: string,
      public id?: string,
      public status?: string,
      public token?: string,
      public created?: Date,
      public updated?: Date
    ) {}
}