const Device = require('../models/deviceModel');

exports.postDeviceStatus=(req,res)=>{
    let { status, name } = req.body;
    Device.findOne({nameOfDevice: name})
    .then((device)=>{
        if(device){
            Device.updateOne({_id: device.id}, {currentStatus: req.body.status})
            .then((response)=>{
                res.status(200).json({
                    status: true,
                    response,
                    msg: `Your Device "${name}" is now turned ${status}`
                })
            })
            .catch((error)=>{
                res.status(500).json({
                    status: false,
                    error: error,
                    msg: "Something went wrong while saving to databse"
                })
            })
        }
        else{
            const device = new Device({
                currentStatus: status,
                nameOfDevice: name
            })
            device.save()
            .then((response)=>{
                res.status(200).json({
                    status: true,
                    response,
                    msg: `Your Device "${name}" is now turned ${status}`
                })
            })
            .catch((error)=>{
                res.status(500).json({
                    status: false,
                    error: error,
                    msg: "Something went wrong while saving to databse"
                })
            })
        }
    })
    .catch((error)=>{
        res.status(500).json({
            status: false,
            error: error,
            msg: "Something went wrong."
        })
    })
}

exports.getDevice=(req,res)=>{
    Device.findOne({nameOfDevice: req.body.name})
    .then((device)=>{
        res.status(200).json({
            status: true,
            device,
            msg: `Data Fetched Success fully`
        }) 
    })
    .catch((error)=>{
        res.status(500).json({
            status: false,
            error: error,
            msg: "Something went wrong while saving to databse"
        })
    })
}