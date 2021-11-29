import React from 'react'
// import { About } from './components/About';
// import { Contact } from './components/Contact';
import { Sidebar } from './components/Sidebar'
import styled from 'styled-components';
import { Landing } from './views/LandingView';
import { Work } from './components/Work';

function App() {
  return (
    <div className='App'>
      {/* <Sidebar /> */}
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}
        <Landing />
        <Work />
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
position: relative;
  
.lines{
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .line-1, .line-2,.line-3, .line-4{
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);
  }
}




`;

export default App;
