import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository"


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoryRepo : ICategoriesRepository){ }
    async execute({name, description}: IRequest): Promise<void>{
        const categoryAlreadyExists = await this.categoryRepo.findByName(name)

        if(categoryAlreadyExists){
           throw new Error("Category already exists.")
        }
        this.categoryRepo.create({ name, description })
    }

}

export {CreateCategoryUseCase}
