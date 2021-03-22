import { CategoryRepository } from "../repositories/CategoriesRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoryRepo : CategoryRepository){ }
    execute({name, description}: IRequest): void{

        if(this.categoryRepo.findByName(name)){
           throw new Error("Category already exists.")
        }
        this.categoryRepo.create({ name, description })
    }
}

export {CreateCategoryService}
