type HeadingProps = {
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  return <h2 className="font-semibold">{text}</h2>;
};
