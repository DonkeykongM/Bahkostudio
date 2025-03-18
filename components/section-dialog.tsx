"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface SectionDialogProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  triggerClassName?: string;
}

export function SectionDialog({ title, description, children, triggerClassName }: SectionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`h-8 w-8 rounded-full hover:bg-brand/10 ${triggerClassName}`}
        >
          <InfoIcon className="h-4 w-4 text-brand" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}