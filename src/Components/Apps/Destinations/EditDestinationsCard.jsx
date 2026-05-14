"use client";
import { editDestinationsById } from "@/Components/lib/data";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditDestinationsCard = ({ Destinations }) => {
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    description,
    category,
    departureDate,
  } = Destinations;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const editDestination = await editDestinationsById(_id, destination);

    if (editDestination) {
      toast.success(`${destinationName} Edit Successfull`);
      window.location.reload();
    }
  };

  return (
    <section>
      <Modal>
        {/* Trigger Button - Glassy Style */}
        <Button className="rounded-2xl font-bold bg-white/10 hover:bg-cyan-500 hover:text-black transition-all border border-white/10 text-white px-6 py-6 active:scale-95">
          <BiEdit className="text-xl mr-2" /> Edit Details
        </Button>

        <Modal.Backdrop className="backdrop-blur-md bg-black/40">
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
              <Modal.CloseTrigger className="rounded-full p-2 m-4" />

              <Modal.Header className="flex flex-row items-center gap-4 p-8 border-b border-white/5">
                <div className="p-3 bg-cyan-500/20 rounded-2xl">
                  <BiEdit className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <Modal.Heading className="text-2xl font-black text-white tracking-tight uppercase">
                    Edit <span className="text-cyan-400">Destination</span>
                  </Modal.Heading>
                  <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold">
                    Update trip Information
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="p-8">
                <Surface className="bg-transparent shadow-none border-none">
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={destinationName}
                          name="destinationName"
                          isRequired
                        >
                          <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                            Destination Name
                          </Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
                          />
                          <FieldError className="text-red-400 text-xs mt-1 ml-2" />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                      >
                        <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                          Country
                        </Label>
                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
                        />
                        <FieldError className="text-red-400 text-xs mt-1 ml-2" />
                      </TextField>

                      {/* Category */}
                      <div>
                        <Select
                          defaultValue={category}
                          name="category"
                          isRequired
                          placeholder="Select category"
                        >
                          <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                            Category
                          </Label>
                          <Select.Trigger className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500 h-12">
                            <Select.Value />
                            <Select.Indicator className="text-cyan-400" />
                          </Select.Trigger>
                          <Select.Popover className="bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl">
                            <ListBox className="text-white">
                              {[
                                "Beach",
                                "Mountain",
                                "City",
                                "Adventure",
                                "Cultural",
                                "Luxury",
                              ].map((item) => (
                                <ListBox.Item
                                  key={item}
                                  id={item}
                                  textValue={item}
                                  className="hover:bg-cyan-500/20 focus:bg-cyan-500 text-sm rounded-lg py-2 cursor-pointer"
                                >
                                  {item}
                                  <ListBox.ItemIndicator className="text-cyan-400" />
                                </ListBox.Item>
                              ))}
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                          Price (USD)
                        </Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl bg-white/5 border-white/10 text-white"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                      >
                        <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                          Duration
                        </Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl bg-white/5 border-white/10 text-white"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={departureDate}
                          name="departureDate"
                          type="date"
                          isRequired
                        >
                          <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                            Departure Date
                          </Label>
                          <Input
                            type="date"
                            className="rounded-2xl bg-white/5 border-white/10 text-white"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={imageUrl}
                          name="imageUrl"
                          isRequired
                        >
                          <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                            Image URL
                          </Label>
                          <Input
                            type="url"
                            className="rounded-2xl bg-white/5 border-white/10 text-white"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={description}
                          name="description"
                          isRequired
                        >
                          <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-2 block font-bold">
                            Description
                          </Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl bg-white/5 border-white/10 text-white min-h-30 pt-4"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <Modal.Footer className="flex gap-4 pt-6 border-t border-white/5">
                      <Button
                        slot="close"
                        className="flex-1 py-7 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        slot="close"
                        className="flex-2 py-7 rounded-2xl bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                      >
                        Update Destination
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </section>
  );
};

export default EditDestinationsCard;
