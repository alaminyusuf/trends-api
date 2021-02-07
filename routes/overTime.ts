import express, { Request, Response } from 'express';
import overTimeController from '../controller/Overtime';
const router = express.Router();

const controller = new overTimeController();

router.get('/', (req: Request, res: Response) => {
  controller.getOverTime(req, res);
});

export default router;
