import { createDisease, getDiseaseByName } from "./pdisease.service.js";

export async function createDiseaseHandler(req,res,next){
    const data = req.body;
    try{
        const newDisease = await createDisease(data);
        res.status(200).json("Disease created successfully")
    }
    catch(error){
        console.log("Internal server error",error)
    }
}

export async function getDiseaseByNameHandler(req,res,next){
    const name = req.params.name;
    try{
        const disease = await getDiseaseByName(name);
        res.status(200).json(disease)
    }
    catch(error){
        console.log("Internal server error",error)
    }
}