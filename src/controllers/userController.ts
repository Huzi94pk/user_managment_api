import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg'; // Import if you are using it

// Handle errors
const handleError = (res: Response, err: unknown) => {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'An unknown error occurred' });
  }
};

// Example controller methods
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Your code for registering a user
  } catch (err) {
    handleError(res, err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Your code for logging in a user
  } catch (err) {
    handleError(res, err);
  }
};

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Ensure `req.user` is set by your middleware
    // Your code to get user profile
  } catch (err) {
    handleError(res, err);
  }
};

export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Ensure `req.user` is set by your middleware
    // Your code to update user profile
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Ensure `req.user` is set by your middleware
    // Your code to delete user
  } catch (err) {
    handleError(res, err);
  }
};
