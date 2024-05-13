import express from 'express';
import { createDiseaseHandler, getDiseaseByNameHandler } from './pdisease.controller.js';
const router = express.Router();

router.post("/",createDiseaseHandler)
router.get("/:name",getDiseaseByNameHandler)

export default router