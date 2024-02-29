const data = require('../models/data_models');
// const ObjectId = require('mongoose/lib/types/objectid');


exports.getAllData = (req, res) => {
    data.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(404)
            .json({ message: 'Data not found', error: err.message }));
}

exports.postCreateData = (req, res) => {
    data.create(req.body)
        .then((data) => res.json({ message: 'Data added successfully', data }))
        .catch((err) => res.status(404)
            .json({ message: 'Failed to add data', error: err.message }));
}

exports.deleteData = (req, res) => {
    data.findByIdAndRemove(req.params.id, req.body)
        .then((data) => res.json({ message: 'Data deleted successfully', data }))
        .catch((err) => res.status(404)
            .json({ message: 'Failed to delete data', error: err.message }));
}
// exports.updateData =async (req,res)=>{
//     try{
//       console.log(req.body)
//      let upateData = await data.findByIdAndUpdate(req.params.id,req.body.updatedata)
//      return res.status(200).json({
//       Success: 'True',
//       upadated:upateData,
//       Message: 'Data inserted succesfully',
//       SuccessCode: 200,
//     });
//     } catch(error){
//      return res.send(error)
//     }
//   }
exports.updateData = (req, res) => {
    // console.log("update is running")
    data.findByIdAndUpdate(req.params.id,req.body.updatedata)
        .then((data) => res.json({ message: 'Data update successfully', data }))
        .catch((err) => res.status(404)
            .json({ message: 'Failed to update data', error: err.message }));
}