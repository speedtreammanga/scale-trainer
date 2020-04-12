import React, { PureComponent } from 'react'
import SettingsBar from './components/SettingsBar'
import QuestionAnswer from './components/QuestionAnswer'
import { SCALES, NOTES, MODIFIERS, TONES } from './constants'
import { getRandomInt } from './helpers'

const DEFAULT_STATE = {
  settings: {
    notes: ['C'],
    modifiers: ['Maj'],
    tones: ['(regular)'],
  },
  currentQuestion: {
    note: null,
    modifier: null,
    tone: null,
    nthNote: null,
  },
  currentAnswer: null,
  typedAnswer: '',
  typedAnswerWrong: false,
  score: {
    right: 0,
    streak: 0,
    wrong: {},
    count: 0,
  },
}

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE
    this.resetState = this.resetState.bind(this)
    this.updateSettings = this.updateSettings.bind(this)
    this.start = this.start.bind(this)
    this.generateQuestion = this.generateQuestion.bind(this)
    this.handleAnswerSubmission = this.handleAnswerSubmission.bind(this)
    this.updateAnswer = this.updateAnswer.bind(this)
  }

  resetState() {
    this.setState({ ...DEFAULT_STATE })
  }

  updateSettings(key, value) {
    const values = [...this.state.settings[key]]
    const foundAt = values.findIndex((val) => val === value)

    if (foundAt > -1) {
      values.splice(foundAt, 1)
    } else {
      values.push(value)
    }

    this.setState({
      settings: {
        ...this.state.settings,
        [key]: values,
      },
    })
  }

  start() {
    const safeValues = { ...this.state.settings }
    ;['notes', 'modifiers', 'tones'].forEach((key) => {
      if (this.state.settings[key].length === 0) {
        safeValues[key] =
          key === 'notes'
            ? [NOTES[0]]
            : key === 'modifiers'
            ? [MODIFIERS[0]]
            : [TONES[0]]
      }
    })
    this.setState(
      {
        settings: safeValues,
        currentQuestion: DEFAULT_STATE.currentQuestion,
        currentAnswer: DEFAULT_STATE.currentAnswer,
        score: DEFAULT_STATE.score,
      },
      this.generateQuestion
    )
  }

  generateQuestion() {
    const { notes, modifiers, tones } = this.state.settings
    const note = notes[getRandomInt(0, notes.length - 1)]
    const modifier = modifiers[getRandomInt(0, modifiers.length - 1)]
    const tone =
      Math.random() < 0.75 ? tones[getRandomInt(0, tones.length - 1)] : tones[0]
    const nthNote = getRandomInt(1, 7)

    this.setState({
      currentQuestion: {
        note,
        modifier,
        tone,
        nthNote,
      },
      typedAnswer: '',
      typedAnswerWrong: false,
      currentAnswer: SCALES[note][modifier][tone][nthNote - 1],
    })
  }

  updateAnswer(value) {
    this.setState({ typedAnswer: value })
  }

  handleAnswerSubmission(answer) {
    let callback = () => {}
    let correctAnswer = false
    const formatted = answer.split('')
    formatted[0] = formatted[0].toUpperCase()

    if (this.state.currentAnswer === formatted.join('')) {
      correctAnswer = true
      callback = this.generateQuestion()
    }

    this.setState(
      (prevState) => ({
        score: {
          ...prevState.score,
          count: prevState.score.count + 1,
          ...(correctAnswer
            ? // state for right answer...
              {
                right: prevState.score.right + 1,
                streak: prevState.score.streak + 1,
              }
            : // state for wrong answer...
              { wrong: prevState.score.wrong + 1 }),
        },
        typedAnswerWrong: !correctAnswer,
      }),
      callback
    )
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img
              style={{ maxWidth: '50px' }}
              className='mt-2'
              src='/sun.png'
              alt='red sun'
            />
            <div className='row w-100 mt-4'>
              <SettingsBar
                notes={this.state.settings.notes}
                modifiers={this.state.settings.modifiers}
                tones={this.state.settings.tones}
                handleSettingUpdate={this.updateSettings}
                handleStart={this.start}
              />
              <QuestionAnswer
                score={this.state.score}
                currentQuestion={this.state.currentQuestion}
                handleSubmission={this.handleAnswerSubmission}
                updateAnswer={this.updateAnswer}
                answer={this.state.typedAnswer}
                typedAnswerWrong={this.state.typedAnswerWrong}
              />
            </div>
          </div>
          <footer className='text-muted d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              Made with&nbsp;
              <img
                src='/heart.png'
                style={{ maxWidth: '18px' }}
                alt='red heart'
              />
              &nbsp;in Qu&eacute;bec
            </div>
            <div className='d-flex flex-column'>
              <p className='mb-1'>{`Alexandre - ${new Date().getFullYear()}`}</p>
              <a className='mb-0' href='mailto:fournier.afa@gmail.com'>
                fournier.afa@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default App
