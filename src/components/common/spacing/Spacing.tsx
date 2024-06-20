interface SpaceProps {
  size: number;
  direction?: "vertical" | "horizontal";
}

const Spacing = ({ size, direction = "vertical" }: SpaceProps) => {
  return <div style={{ [direction === "vertical" ? "height" : "width"]: `${size}px` }} />;
};

export default Spacing;
