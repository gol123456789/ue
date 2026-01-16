import { HttpException } from "@/common/exceptions/http-exception";
import { NextFunction, Request, Response } from "express";
import { Logger } from "@/common/utils/logger";
import { prisma } from "@/common/database/prisma";
import { authService } from "@/common/services/auth.service";

const LOGGER = new Logger("create-admin-account-controller");

export class basicController {
  getBasic = async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      return res.json({
          body: "body of doc",
          
        });

    } catch (error) {
      next(error);
    }
  };

  runCommand = async (email: string, password: string): Promise<void> => {
    const hashedPassword = await authService.hashPassword({ password });
  
    await prisma.admin.create({
      data: {
        email: email,
        password: hashedPassword,
        account: {
          create: {
            role: "ADMIN",
          },
        },
      },
    });
  
    LOGGER.info("Account created successfully.");
    //process.exit(0);
  };
}

export const Basic = new basicController();
