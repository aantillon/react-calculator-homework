const keyRows = [
  {
    keys: [
      { value: "Del", cssClasses: "del-bg", htmlId: "delete" },
      { value: "%", cssClasses: "btn-style operator opera-bg fall-back" },
      { value: "+", cssClasses: "btn-style opera-bg value align operator" }
    ],
    id: 1
  },
  {
    keys: [
      { value: 7, cssClasses: "btn-style num-bg num first-child" },
      { value: 8, cssClasses: "btn-style num-bg num" },
      { value: 9, cssClasses: "btn-style num-bg num" },
      { value: "-", cssClasses: "btn-style opera-bg operator" }
    ],
    id: 2
  },
  {
    keys: [
      { value: 4, cssClasses: "btn-style num-bg num first-child" },
      { value: 5, cssClasses: "btn-style num-bg num" },
      { value: 6, cssClasses: "btn-style num-bg num" },
      { value: "*", cssClasses: "btn-style opera-bg operator" }
    ],
    id: 3
  },
  {
    keys: [
      { value: 1, cssClasses: "btn-style num-bg num first-child" },
      { value: 2, cssClasses: "btn-style num-bg num" },
      { value: 3, cssClasses: "btn-style num-bg num" },
      { value: "/", cssClasses: "btn-style opera-bg operator" }
    ],
    id: 4
  },
  {
    keys: [
      { value: 0, cssClasses: "num-bg zero", htmlId: "delete" },
      { value: ".", cssClasses: "btn-style num-bg period fall-back" },
      { value: "=", cssClasses: "eqn align", htmlId: "eqn-bg" },
    ],
    id: 5
  },
]

exports.keyRows = keyRows;
