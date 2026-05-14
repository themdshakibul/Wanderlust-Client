import AddDestinations from "@/Components/Apps/AddDestinations/AddDestinations";

export const metadata = {
  title: "Wanderlust | Add Destinations",
  description:
    "Discover extraordinary travel experiences and hidden gems around the world.",
};

const AddDestinationsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-25 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-10 space-y-2">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs">
            Admin Panel
          </span>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Add New <span className="text-cyan-400 italic">Adventure</span>
          </h2>
          <div className="h-1.5 w-20 bg-cyan-500 rounded-full mt-4" />
        </div>
        <AddDestinations />
      </div>
    </div>
  );
};

export default AddDestinationsPage;
