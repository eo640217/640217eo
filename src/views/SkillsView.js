import React from 'react'
import Skill from '../components/Skill'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import { Title } from '../components/Title'
import avatar from '../images/avatar.jpg'

export const SkillsView = () => {
    return (
        <SkillsViewStyled>
            <MainLayout>
                <Title title={'Skills'} span={'Skills'} />

                <div className='skills-grid'>
                    <div className='skill'><Skill title={'Html'} image={avatar} /></div>
                    <div className='skill'><Skill title={'Css'} image={avatar} /></div>
                    <div className='skill'><Skill title={'Js'} image={avatar} /></div>
                    <div className='skill'><Skill title={'Python'} image={avatar} /></div>
                    <div className='skill'><Skill title={'Java'} image={avatar} /></div>
                    <div className='skill'><Skill title={'C'} image={avatar} /></div>
                    <div className='skill'><Skill title={'C++'} image={avatar} /></div>
                    <div className='skill'><Skill title={'SQL'} image={avatar} /></div>
                    <div className='skill'><Skill title={'Postgres'} image={avatar} /></div>
                </div>
            </MainLayout>

        </SkillsViewStyled>
    )
}

const SkillsViewStyled = styled.div`
    width: 100%;
    height: 100vh;
    
    .skills-grid{
        outline: 1px red solid;
        padding: 3rem;
        display: grid ;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;
        /* grid-auto-rows: minmax(100px, auto); */
        .skill{
            outline: 1px red solid;
            width: max-content;
            margin: 50px;
        }
    }

`;
