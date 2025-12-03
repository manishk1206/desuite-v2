import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const parseResult = insertDemoRequestSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        const validationError = fromError(parseResult.error);
        return res.status(400).json({ 
          message: validationError.toString() 
        });
      }

      const demoRequest = await storage.createDemoRequest(parseResult.data);
      
      console.log(`[DeSuite] New demo request from ${demoRequest.email} at ${demoRequest.company}`);
      
      return res.status(201).json(demoRequest);
    } catch (error) {
      console.error("Error creating demo request:", error);
      return res.status(500).json({ 
        message: "Failed to submit demo request. Please try again." 
      });
    }
  });

  app.get("/api/demo-requests", async (req, res) => {
    try {
      const requests = await storage.getDemoRequests();
      return res.json(requests);
    } catch (error) {
      console.error("Error fetching demo requests:", error);
      return res.status(500).json({ 
        message: "Failed to fetch demo requests." 
      });
    }
  });

  return httpServer;
}
