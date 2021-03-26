import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository"


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoryRepo : ICategoriesRepository){ }
    execute({name, description}: IRequest): void{

        if(this.categoryRepo.findByName(name)){
           throw new Error("Category already exists.")
        }
        this.categoryRepo.create({ name, description })
    }

}

export {CreateCategoryUseCase}
