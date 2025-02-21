import React, { Suspense, useState, useEffect } from 'react';
import './output.css';

// const Home = React.lazy(() => {
//   return Promise.all([import("./Components/Home/HomePage")])
//     .then(([moduleExports]) => moduleExports);
// });
// const Contact = React.lazy(() => {
//   return Promise.all([import("./Components/Contact/ContactPage")])
//     .then(([moduleExports]) => moduleExports);
// });
// const About = React.lazy(() => {
//   return Promise.all([import("./Components/About/AboutPage")])
//     .then(([moduleExports]) => moduleExports);
// });
// const Education = React.lazy(() => {
//   return Promise.all([import("./Components/About/EducationPage")])
//     .then(([moduleExports]) => moduleExports);
// });
// const Projects = React.lazy(() => {
//   return Promise.all([import("./Components/Projects/ProjectsPage")])
//     .then(([moduleExports]) => moduleExports);
// });
const Layout = React.lazy(() => {
  return Promise.all([import("./Components/Layouts/Layout"),
  new Promise(resolve => setTimeout(resolve, 5000))])
    .then(([moduleExports]) => moduleExports);
});

function App() {

  return (
    <FadeInWrapper>
      <Suspense fallback={<LoadingIndicator />}>
        <Layout>
        </Layout>
      </Suspense>
    </FadeInWrapper >
  );
}

const LoadingIndicator = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 100;
    const increment = 100 / (duration / interval);

    const intervalId = setInterval(() => {
      setProgressWidth((prevWidth) => {
        const newWidth = prevWidth + increment;
        if (newWidth >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return newWidth;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-dvw h-dvh flex flex-col justify-center items-center bg-gray-950 text-white'>
      <img src={process.env.PUBLIC_URL + '/images/Logo_W.png'} className='w-32' alt='logo' />
      <div className="h-2 w-48 bg-neutral-200 dark:bg-neutral-600 rounded-full">
        <div className="h-2 bg-slate-100 rounded-full" style={{ width: `${progressWidth}%`, transition: 'width 0.1s linear' }}></div>
      </div>
    </div>
  );
};

const FadeInWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(true);
    }, 4999);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`fade-out ${isVisible ? 'bg-visible' : ''}`}>
      {children}
    </div>
  );
};

export default App;
