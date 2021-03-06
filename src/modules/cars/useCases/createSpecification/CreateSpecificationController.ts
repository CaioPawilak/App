import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {

    constructor(private specificationUseCase: CreateSpecificationUseCase){}

    handle(request: Request, response : Response) : Response{
        const { name, description } = request.body;


       this.specificationUseCase.execute({ name, description })

        return response.status(200).send()
    }

}

export {CreateSpecificationController}
