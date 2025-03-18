"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneCall } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function PhoneDialog() {
  const { language } = useLanguage();
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the phone number to your backend
    alert(language === "en" ? `We'll call you shortly at ${phone}` : `Vi ringer dig strax på ${phone}`);
    setIsOpen(false);
    setPhone("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="border-brand/30 hover:bg-brand/5">
          <PhoneCall className="mr-2 h-4 w-4" />
          {language === "en" ? "We'll call you" : "Vi ringer dig"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{language === "en" ? "Let us call you" : "Låt oss ringa dig"}</DialogTitle>
          <DialogDescription>
            {language === "en" 
              ? "Enter your phone number and we'll call you within 5 minutes to find the perfect solution for your business."
              : "Ange ditt telefonnummer så ringer vi upp dig inom 5 minuter för att hitta den perfekta lösningen för ditt företag."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
              {language === "en" ? "Phone number" : "Telefonnummer"}
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-brand/30"
              placeholder="07X-XXX XX XX"
              required
            />
          </div>
          <Button type="submit" className="w-full">{language === "en" ? "Call me" : "Ring mig"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}