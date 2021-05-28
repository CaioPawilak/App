import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository"
import {inject, injectable} from "tsyringe"


interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoryRepo : ICategoriesRepository){ }
    async execute({name, description}: IRequest): Promise<void>{
        const categoryAlreadyExists = await this.categoryRepo.findByName(name)

        if(categoryAlreadyExists){
           throw new Error("Category already exists.")
        }
        this.categoryRepo.create({ name, description })
    }

}

export {CreateCategoryUseCase}
