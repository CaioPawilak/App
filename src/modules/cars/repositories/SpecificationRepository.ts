import { Specification } from '../models/Specification'
import { ISpecificationRepository, ISpecificationRepositoryDTO } from './implementations/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {

    private static INSTANCE : SpecificationRepository;

    private specificationRepository: Specification[];

    private constructor() {
        this.specificationRepository = []
    }

    public static getInstance():SpecificationRepository{
            if(!SpecificationRepository.INSTANCE){
                return SpecificationRepository.INSTANCE = new SpecificationRepository();
            }
            return SpecificationRepository.INSTANCE;
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
