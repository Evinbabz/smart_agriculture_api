import DiseaseSchema from "./pdisease.model.js";

export async function createDisease(data){
    try{

        const newDisease = new DiseaseSchema(data);
        return await newDisease.save();
    }
    catch(error){
        console.log("Something went wrong",error)
    }
}

export async function getDiseaseByName(name){
    try{
        return await DiseaseSchema.findOne({name:name})
    }
    catch(error){
        console.log("Something went wrong",error)
    }
}