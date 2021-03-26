import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute({name, description}: IRequest): void{

        const SpecificationAlradyExists = this.specificationRepository.findByName(name)

        if(SpecificationAlradyExists){

            throw new Error("Specification Alrady Exists")
        }

            this.specificationRepository.create({ name, description})
    }



}


export { CreateSpecificationService }
