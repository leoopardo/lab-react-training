import "./App.css"
import {IdCard} from "./assets/components/idCard/idCard"
import {Greetings} from "../src/assets/components/greetings/greetings"
import {Random} from "../src/assets/components/randomNum/randomNum"
import {BoxColor} from "../src/assets/components/BoxColor/BoxColor"

function App() {
  return (
    <div className="App">
      <h1>exercise 1</h1>
      <div className="labOne">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <hr />
      <h1>exercise 2</h1>
      <div className="labTwo">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <hr />
      <h1>exercise 3</h1>
      <div className="labThree">
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <hr />
      <h1>exercise 4</h1>
      <div className="labFour">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
