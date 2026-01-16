import { Router } from "express";
import { Basic } from "../controllers/basic.controller";

export const basicRoutes = Router();

/**
 * @swagger
 * /api/me:
 *  get:
 *    summary: Get the current logged-in user's information.
 *    description: Get the current logged-in user's information.
 *    tags: [Me]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: OK
 */
basicRoutes.get("/basic",  Basic.getBasic);
