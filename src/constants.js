//notes
const C = 'C'
const Csharp = 'C#'
const Cflat = 'Cb'
const D = 'D'
const Dsharp = 'D#'
const Dflat = 'Db'
const E = 'E'
const Esharp = 'E#'
const Eflat = 'Eb'
const F = 'F'
const Fsharp = 'F#'
const Fflat = 'Fb'
const G = 'G'
const Gsharp = 'G#'
const Gflat = 'Gb'
const A = 'A'
const Asharp = 'A#'
const Aflat = 'Ab'
const B = 'B'
const Bsharp = 'B#'
const Bflat = 'Bb'
//modifiers
const Major = 'Maj'
const Minor = 'min'
//tones
const Regular = '(regular)'
const Sharp = '#'
const Flat = 'b'

export const NOTES = [C, D, E, F, G, A, B]
export const TONES = [Regular, Sharp, Flat]
export const MODIFIERS = [Major, Minor]
export const NOTE_VALUES = [1, 2, 3, 4, 5, 6, 7]

export const LANGUAGE = {
  positions: {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    6: "6th",
    7: '7th'
  },
  modifiers: {
    [Major]: 'Major',
    [Minor]: 'minor'
  },
  tones: {
    [Regular]: '',
    [Sharp]: Sharp,
    [Flat]: Flat
  }
}

export const SCALES = {
  'C': {
    'Maj': {
      '(regular)': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      '#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
      'b': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
    },
    'min': {
      '(regular)': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
      '#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
      // TODO: replace by 'B.min.(regular)' to link to that scale instead...
      'b': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
    }
  },
  'D': {
    'Maj': {
      '(regular)': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
  'E': {
    'Maj': {
      '(regular)': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
  'F': {
    'Maj': {
      '(regular)': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
  'G': {
    'Maj': {
      '(regular)': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
  'A': {
    'Maj': {
      '(regular)': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
  'B': {
    'Maj': {
      '(regular)': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      '#': [],
      'b': []
    },
    'min': {
      '(regular)': [],
      '#': [],
      'b': []
    }
  },
}