import { SectionChildUiItem } from "../models/section";

export function ColoredDiv({
  rectangle,
  scale,
  color,
  section,
}: {
  rectangle: number[];
  scale: number;
  color: string;
  section: SectionChildUiItem;
}) {
  const [x1, y1, x2, y2] = rectangle;
  const width = (x2 - x1) * scale;
  const height = (y2 - y1) * scale;
  const style = {
    left: `${x1 * scale}px`,
    top: `${y1 * scale}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };
  if (section.isFocused) {
    return (
      <div
        className="absolute  p-1 border rounded animate-blink"
        style={style}
      ></div>
    );
  }
  if (section.isChecked) {
    return <div className="absolute " style={style}></div>;
  }
  return <></>;
}
