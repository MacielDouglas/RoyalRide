"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar";

export function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add novo carro <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Formulário para adicionar novo carro</DialogTitle>
          <DialogDescription>
            <FormAddCar />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
