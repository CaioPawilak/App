import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoryRepo = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoryRepo );
    createCategoryService.execute({name, description})

    return response.status(201).send()
})
categoriesRoutes.get('/', (request, response) => {
    const all = categoryRepo.list();
    return response.status(201).json(all)
})

export { categoriesRoutes };
