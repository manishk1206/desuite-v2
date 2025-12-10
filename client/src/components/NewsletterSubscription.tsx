import React, { useState } from 'react';
// These components are assumed to be in your shadcn/ui folder
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast"; 
import { Loader2 } from "lucide-react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // -----------------------------------------------------------
      // STEP 1: Go to https://formspree.io and Create a New Form
      // STEP 2: Set the "Target Email" to your domain email (e.g., admin@desuite.io)
      // STEP 3: Copy the 8-character Form ID (e.g., "moqngky") 
      // STEP 4: Paste it below inside the quotes
      // -----------------------------------------------------------
      const FORM_ID = "mblnzyjl"; 
      
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        // We send the data as 'email' so Formspree recognizes it
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "Your email has been stored. Welcome to DeSuite!",
          variant: "default", 
        });
        setEmail(""); // Clear the input
      } else {
        const data = await response.json();
        // If Formspree returns an error (e.g. spam detected), show it
        throw new Error(data.error || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please check your connection or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="flex w-full max-w-sm items-center space-x-2">
      <Input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="bg-background/50 border-white/10"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Subscribe"}
      </Button>
    </form>
  );
}