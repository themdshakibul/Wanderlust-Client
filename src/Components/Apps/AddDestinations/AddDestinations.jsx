"use client";

import { psotDestinations } from "@/Components/lib/data";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const AddDestinations = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const postDestination = psotDestinations(destination);

    if (postDestination) {
      toast.success(`Add Destination Successfull`);
      redirect("/destinations");
    }
  };

  return (
    <section>
      {/* Form Container with Glassmorphism */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <form onSubmit={onSubmit} className="p-8 md:p-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired className="w-full">
                <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                  Destination Name
                </Label>
                <Input
                  placeholder="e.g. Santorini Dreamscape"
                  className="rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500 transition-all"
                />
                <FieldError className="text-red-400 text-xs mt-1 ml-2" />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                Country
              </Label>
              <Input
                placeholder="e.g. Greece"
                className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
              />
              <FieldError className="text-red-400 text-xs mt-1 ml-2" />
            </TextField>

            {/* Category */}
            <div className="space-y-2">
              <Label className="text-gray-400 ml-2 block font-medium uppercase text-[10px] tracking-widest">
                Category
              </Label>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Choose Vibes"
              >
                <Select.Trigger className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500 h-10.5">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-slate-900 border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
                  <ListBox className="text-white">
                    {[
                      "Beach",
                      "Mountain",
                      "City",
                      "Adventure",
                      "Cultural",
                      "Luxury",
                    ].map((cat) => (
                      <ListBox.Item
                        key={cat}
                        id={cat}
                        textValue={cat}
                        className="hover:bg-cyan-500 hover:text-black transition-colors px-4 py-2 cursor-pointer"
                      >
                        {cat}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                Price (USD)
              </Label>
              <Input
                placeholder="1299"
                className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
              />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                Duration
              </Label>
              <Input
                placeholder="7 Days / 6 Nights"
                className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
              />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                  Departure Date
                </Label>
                <Input
                  type="date"
                  className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500 appearance-none"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://images.unsplash.com/your-photo-link"
                  className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-gray-400 ml-2 mb-2 block font-medium uppercase text-[10px] tracking-widest">
                  Experience Description
                </Label>
                <TextArea
                  placeholder="What makes this trip special?"
                  className="rounded-3xl bg-white/5 border-white/10 text-white focus:border-cyan-500 min-h-30 p-4"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Submit Button - Home Page CTA Style */}
          <Button
            type="submit"
            className="w-full py-7 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
          >
            Launch Travel Package
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddDestinations;
