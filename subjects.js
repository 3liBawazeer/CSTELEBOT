const localDB = {
  level1: {
    term1: [
      [
        {
          text: "Computer Skills",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "comp_skill",
            },
          }),
        },
      ],
      [
        {
          text: "Islamic Culture | ثقافة إسلامية",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "Islamic",
            },
          }),
        },
      ],
      [
        {
          text: "Computer Programming",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "Progrmming",
            },
          }),
        },
      ],
      [
        {
          text: "English Language",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "EL",
            },
          }),
        },
      ],
      [
        {
          text: "Discrete Structures",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "Discrete",
            },
          }),
        },
      ],
      [
        {
          text: "Arabic Language",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "arabic",
            },
          }),
        },
      ],
      [
        {
          text: "Differential Calculus",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "DiffC",
            },
          }),
        },
      ],
    ],
    term2: [
      [
        {
          text: "IT fundamentals",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "IT_F",
            },
          }),
        },
      ],
      [
        {
          text:"General Physics",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "G_PH",
            },
          }),
        },
      ],
      [
        {
          text: "Computer Programming",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "progrmming",
            },
          }),
        },
      ],
      [
        {
          text: "English Language",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "EL",
            },
          }),
        },
      ],
      [
        {
          text: "Islamic Culture",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "islamic",
            },
          }),
        },
      ],
      [
        {
          text: "Arabic Language",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "arabic",
            },
          }),
        },
      ],
      [
        {
          text: "Integral Calculus",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "integral",
            },
          }),
        },
      ],
    ],
  },
  level2: {
    term1: [
      [
        {
          text: "Object Orianted Programming",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "OOP",
            },
          }),
        },
      ],
      [
        {
          text: "Computer Orgnization and Architucture",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "CO&A",
            },
          }),
        },
      ],
      [
        {
          text: "Theory of Computation",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "TofC",
            },
          }),
        },
      ],
      [
        {
          text: "English Language",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "EL",
            },
          }),
        },
      ],
      [
        {
          text: "linear Algebra",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "LA",
            },
          }),
        },
      ],
      [
        {
          text: "Data Structure",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: true,
              folder: "DS",
            },
          }),
        },
      ],
      [
        {
          text: "Probilty and Statisces",
          callback_data: JSON.stringify({
            type: "subj",
            data: {
              isWorkable: false,
              folder: "P&S",
            },
          }),
        },
      ],
    ],
    //  2
    term2: [
      [
        {
          text: "Object Orianted Programming",
          callback_data: JSON.stringify({
            type: "subj",
            isWorkable: true,
            folder: "OOP",
          }),
        },
      ],
      [
        {
          text: "Computer Orgnization and Architucture",
          callback_data: JSON.stringify({
            type: "subj",
            isWorkable: true,
            folder: "CO&A",
          }),
        },
      ],
      [
        {
          text: "Theory of Computation",
          callback_data: {
            type: "subj",
            isWorkable: false,
            folder: "TofC",
          },
        },
      ],
      [
        {
          text: "English Language",
          callback_data: {
            type: "subj",
            isWorkable: false,
            folder: "EL",
          },
        },
      ],
      [
        {
          text: "linear Algebra",
          callback_data: {
            type: "subj",
            isWorkable: false,
            folder: "LA",
          },
        },
      ],
      [
        {
          text: "Data Structure",
          callback_data: {
            type: "subj",
            isWorkable: true,
            folder: "DS",
          },
        },
      ],
      [
        {
          text: "Probilty and Statisces",
          callback_data: {
            type: "subj",
            isWorkable: false,
            folder: "P&S",
          },
        },
      ],
    ],
  },
  level3: {
    term1: [],
    term2: [],
  },
  level4: {
    term1: [],
    term2: [],
  },
};

module.exports = { localDB };
