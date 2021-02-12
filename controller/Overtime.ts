import { ErrorRequestHandler, Response, Request } from 'express';
// @ts-ignore
import gtrends from 'google-trends-api';
class IntrestOverTime {
  getOverTime(req: Request, res: Response) {
    gtrends
      .interestOverTime({ keyword: 'Technology' })
      .then(function (results: Response) {
        res.status(200).json({ results });
      })
      .catch(function (err: ErrorRequestHandler) {
        console.error('Oh no there was an error', err);
      });
  }
}

export default IntrestOverTime;
