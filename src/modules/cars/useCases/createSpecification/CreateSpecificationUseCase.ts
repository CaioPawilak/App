import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecificationUseCase {
    constructor(private specificationRepo: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {


        if(this.specificationRepo.findByName(name)){
            throw new Error("Specification already exists.")
         }



        this.specificationRepo.create({ name, description })


    }


}

export { CreateSpecificationUseCase }
