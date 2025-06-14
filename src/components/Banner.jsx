export default function Banner() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute bottom-15 left-60 space-y-1.5 ">
        <h2 className="w-max bg-white px-1 text-xl font-bold">UP TO 50% OFF</h2>
        <h4 className="text-md w-max bg-white px-1">
          From 09 Jun to 16 Jun 2025. T&Cs apply. DTI Fair Trade
        </h4>
        <h4 className="text-md w-max bg-white px-1">
          Permit No. FTEB-227212 Series of 2025{" "}
        </h4>

        <div className="flex gap-2 py-2">
          <button className="cursor-pointer border bg-white px-2 py-1 font-bold hover:border-black/30 hover:bg-neutral-200">
            MEN →
          </button>
          <button className="cursor-pointer border bg-white px-2 py-1 font-bold hover:border-black/30 hover:bg-neutral-200">
            WOMEN →
          </button>
          <button className="cursor-pointer border bg-white px-2 py-1 font-bold hover:border-black/30 hover:bg-neutral-200">
            KIDS →
          </button>
        </div>
      </div>
      <img
        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/5788162_Masthead_DT_2880x1280_e874fdd2f5.jpg"
        alt="banner"
      />
    </div>
  );
}
