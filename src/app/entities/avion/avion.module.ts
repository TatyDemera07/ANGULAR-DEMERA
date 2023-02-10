import { CategoryAvionModel } from "./categoryAvion.model";

export interface AvionModule{
    id?:number;
    name:string;
    image:string;
    category: CategoryAvionModel
}

export interface CreateAvionModule extends Omit<AvionModule, 'id'| 'category'>{
    categoryId:number;
}

export interface UpdateAvionModule extends Partial<AvionModule>{
    categoryId:number;
}