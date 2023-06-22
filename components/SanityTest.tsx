const SanityTest = ({ pets }) => {
  return (
    <div>
      <ul>
        {pets.map((pet, index) => (
          <div
            key={index}
            className="h-[400px] w-[200px] px-2 sm:w-[250px] md:w-[300px]"
          >
            <div className="flex items-center justify-center">
              <h3 className="font-semibold">{pet.name}</h3>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SanityTest;
