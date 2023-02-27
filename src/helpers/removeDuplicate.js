export default (array) => array.reduce((prev, current) => {
  const array = prev

  if (!array.find(i => i === current)) {
    array.push(current)
  }

  return array
}, [])
