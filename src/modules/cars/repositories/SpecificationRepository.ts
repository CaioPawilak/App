import { Specification } from '../models/Specification'
import { ISpecificationRepository, ISpecificationRepositoryDTO } from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {

    private specificationRepository: Specification[];

    constructor() {
        this.specificationRepository = []
    }


    create({ name, description }: ISpecificationRepositoryDTO): void {

        const newSpecification = new Specification();

        Object.assign(newSpecification, {
            name,
            description,
            created_at: Date()
        }

        )
        this.specificationRepository.push(newSpecification)
    }
    list(): Specification[] {
        return this.specificationRepository
    }
    findByName(name: string): Specification {
        const sameSpecification = this.specificationRepository.find(
            ab => ab.name === name
        )
        return sameSpecification;
    }



}

export { SpecificationRepository }
