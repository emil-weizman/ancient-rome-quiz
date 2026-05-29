export interface Question {
  question_id: number;
  question: string;
  hint: string;
  answer_index: number;
  choices: string[];
}

export const questions: Question[] = [
  {
    question_id: 1,
    question:
      'What famous Roman general and statesman was assassinated on the Ides of March in 44 BC?',
    answer_index: 0,
    choices: ['Julius Caesar', 'Augustus'],
    hint: 'He was also a renowned military commander and dictator of Rome.',
  },
  {
    question_id: 2,
    question: 'What was the name of a common silver coin used in ancient Rome?',
    answer_index: 1,
    choices: ['Sestertius', 'Denarius', 'Aureus'],
    hint: 'It was a silver coin widely used in the Roman Republic and Empire.',
  },
  {
    question_id: 3,
    question:
      'What famous building in Rome was used for chariot races and large public events?',
    answer_index: 1,
    choices: ['The Colosseum', 'Circus Maximus', 'Pantheon', 'Forum Romanum'],
    hint: 'It could hold a very large number of spectators.',
  },
  {
    question_id: 4,
    question:
      'Which Roman emperor built a wall in northern Britain to defend the province from northern tribes?',
    answer_index: 0,
    choices: ['Hadrian', 'Constantine', 'Trajan', 'Augustus'],
    hint: 'The wall is named after him.',
  },
  {
    question_id: 5,
    question: 'What was the name of the first Roman emperor?',
    answer_index: 3,
    choices: ['Julius Caesar', 'Tiberius', 'Caligula', 'Augustus'],
    hint: 'He was Julius Caesar’s adopted heir.',
  },
  {
    question_id: 6,
    question:
      'What was the name of the famous Roman road that ran from Rome to Brindisi?',
    answer_index: 0,
    choices: ['Via Appia', 'Via Flaminia', 'Via Traiana', 'Via Aurelia'],
    hint: 'It was also known as the Appian Way.',
  },
  {
    question_id: 7,
    question:
      'Which famous physician worked in the Roman Empire and strongly influenced ancient medicine?',
    answer_index: 0,
    choices: ['Galen', 'Hippocrates', 'Aristotle', 'Avicenna'],
    hint: 'He served as physician to several Roman emperors.',
  },
  {
    question_id: 8,
    question:
      "What was the name of the Roman emperor and philosopher who wrote 'Meditations'?",
    answer_index: 0,
    choices: ['Marcus Aurelius', 'Epictetus', 'Plato'],
    hint: 'He was also one of the so-called Five Good Emperors.',
  },
  {
    question_id: 9,
    question: 'Which Roman festival was held in honor of the god Saturn?',
    answer_index: 0,
    choices: ['Saturnalia', 'Lupercalia', 'Fornacalia', 'Consualia'],
    hint: 'It was one of the most popular festivals in ancient Rome.',
  },
  {
    question_id: 10,
    question:
      "What was the name of the Roman poet who wrote the epic poem 'The Aeneid'?",
    answer_index: 1,
    choices: ['Horace', 'Virgil', 'Ovid'],
    hint: 'He lived during the reign of Augustus.',
  },
  {
    question_id: 11,
    question:
      'What was the name of the Roman statesman and orator known for his speeches against Mark Antony?',
    answer_index: 2,
    choices: [
      'Cato the Elder',
      'Marcus Licinius Crassus',
      'Cicero',
      'Lucius Cornelius Sulla',
    ],
    hint: "He was one of Rome's greatest orators.",
  },
  {
    question_id: 12,
    question:
      'What was the name of the ancient Roman goddess of love and beauty?',
    answer_index: 1,
    choices: ['Juno', 'Venus'],
    hint: 'She was the mother of Cupid.',
  },
  {
    question_id: 13,
    question:
      'What was the name of the Roman commander who defeated Hannibal in the Second Punic War?',
    answer_index: 0,
    choices: ['Scipio Africanus', 'Julius Caesar', 'Pompey', 'Fabius Maximus'],
    hint: 'He defeated Hannibal at the Battle of Zama.',
  },
  {
    question_id: 14,
    question:
      "What was the name of the Roman historian who wrote 'The Histories'?",
    answer_index: 0,
    choices: ['Tacitus', 'Livy', 'Suetonius'],
    hint: 'He also wrote about the early Roman Empire.',
  },
  {
    question_id: 15,
    question:
      "Which Roman emperor is associated with the phrase 'I found Rome a city of bricks and left it a city of marble'?",
    answer_index: 0,
    choices: ['Augustus', 'Nero', 'Titus', 'Vespasian'],
    hint: 'He was the first Roman emperor.',
  },
  {
    question_id: 16,
    question:
      'What was the name of the Roman general who defeated and sacked Corinth in 146 BC?',
    answer_index: 1,
    choices: [
      'Pompey',
      'Lucius Mummius',
      'Gnaeus Domitius Ahenobarbus',
      'Scipio Aemilianus',
    ],
    hint: 'His victory marked the end of independent Greek resistance to Rome.',
  },
  {
    question_id: 17,
    question:
      'Which Roman emperor issued the Edict of Milan, granting religious tolerance to Christians in the Roman Empire?',
    answer_index: 2,
    choices: ['Trajan', 'Hadrian', 'Constantine', 'Nero'],
    hint: 'The city of Constantinople was named after him.',
  },
  {
    question_id: 18,
    question:
      'Which Roman consul was defeated by Hannibal at the Battle of Cannae in 216 BC?',
    answer_index: 1,
    choices: [
      'Scipio Africanus',
      'Lucius Aemilius Paullus',
      'Publius Cornelius Scipio',
      'Gaius Flaminius',
    ],
    hint: 'He was one of the Roman consuls killed at Cannae.',
  },
  {
    question_id: 19,
    question:
      "What was the name of the Roman poet who wrote the 'Metamorphoses'?",
    answer_index: 2,
    choices: ['Lucretius', 'Catullus', 'Ovid'],
    hint: 'He was exiled by the emperor Augustus.',
  },
  {
    question_id: 20,
    question:
      'Who defeated the forces of Cleopatra and Mark Antony at the Battle of Actium in 31 BC?',
    answer_index: 0,
    choices: ['Octavian (Augustus)', 'Julius Caesar'],
    hint: 'He later became the first Roman emperor.',
  },
];
