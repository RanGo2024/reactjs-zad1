import logo from './logo.svg';
import './App.css';
import my_data from './custom_utils/default_module';
import * as operacija from "./custom_utils/named_module";

function App() {
  return (
    <div className="App">
      <h2>Osnovni podaci o meni</h2>
      <p>Moje ime je: {my_data.ime}</p>
      <p>Moje prezime je: {my_data.prezime}</p>
      <p>Moje prebivalište je: {my_data.prebivaliste}</p>
      <h2>Osnovne računske operacije</h2>
      <p>Suma brojeva 6 i 7 je: {operacija.sum(6,7)}</p>
      <p>Razlika brojeva 56 i 20 je: {operacija.sub(56,20)}</p>
      <p>Rezultat dijeljenja brojeva 56 i 7 je: {operacija.div(56,7)}</p>
      <p>Umnožak brojeva 6 i 7 je: {operacija.multpl(6,7)}</p>
    </div>
  );
}

export default App;
