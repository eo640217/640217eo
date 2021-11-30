import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import { Title } from '../components/Title'
import ImageSection from '../components/ImageSection'


export const AboutView = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />

            </AboutStyled>
        </MainLayout>
    )
}


const AboutStyled = styled.section`
    width: 100%;
    height: 100vh;
    `

