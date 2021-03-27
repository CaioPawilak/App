
import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepo = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepo
    );

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController}
