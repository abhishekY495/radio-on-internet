import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import { setAPI } from "./features/apiSlice";
import Radio from "./components/Radio";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAPI());
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <Toaster position="top-center" containerStyle={{ top: 95 }} />
      <Radio />
      <Footer />
    </div>
  );
}

export default App;
