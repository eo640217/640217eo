import React from 'react'
import styled from 'styled-components'

const Skill = ({ title, image }) => {
    return (
        <SkillStyled>
            <div className='image-content'>
                {title}
            </div>
            <div className='title-content'>
                {title}
            </div>

        </SkillStyled>
    )
}
const SkillStyled = styled.div`
width: 20px;
height: 20px;
/* *{outline: 1px red solid;} */
text-align: center;
justify-content: center;
align-items: center;
.top-content{

}

`;

export default Skill

