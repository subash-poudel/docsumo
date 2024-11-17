import myImage from "../static_data/pages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
import { useCallback, useEffect, useMemo, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { ColoredDiv } from "../widgets/ColoredDiv";
import { SectionUiItem } from "../models/section";

export const DocumentPreview = ({
  sections,
  zoomLevel,
}: {
  sections: SectionUiItem[];
  zoomLevel: { label: string; value: string };
}) => {
  const divRef = useRef<HTMLDivElement>();
  const zoomRef = useRef<HTMLDivElement>();

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

  useEffect(() => {
    const { current: zoomComponent } = zoomRef;
    if (!zoomComponent) {
      return;
    }
    if (zoomLevel.value === "fit") {
      zoomComponent.scaleTo({ x: 0, y: 0, scale: 1 });
      return;
    }
    const scale = parseFloat(zoomLevel.value) / 100;
    if (zoomComponent) {
      zoomComponent.scaleTo({ x: 0, y: 0, scale: scale });
    }
    // onUpdate({ x: 0, y: 0, scale });
  }, [zoomLevel.value]);

  const initialScale = 0.5;

  const allDivs = useMemo(() => {
    const positions = sections
      .flatMap((s) => s.children)
      // .filter((c) => c.isChecked)
      .filter((c) => {
        if (!c?.content?.position) {
          return null;
        }
        return c.content.position;
      });
    const divs = positions.map((p, i) => (
      <ColoredDiv
        section={p}
        rectangle={p.content.position}
        scale={initialScale}
        color={p.color}
        key={i}
      />
    ));
    return divs;
  }, [sections]);

  const style = {
    left: `${0}px`,
    top: `${0}px`,
    width: `${1700 * initialScale}px`,
    height: `${2200 * initialScale}px`,
  };
  return (
    <QuickPinchZoom onUpdate={onUpdate} ref={zoomRef}>
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
