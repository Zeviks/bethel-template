import React from "react";

interface MinistryCardProps {
  title: string;
  description: string;
  imageURL: string;
}

const MinistryCard: React.FC<MinistryCardProps> = ({
  title,
  description,
  imageURL,
}) => {
  return (
    <div
      className="relative h-[100%] overflow-hidden rounded bg-cover bg-center p-4 shadow-lg"
      style={{
        backgroundImage: `linear-gradient(
          180deg, rgba(0, 10, 26, 0) 35.38%, #15192A 100%
        ),url(${imageURL})`,
      }}
    >
      <div className="flex h-[100%] flex-col justify-end">
        <div>
          <h5 className="text-neutral-800 mb-2 text-xl font-medium leading-tight text-white">
            {title}
          </h5>
          <p className="text-neutral-600 mb-4 text-base font-light text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinistryCard;
