"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function AutoPhoneDialog() {
  const { language } = useLanguage();
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show dialog every 30 seconds - only setup once when component mounts
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure it only runs once on mount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the phone number to your backend
    alert(language === "en" ? `We'll call you shortly at ${phone}` : `Vi ringer dig strax på ${phone}`);
    setIsOpen(false);
    setPhone("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5 text-brand" />
            {language === "en" 
              ? "Want help growing your business?" 
              : "Vill du ha hjälp att växa ditt företag?"}
          </DialogTitle>
          <DialogDescription>
            {language === "en"
              ? "Enter your phone number and we'll call you within 5 minutes to find the perfect solution for your business."
              : "Ange ditt telefonnummer så ringer vi upp dig inom 5 minuter för att hitta den perfekta lösningen för ditt företag."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="auto-phone" className="block text-sm font-medium text-muted-foreground mb-1">
              {language === "en" ? "Phone number" : "Telefonnummer"}
            </label>
            <input
              type="tel"
              id="auto-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
              placeholder="07X-XXX XX XX"
              required
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">{language === "en" ? "Call me" : "Ring mig"}</Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>{language === "en" ? "Later" : "Senare"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}