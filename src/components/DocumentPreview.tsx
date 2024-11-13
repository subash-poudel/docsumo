import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import myImage from "../static_data/pages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
export function DocumentPreview() {
  return (
    <div className="flex-grow h-full bg-blue-200">
      <TransformWrapper>
        <TransformComponent>
          <img src={myImage} alt="test" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
