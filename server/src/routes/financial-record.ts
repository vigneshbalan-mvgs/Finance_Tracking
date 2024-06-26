import express, { Request, Response } from 'express';
import FinancialRecordModel from '../schema/financial-record';

const router = express.Router();

//first user expences 
//get everythig form database

router.get('/getAllByUserID/:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).send("No Record Found for the user.");
        }
        res.status(200).send(records);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
router.post('http://localhost:3001/financial-records', async (req: Request, res: Response) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(newRecord);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true });

        if (!record) return res.status(404).send();
        res.status(200).send(record);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const record = await FinancialRecordModel.findByIdAndDelete(id);
        if (!record) return res.status(404).send();

        res.status(200).send(record);
    }
    catch (err) {
        res.status(500).send(err);
    }
});




export default router;