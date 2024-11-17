import myImage from "../static_data/pages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
import { useCallback, useMemo, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { getBboxes } from "../api/api";
import { ColoredDiv } from "../widgets/ColoredDiv";

export const DocumentPreview = () => {
  const boxes = getBboxes();
  const divRef = useRef<HTMLDivElement>();


  const onUpdate = useCallback(
    ({ x, y, scale }: { x: number; y: number; scale: number }) => {
      const { current: div } = divRef;
      if (div) {
        const value = make3dTransformValue({ x, y, scale });
        div.style.setProperty("transform", value);
      }
    },
    []
  );
  const initialScale = 0.5;

  const allDivs = useMemo(() => {
    return boxes.data.bboxes.map((b, i) => {
      return <ColoredDiv rectangle={b.rectangle} scale={initialScale} key={i} />;
    });
  }, []);
  const style = {
    left: `${0}px`,
    top: `${0}px`,
    width: `${1700 * initialScale}px`,
    height: `${2200 * initialScale}px`,
  };
  return (
    <QuickPinchZoom onUpdate={onUpdate}>
      <div
        ref={divRef}
        style={style}
        className="relative w-full border border-black"
      >
        <img src={myImage} alt="test" />
        <div className="absolute inset-0 bg-opacity-50">{allDivs}</div>
      </div>
    </QuickPinchZoom>
  );
};
