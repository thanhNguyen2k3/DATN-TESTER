import express from 'express';
import mongoose from 'mongoose';
import productsRouter from '../src/routers/products';
import authRouter from '../src/routers/auth';
import categoryRouter from '../src/routers/category';
import searchRouter from '../src/routers/search';
import user from '../src/routers/user';
import commentRouter from './routers/comments';

const app = express();
app.use(express.json());
app.use('/api', productsRouter);
app.use('/api', authRouter);
app.use('/api', categoryRouter);
app.use('/api', searchRouter);
app.use('/api', user);
app.use('/api', commentRouter);

mongoose.connect('mongodb://127.0.0.1:27017/DATN');
export const viteNodeApp = app;
