import './App.css';
import { Greet } from "./components/Greet"
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Header } from './components/Header';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { LoggedIn } from './components/State/LoggedIn';
import { User } from './components/State/User';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { Box } from './components/Context/Box';
import { UserContextProvider } from './components/Context/UserContext';
import { User as ContextUser } from './components/Context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { UseMemo } from './components/use-memo/UseMemo';

export default function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const names = [
    {
      first: "Himanshu",
      last: "Mendapra"
    },
    {
      first: "Ronil",
      last: "Mendapra"
    },
    {
      first: "Ridham",
      last: "Shingala"
    },
    {
      first: "Dhruvit",
      last: "Pokiya"
    },
  ]

  return (
    <div className="App">
      <Greet name="Himanshu" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={names} />
      <Status status='success'></Status>
      <Header>Hello this from children</Header>
      <Oscar>
        <Header>Oscar goes to dicaprio...</Header>
      </Oscar>
      <Button clickHandler={(event, id) => {
        console.log("hello from button", event, id);
      }}></Button>
      <Input value='' changeHandler={(event) => console.log(event)}></Input>
      <LoggedIn></LoggedIn>
      <User></User>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <UserContextProvider>
        <ContextUser></ContextUser>
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile}></Private>
      <RandomNumber value={30} isPositive={true}></RandomNumber>
      <Toast position='center'></Toast>
      <UseMemo></UseMemo>
    </div>
  );
}

