import { Button } from "../widgets/Button";
import { Tabs } from "../widgets/Tabs";

export function DocumentControls() {
  return (
    <div className="flex flex-col w-96 h-full bg-green-200">
      Fields
      <Tabs />
      <div className="flex-grow bg-blue-100 p-2">
        <p>Content for Tab 1</p>
        <p>Content for Tab 2</p>
        <p>Content for Tab 3</p>
      </div>
      <div className="h-16 flex justify-between p-2">
        <Button>Select All</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
}
