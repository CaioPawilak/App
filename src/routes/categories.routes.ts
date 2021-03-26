import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController/index';


const categoriesRoutes = Router();
const categoryRepo = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response)
})
categoriesRoutes.get('/', (request, response) => {
    const all = categoryRepo.list();
    return response.status(201).json(all)
})


export { categoriesRoutes };
