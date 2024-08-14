interface NumberWithCircleProps {
  content: string;
}

export const NumberWithCircle = ({ content }: NumberWithCircleProps) => {
  return (
    <span className="bg-darkBrown text-white text-base font-bold px-4 rounded-full w-fit">
      {content}
    </span>
  );
};
