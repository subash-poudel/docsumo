import { RecoilRoot } from "recoil";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <RecoilRoot>
      <div className="h-screen flex bg-white dark:bg-gray-900 text-black dark:text-white">
        <MainContent />
      </div>
    </RecoilRoot>
  );
}

export default App;
