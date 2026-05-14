"use client";

import { DeleteBooking } from "@/Components/lib/data";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const AlardDilog = ({ bookingId }) => {
  const handelCancelBooking = async () => {
    const cansel = await DeleteBooking(bookingId);
    if (cansel) {
      toast.success("Cansel Successfull");
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="rounded-lg font-bold text-red-500 border-red-500"
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Cansel Booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button
                onClick={handelCancelBooking}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Cansel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default AlardDilog;
