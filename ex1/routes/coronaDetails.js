var express = require('express');
var router = express.Router();
const Model = require('../model/model');

router.post('/:id', function(req, res, next) {
    const data = new Model({
        id:req.body.id,
        dateOfCoronaVaccine:req.body.dateOfCoronaVaccine,
        manufacturerOfVaccine:req.body.manufacturerOfVaccine,
        dateOfPositiveResult:req.body.dateOfPositiveResult,
        recoveryDate:req.body.recoveryDate,
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }    // Do whatever you need to do with the user ID
});


module.exports = router;
//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

//Update by ID Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;