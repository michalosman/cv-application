import React from 'react'
import styled from 'styled-components'
import Subsection from '../Utils/Subsection'

const EducationItem = ({ educationItem }) => {
  return (
    <EducationItemWrapper>
      <Period>
        {educationItem.from} - {educationItem.to}
      </Period>
      <Info>
        <Subsection
          title={`${educationItem.universityName}, ${educationItem.city}`}
        >
          <p>Degree: {educationItem.degree}</p>
          <p>Subject: {educationItem.subject}</p>
        </Subsection>
      </Info>
    </EducationItemWrapper>
  )
}

const EducationItemWrapper = styled.div`
  display: flex;
`

const Period = styled.div`
  width: 25%;
  font-weight: bold;
  margin-right: 2rem;
`

const Info = styled.div`
  width: 70%;
`

export default EducationItem
