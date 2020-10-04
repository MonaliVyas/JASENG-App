export class User {
    constructor(
        public _id?: string,
        public FirstName?: string,
        public LastName?: string,
        public Gender?: string,
        public DOB?: Date,
        public Email?: string,
        public Mobile?: string,
        public Role?: number,
        public IsActive?: boolean,
        public CreatedBy?: number,
        public CreatedDate?: Date,
        public ModifiedBy?: number,
        public ModifiedDate?: Date
    ) { }
}