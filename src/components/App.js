import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './main.js'
import Quiz from './quiz.js'
import Result from './result.js'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },{
    path:'/quiz',
    element:<Quiz/>
  },{
    path:'/result',
    element:<Result/>
  }
])

function App() {
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
