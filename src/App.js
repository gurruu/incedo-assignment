import ButtonContainer from "./components/ButtonContainer";
import Counter from "./components/Counter";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  return (
    <>
    {/* USeCallBack Example, Un Comment to see result and please check the console */}
    {/* <ButtonContainer/>   */}
     


     {/* UserReducer Example, Uncomment the below component to see result */}
    {/* <ShoppingCart/> */}



    {/* UseMemo Example, Uncomment the below code to see result */}
    {/* <ExpensiveCalculation value={5}/> */}



    {/* useState and USeEffect Example */}
    <Counter/>
    </>
  );
}

export default App;
