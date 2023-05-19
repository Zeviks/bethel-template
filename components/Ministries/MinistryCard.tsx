import Image from "next/image";

const MinistryCard = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src="https://source.unsplash.com/random"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default MinistryCard;
