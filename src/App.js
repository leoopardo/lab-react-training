import "./App.css"
import {IdCard} from "./assets/components/idCard/idCard"
import {Greetings} from "../src/assets/components/greetings/greetings"

function App() {
  return (
    <div className="App">
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
      <div className="labTwo">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    </div>
  );
}

export default App;
