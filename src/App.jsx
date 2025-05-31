
import './App.css'
import Header from './components/layouts/Header'
import HomeLayout from './components/layouts/HomeLayout ';
import MyProjectsLayout from './components/layouts/MyProjectsLayout';
import CareerObjLayout from './components/layouts/CareerObjLayout';
import EducationLayout from './components/layouts/EducationLayout';
import ExperiencesLayout from './components/layouts/ExperiencesLayout';
import SkillLayout from './components/layouts/SkillLayout';
import MyWritingsLayout from './components/layouts/MyWritingsLayout';
import ContactLayout from './components/layouts/ContactLayout';


function App() {


  return (
    <>
      <Header />
      <HomeLayout id="home" />
      <CareerObjLayout id="careerObjective" />
      <EducationLayout id="education" />
      <ExperiencesLayout id="experience" />
      <SkillLayout id="skills" />      
      <MyProjectsLayout id="myProjects" />
      <MyWritingsLayout id="myWritings" />
      <ContactLayout id="contact" />
    </>
  )
}

export default App
