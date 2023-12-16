import { Request, Response } from "express"
import { Category } from "../db/model/category.model"
import { Image } from "../db/model/image.model"

export const getPosition = async (req: Request, res: Response) => {
   try {
      const category = await Category.findAll()
      res.json(category)
   } catch (error: any) {
      return res.status(500).json({ message: error.message });
   }
}

export const getPositionForCategory = async (req: Request, res: Response) => {
   try {
      const { id } = req.params
      const imagesForCategories = await Image.findAll({
         where: { id_category: id }
      })
      res.json(imagesForCategories)
   } catch (error: any) {
      return res.status(500).json({ message: error.message })

   }
}




