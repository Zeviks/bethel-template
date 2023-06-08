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
      className="h-[100%] overflow-hidden rounded bg-cover p-4 shadow-lg"
      style={{ backgroundImage: `url('${imageURL}')` }}
    >
      <div className="flex h-[100%] flex-col justify-between">
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
