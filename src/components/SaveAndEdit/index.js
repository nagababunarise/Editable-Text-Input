import {Component} from 'react'

import {
  AppContainer,
  TextCard,
  Heading,
  UserInput,
  UserButton,
  InputCard,
  Paragraph,
} from './styledComponents'

class SaveAndEdit extends Component {
  state = {
    userInput: '',
    buttonClicked: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({buttonClicked: !prevState.buttonClicked}))
  }

  render() {
    const {userInput, buttonClicked} = this.state
    const buttonText = buttonClicked ? 'Edit' : 'Save'
    return (
      <AppContainer>
        <TextCard>
          <Heading>Editable Text Input</Heading>
          <InputCard>
            {buttonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <UserInput
                type="text"
                placeholder="Enter the Text"
                value={userInput}
                onChange={this.onChangeInput}
              />
            )}
            <UserButton type="button" onClick={this.onClickButton}>
              {buttonText}
            </UserButton>
          </InputCard>
        </TextCard>
      </AppContainer>
    )
  }
}

export default SaveAndEdit
