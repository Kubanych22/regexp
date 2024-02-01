const showArr = (arr, title) => {
  const p = document.createElement('p');
  p.classList.add('text__task1')
  arr.forEach(item => {
    p.textContent += item
    p.textContent += '\n';
  });
  
  document.body.append(title, p);
}
export const task1 = () => {
  const arr = [
    'module.jsx', 'index.html', 'style.css',
    'index.js', 'file.ts', 'library.css', 'my.plugin.js'
  ];
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Задача № 1:'
  document.body.append(h2)
  
  let h3 = document.createElement('h3');
  h3.textContent = 'Исходный массив:';
  showArr(arr, h3)
  console.log('Задача № 1:');
  console.log('Исходный массив: ', arr);
  
  let newArr = [];
  
  arr.map((item) => {
    item.match(/\S+\.(js|jsx|ts)/g) ? newArr.push(item) : null
  })
  
  console.log('Результирующий массив: ', newArr);
  h3 = document.createElement('h3');
  h3.textContent = 'Результирующий массив:'
  showArr(newArr, h3)
}

