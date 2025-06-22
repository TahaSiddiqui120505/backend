import mongoose from "mongoose"

const doctorHospitalSchema = new mongoose.Schema({
    worksInHospitals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    NumberOfHours: {
        type: Number,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    exprienceInYears:{
        type: Number,
        default: 0
    },
    worksInHospitals: [{
        type: [doctorHospitalSchema]
    }]
},{timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)