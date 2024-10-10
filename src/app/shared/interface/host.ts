export interface Dashboard{
    name: string;
    imgUrl:string
}


  export interface signup{
    username: string
    gmail: string
    contact: string
    password: string
    ConfirmPassword: string
    securityq: string |Date,
    status:string,
    id:string
    file:any
  }

  export interface signin{
    username: string,
    password: string,
    securityq: string |Date,
    status:string,
  
  }

  export interface allproduct {
    _id: string
    title: string
    price: number
    category: Category
    description: string
    createdBy: CreatedBy
    createdAt: string
    updatedAt: string
    slug: string
    image: string
  }
  
  export interface Category {
    _id: string
    name: string
    slug: string
  }
  
  export interface CreatedBy {
    role: string
    _id: string
    name: string
  }
  

  