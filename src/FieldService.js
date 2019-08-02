const OperationsType = [
  {
    id: 0,
    name: 'Вспашка'
  },
  {
    id: 1,
    name: 'Боронование'
  },
  {
    id: 2,
    name: 'Внесение удобрений'
  },
  {
    id: 3,
    name: 'Полив'
  },
  {
    id: 4,
    name: 'Прикатывание'
  },
  {
    id: 5,
    name: 'Сбор урожая'
  }
]

const Assessment = [
  {
    id: 0,
    name: 'Отлично'
  },
  {
    id: 1,
    name: 'Удовлетворительно'
  },
  {
    id: 2,
    name: 'Плохо'
  }
]

let operations = [
  {
    id: 'f112-o0', // идентификатор операции
    type: 0, // тип из OperationsType
    date: { year: 2018, month: 3, day: 12 }, // дата
    area: 48.2, // площадь обработки в га
    comment: 'Отлично вспахали', // комментарий
    assessment: 0, // качество из Assessment
    doned: true, // флаг завершённости
    cultue: 'Пшеница озимая' // культура
  },
  {
    id: 'f112-o1',
    type: 2,
    date: { year: 2018, month: 3, day: 14 },
    area: 47.8,
    comment: 'Все прошло нормально',
    assessment: 1,
    doned: true,
    cultue: 'Пшеница озимая'
  },
  {
    id: 'f112-o2',
    type: 4,
    date: { year: 2018, month: 3, day: 17 },
    area: 47.5,
    comment: null,
    assessment: 2,
    doned: true,
    cultue: 'Пшеница озимая'
  },
  {
    id: 'f112-o3',
    type: 1,
    date: { year: 2018, month: 3, day: 26 },
    area: 48.2,
    comment: null,
    assessment: null,
    doned: false,
    cultue: 'Пшеница озимая'
  },
  {
    id: 'f112-o4',
    type: 3,
    date: { year: 2018, month: 4, day: 2 },
    area: 48.1,
    comment: 'Знатно полили',
    assessment: 0,
    doned: true,
    cultue: 'Пшеница озимая'
  },
  {
    id: 'f112-o5',
    type: 5,
    date: { year: 2018, month: 6, day: 20 },
    area: 48.0,
    comment: null,
    assessment: null,
    doned: false,
    cultue: 'Пшеница озимая'
  }
]

const TIMEOUT = 1000

function resolveWithTimeout (data, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}

/**
 * Имитирует получение истории операций по тестовому полю 112
 */
function getOperations () {
  return resolveWithTimeout(operations.slice(), TIMEOUT)
}
/**
 * Имитирует получение операции по id
 */
function getOperation (operationId) {
  const operation = operations.find(el => el.id === operationId)
  return resolveWithTimeout(operation ? { ...operation } : null, TIMEOUT)
}

export {
  OperationsType,
  Assessment,
  getOperation,
  getOperations
}
