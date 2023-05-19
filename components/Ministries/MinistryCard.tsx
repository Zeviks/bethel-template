import Image from "next/image";

const MinistryCard = () => {
  return (
    <div
      className="flex h-[100%] flex-col justify-between overflow-hidden rounded bg-cover p-4 shadow-lg"
      style={{ backgroundImage: "url('/images/hero/hero.png')" }}
    >
      <button
        type="button"
        className="hover:bg-blue-800 focus:ring-blue-300 mx-auto mr-2  inline-flex w-fit items-center rounded-full bg-dark p-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>

      <div>
        <h5 className="text-neutral-800  mb-2 text-xl font-medium leading-tight text-white">
          Women Ministries
        </h5>
        <p className="text-neutral-600  mb-4 text-base font-light text-white">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default MinistryCard;
