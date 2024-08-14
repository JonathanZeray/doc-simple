interface NumberWithCircleProps {
  content: string;
}

export const NumberWithCircle = ({ content }: NumberWithCircleProps) => {
  return (
    <span className="bg-darkBrown text-white text-base font-bold px-2 rounded-full w-fit h-fit">
      {content}
    </span>
  );
};
