import React, { useState } from 'react'
import { MODIFIERS, NOTES, TONES } from '../constants'

const SettingsBar = ({
  notes,
  modifiers,
  tones,
  handleSettingUpdate,
  handleStart,
}) => {
  const [quizzOn, setQuizzOn] = useState(false)
  const [showCircleOfFifths, toggleCircleOfFifths] = useState(false)

  return (
    <div className='col-md-4 mb-4 card d-flex flex-column align-items-start'>
      <div className='card-body w-100'>
        <h4 className='card-title'>Quizz me on the following</h4>
        <div className='mt-2'>
          <h6 className='mb-1'>
            <span className='badge badge-dark'>Notes:</span>
          </h6>
          {NOTES.map((val, i) => (
            <div className='form-check form-check-inline' key={`note-${val}`}>
              <input
                className='form-check-input'
                id={`note-checkbox-${val}`}
                type='checkbox'
                value={val}
                checked={notes.includes(val)}
                onChange={() => handleSettingUpdate('notes', val)}
              />
              <label
                className='form-check-label'
                htmlFor={`note-checkbox-${val}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <div className='mt-3'>
          <h6 className='mb-1'>
            <span className='badge badge-dark'>Modifier:</span>
          </h6>
          {MODIFIERS.map((val, i) => (
            <div
              className='form-check form-check-inline'
              key={`modifier-${val}`}
            >
              <input
                className='form-check-input'
                id={`modifier-checkbox-${val}`}
                type='checkbox'
                value={val}
                checked={modifiers.includes(val)}
                onChange={() => handleSettingUpdate('modifiers', val)}
                disabled={i === 1}
              />
              <label
                className='form-check-label'
                htmlFor={`modifier-checkbox-${val}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <div className='mt-3'>
          <h6 className='mb-1'>
            <span className='badge badge-dark'>Tones:</span>
          </h6>
          {TONES.map((val, i) => (
            <div className='form-check form-check-inline' key={`tone-${val}`}>
              <input
                className='form-check-input'
                id={`tone-checkbox-${val}`}
                type='checkbox'
                value={val}
                checked={tones.includes(val)}
                onChange={() => handleSettingUpdate('tones', val)}
                disabled={[1, 2].includes(i)}
              />
              <label
                className='form-check-label'
                htmlFor={`tone-checkbox-${val}`}
              >
                {val}
              </label>
            </div>
          ))}
        </div>
        <div className='d-flex flex-column mt-3'>
          <button
            type='button'
            className={`btn btn-outline-${quizzOn ? 'secondary' : 'primary'}`}
            onClick={() => {
              setQuizzOn(!quizzOn)
              handleStart()
            }}
          >
            {quizzOn ? 'Restart' : 'Start'}
          </button>
          <button
            type='button'
            className='mt-2 btn btn-link'
            onClick={() => toggleCircleOfFifths(!showCircleOfFifths)}
          >
            {showCircleOfFifths ? 'Hide Circle of 5ths' : 'Show Circle of 5ths'}
          </button>
          {showCircleOfFifths && (
            <img
              className='w-100'
              src='/Circle_of_5ths.jpg'
              alt='Circle of 5ths'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SettingsBar
