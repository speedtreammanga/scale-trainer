import React from 'react'
import { LANGUAGE } from '../constants'

const SettingsBar = ({
  currentQuestion: { note, modifier, tone, nthNote },
  score: { streak, right, wrong, count },
  handleSubmission,
  updateAnswer,
  answer,
  typedAnswerWrong,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer) {
      handleSubmission(answer)
    }
  }

  return (
    <div className='col-md-8 px-3 d-flex align-items-center flex-column'>
      {note ? (
        <div className='w-100 mt-3 mb-3 d-flex justify-content-center align-items-center flex-column'>
          <div className='progress w-100'>
            <div
              className='progress-bar progress-bar-striped bg-info'
              role='progressbar'
              style={{ width: `${(streak / count) * 100}%` }}
              aria-valuenow={(streak / count) * 100}
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          <p>{`Score: ${right} out of ${count}`}</p>
        </div>
      ) : null}

      {note && modifier && tone && nthNote ? (
        <div className='mb-3'>
          <h2>
            What is the{' '}
            <span
              className={`badge badge-${typedAnswerWrong ? 'danger' : 'dark'}`}
            >
              {`${LANGUAGE.positions[nthNote]}`} note
            </span>{' '}
            of the{' '}
            <span
              className={`badge badge-${typedAnswerWrong ? 'danger' : 'dark'}`}
            >
              {`${note}${LANGUAGE.tones[tone]} ${LANGUAGE.modifiers[modifier]}`}{' '}
              Scale
            </span>{' '}
            ?
          </h2>

          <form className='mt-4' onSubmit={handleSubmit}>
            <div className='form-group'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Answer</span>
                </div>
                <input
                  type='text'
                  className={`form-control${
                    typedAnswerWrong ? ' is-invalid' : ''
                  }`}
                  aria-label='Your answer'
                  placeholder='Press (Enter) to submit'
                  value={answer}
                  onChange={(e) => updateAnswer(e.target.value)}
                />
              </div>
              <button type='submit' className='w-100 btn btn-primary'>
                Submit
              </button>
            </div>
          </form>

          <div className='alert alert-warning mt-2 mb-2' role='alert'>
            Your answer should look something like{' '}
            <span className='font-weight-bold'>C#</span>,{' '}
            <span className='font-weight-bold'>Ab</span>,{' '}
            <span className='font-weight-bold'>F</span>
          </div>
        </div>
      ) : (
        <>
          <h2>
            Make your selection and hit the Start button to begin the quizz.
          </h2>
          <img
            className='w-100'
            style={{ maxWidth: '420px' }}
            src='/Man_searching.png'
            alt='Man with binoculars'
          />
        </>
      )}
    </div>
  )
}

export default SettingsBar
