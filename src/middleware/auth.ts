import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extend Request interface to include user property
interface CustomRequest extends Request {
  user?: JwtPayload;
}

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET as string, (err: VerifyErrors | null, user: JwtPayload | undefined) => {
    if (err) return res.sendStatus(403); // Forbidden
    if (user) {
      req.user = user; // Attach user to request
      next();
    }
  });
};

export { authenticateToken };
