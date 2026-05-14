"use client";

import { DeleteDestinationsById } from "@/Components/lib/data";
import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteDestinationsCard = ({ Destinations }) => {
  const { _id, destinationName } = Destinations;

  const handelDelet = async () => {
    const delteData = await DeleteDestinationsById(_id);

    if (delteData) {
      toast.success(`${destinationName} Delet Successfull`);
      redirect("/destinations");
    }
  };

  return (
    <AlertDialog>
      {/* Trigger Button - Minimal & Sharp */}
      <Button className="rounded-2xl font-bold bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all border border-red-500/20 px-6 py-6 active:scale-95">
        <MdDeleteForever className="text-xl mr-2" />
        Delete Destination
      </Button>

      <AlertDialog.Backdrop
        className="backdrop-blur-xl bg-black/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 bg-[#0a0a0a] border border-red-500/20 rounded-[2.5rem] shadow-2xl overflow-hidden p-2">
            <AlertDialog.CloseTrigger className="text-gray-500 hover:text-white transition-colors m-4" />

            <AlertDialog.Header className="flex flex-col items-center text-center p-8 pb-4">
              {/* Danger Icon with Glow */}
              <div className="mb-4 p-4 bg-red-500/20 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <TriangleExclamation className="size-8 text-red-500" />
              </div>

              <AlertDialog.Heading className="text-2xl font-black text-white tracking-tight uppercase">
                Final <span className="text-red-500">Warning</span>
              </AlertDialog.Heading>
              <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold mt-1">
                Action is irreversible
              </p>
            </AlertDialog.Header>

            <AlertDialog.Body className="px-8 text-center">
              <p className="text-gray-400 leading-relaxed">
                Are you sure you want to delete{" "}
                <span className="text-white font-bold underline decoration-red-500/50">
                  {destinationName}
                </span>
                ? This will wipe all associated data from the servers.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex flex-col gap-3 p-8">
              <Button
                onClick={handelDelet}
                className="w-full py-7 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-red-600/20 active:scale-95"
                slot="close"
              >
                Confirm Delete
              </Button>

              <Button
                className="w-full py-7 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 font-bold uppercase tracking-widest text-[10px] transition-all border border-white/5"
                slot="close"
              >
                Cancel & Keep
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDestinationsCard;
