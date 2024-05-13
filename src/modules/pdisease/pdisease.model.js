import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    treatment:{
        type:Array,
        required:true,
    },
},{
    timestamps:true
})

const DiseaseSchema = mongoose.model('Disease',diseaseSchema);
export default DiseaseSchema;