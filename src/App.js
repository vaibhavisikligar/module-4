import Objectexample from "./component/hooks/usestate/Objectexample"
import Arrayexample from "./component/hooks/usestate/Arrayexample"
import Booleanexample from "./component/hooks/usestate/Booleanexample"
import Numberexample from "./component/hooks/usestate/Numberexample"
import Stringexample from "./component/hooks/usestate/Stringexample"
import Mainprops from "./component/Props/Mainprops"
import MainuseEffect from "./component/hooks/useEffect/MainuseEffect"
function App() {
  return (
    <>
      <Stringexample />
      <Numberexample />
      <Booleanexample />
      <Objectexample />
      <Arrayexample />
      <Mainprops />
      <MainuseEffect />
    </>
  );
}
export default App;
