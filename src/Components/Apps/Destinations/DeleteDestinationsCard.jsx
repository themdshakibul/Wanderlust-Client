"use client";

import { createDestinationsById } from "@/Components/lib/data";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteDestinationsCard = ({ Destinations }) => {
  const { _id, destinationName } = Destinations;

  const handelDelet = async () => {
    const delteData = await createDestinationsById(_id);

    if (delteData) {
      toast.success(`${destinationName} Delet Successfull`);
      redirect("/destinations");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" className="rounded-lg font-semibold">
        <MdDeleteForever />
        Delete Destination
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
              <AlertDialog.Heading>
                Permanently delete Destinations?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep
              </Button>
              <Button
                onClick={handelDelet}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDestinationsCard;
