import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import PinInput from "react-pin-input";
import { Button } from "../components/ui/button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  onVerified: (pin: string) => void;
};

export default function Modal({ open, onClose, onVerified }: ModalProps) {
  const [pin, setPin] = useState("");
  const [verifying, setVerifying] = useState(false);

  const handlePinComplete = (value: string) => {
    setPin(value);
    setVerifying(true);
    onVerified(value);
    setVerifying(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black rounded-lg shadow-xl border-2 border-[white] max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#A0FF99]">
            Enter PIN to Confirm Transfer
          </DialogTitle>
          <DialogDescription className="text-white-700">
            Please enter your 4-digit PIN to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center py-4">
          <PinInput
            length={4}
            focus
            secret
            secretDelay={100}
            type="numeric"
            onComplete={handlePinComplete}
            inputStyle={{
              border: "2px solid #A0FF99",
              borderRadius: "8px",
              margin: "0 4px",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              color: "#000000",
            }}
            inputFocusStyle={{
              borderColor: "#A0FF99",
              boxShadow: "0 0 8px rgba(160, 255, 153, 0.5)",
            }}
          />
          {verifying && <p className="text-sm text-gray-500 mt-2">Verifying...</p>}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
            className="border-2 border-[#A0FF99] text-[#A0FF99] hover:bg-[#A0FF99] hover:text-black"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#A0FF99] text-black hover:bg-[#8be684]"
            onClick={() => handlePinComplete(pin)}
            disabled={verifying || pin.length < 4}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}