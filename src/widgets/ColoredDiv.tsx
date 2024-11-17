export function ColoredDiv({
  rectangle,
  scale,
  color,
}: {
  rectangle: number[];
  scale: number;
  color: string;
}) {
  const [x1, y1, x2, y2] = rectangle;
  const width = (x2 - x1) * scale;
  const height = (y2 - y1) * scale;
  return (
    <div
      className="absolute "
      style={{
        left: `${x1 * scale}px`,
        top: `${y1 * scale}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
    ></div>
  );
}
