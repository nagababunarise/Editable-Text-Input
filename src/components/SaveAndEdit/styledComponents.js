import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextCard = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: black;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  padding-top: 30px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`
export const UserInput = styled.input`
  color: #323f4b;
  background-color: white;
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border-width: 0.1px;
  outline: none;
  font-weight: bold;
  font-size: 25px;
`
export const UserButton = styled.button`
  background-color: #d946ef;
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  border-radius: 5px;
  border: 0;
  height: 40px;
  width: 80px;
  margin: 10px;
  font-size: 18px;
`
export const Paragraph = styled.p`
  color: black;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 30px;
`
