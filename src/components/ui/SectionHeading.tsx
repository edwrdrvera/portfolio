type SectionHeadingProps = {
  title: string;
};

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="text-xl md:text-2xl font-bold font-sf tracking-tight lowercase">
      {title}
    </h2>
  );
};

export default SectionHeading;
