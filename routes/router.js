import express from 'express';
import userRoutes from './user.routes.js';
import auth from './auth.routes.js';

export default [userRoutes, auth]