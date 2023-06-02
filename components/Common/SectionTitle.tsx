const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </>
  );
};

export default SectionTitle;
