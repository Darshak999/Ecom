
export class User {
  name!:string;
  password!:string;
  uplodPhoto!:string;
  role!:string;
  mobnumbar!:string;
  address!:Address;
  gender!:string;
  language!:string;
  email!:string;
  dob!:string;
  agreetc!:boolean;
  age!:number;
  aboutYou!:string;
}

export class Address {
  id!:number;
  addLine1!:string;
  addLine2!:string;
  city!:string;
  state!:string;
  Zipcode!:number;
}

export class Product{
  id!:number;
  name!:string;
  uplodPhoto!:string;
  uplodDesc!:string;
  mrp!:string;
  dp!:string;
  status!:boolean;
}

export class Ordes{
  id!:number;
  userId!:number;
  sellerId!:string;
  product!:Product;
  deliveryAddress!:Address;
  contact!:string;
  dateTime!:string;
}
