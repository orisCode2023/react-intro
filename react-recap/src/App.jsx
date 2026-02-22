import './App.css'
import Alert from './components/Alert'
import Box from './components/Box'
import DismissibleAlert from './components/DismissibleAlert'
import GreetButton from './components/GreetButton'
import List from './components/List'
import Section from './components/Section'
import UserCard from './components/UserCard'

function App() {
  
  return (
    <>
      <UserCard
      name = "json"
      age = { 28 }
      occupation = "software developer" />   
   
   <Box>
    <h2>Title</h2>
    <p>Lorem, ipsum dolor.</p>
   </Box>
   <Box>Hello there</Box>
   <GreetButton 
   name='ori'
   context= "click me" />
   <DismissibleAlert 
   title={"Notic"}
   message={'something happened'}
   onDismiss={() => alert('alert dismiss')}
   />
   <Alert message={"something went wrong"}/>
   <Section title={'about'}>
    <p>This is the about section.</p>
   </Section>
   <Section>
    <p>section has no title</p>
   </Section>
   <List title={'fruit list'}
   items={['orange', 'apple', 'banana']}/>
    </>
  )
}

export default App
