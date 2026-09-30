import { createBrowserRouter } from 'react-router'
import App from './App.tsx'
import Home from '../pages/Home/Home.tsx'
import About from '../pages/About/About.tsx'
import Contact from '../pages/Contact/Contact.tsx'
import Todo from '../pages/Todo/Todo.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'todo',
        Component: Todo,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      }
    ]
  }
])