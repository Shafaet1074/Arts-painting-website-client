import { useContext } from "react";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const AddPaintings = () => {
  const { user } = useContext(AuthContext) || {};

  const handleAddPaintings = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const paintingname = form.paintingname.value;
    const SubcategoryName = form.SubcategoryName.value;
    const price = form.price.value;
    const Rating = form.Rating.value;
    const Customization = form.Customization.value;
    const ProcessingTime = form.ProcessingTime.value;
    const photo = form.photo.value;
    const ShortDescription = form.ShortDescription.value;
    
    // Safely grab email in case user object is slow to mount
    const email = user?.email || "Curator"; 

    const info = {
      paintingname,
      SubcategoryName,
      price,
      Rating,
      Customization,
      ProcessingTime,
      photo,
      ShortDescription,
      email,
    };

    fetch("https://arts-painting-website-server.vercel.app/addpaintings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Artwork Added",
            text: "Your piece has been successfully added to the exhibition.",
            confirmButtonColor: "#b45309", // matches amber-700
            background: "#FAF9F6",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] text-[#2D2B2A] dark:text-[#EAE9E5] transition-colors duration-500 font-sans py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-400/10 dark:bg-amber-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-zinc-900 dark:text-white">
              Exhibit <span className="italic text-amber-700 dark:text-amber-400">Artwork</span>
            </h1>
            <p className="text-sm md:text-base font-light text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Submit your latest masterpiece to the ArtisanHaven collection. Please provide accurate details for our collectors.
            </p>
          </div>
        </Fade>

        {/* Form Container */}
        <Fade direction="up" triggerOnce delay={100}>
          <div className="backdrop-blur-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl shadow-zinc-200 dark:shadow-zinc-800">
            
            <form onSubmit={handleAddPaintings} className="space-y-8 md:space-y-10">
              
              {/* Grid Row 1: Name & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Title of Artwork *
                  </label>
                  <input
                    type="text"
                    name="paintingname"
                    required
                    placeholder="e.g. The Starry Night"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Medium / Subcategory *
                  </label>
                  <input
                    type="text"
                    name="SubcategoryName"
                    required
                    placeholder="e.g. Oil on Canvas, Watercolor"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Grid Row 2: Price & Rating */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Price (BDT) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="e.g. 15000"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Initial Curator Rating *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    name="Rating"
                    required
                    placeholder="e.g. 4.8"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Grid Row 3: Customization & Processing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Available for Customization? *
                  </label>
                  <select
                    name="Customization"
                    required
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-zinc-900">Select an option</option>
                    <option value="Yes" className="text-zinc-900">Yes</option>
                    <option value="No" className="text-zinc-900">No</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                    Processing / Shipping Time *
                  </label>
                  <input
                    type="text"
                    name="ProcessingTime"
                    required
                    placeholder="e.g. 3-5 Business Days"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Full Width Row 4: Photo URL */}
              <div className="relative group">
                <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                  High-Resolution Image URL *
                </label>
                <input
                  type="url"
                  name="photo"
                  required
                  placeholder="https://example.com/your-artwork.jpg"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
              </div>

              {/* Full Width Row 5: Description */}
              <div className="relative group">
                <label className="block text-[14px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                  Artist's Description *
                </label>
                <textarea
                  name="ShortDescription"
                  required
                  rows="4"
                  placeholder="Tell the story behind this piece..."
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:border-amber-700 dark:focus:border-amber-400 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black uppercase tracking-widest text-xs font-bold py-5 rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/20 dark:shadow-white/10 flex items-center justify-center gap-3 group"
                >
                  <span>Submit to Exhibition</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>
        </Fade>

      </div>
    </div>
  );
};

export default AddPaintings;