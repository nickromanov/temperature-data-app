import express from 'express';

export default (app, http) => {
  app.use(express.json());
}