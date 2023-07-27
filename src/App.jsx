import { Toaster } from "react-hot-toast";

import Radio from "./components/Radio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Toaster position="top-center" />
      <Radio />
      <Footer />
    </div>
  );
}

export default App;
