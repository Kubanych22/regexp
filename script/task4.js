export const task4 = () => {
  const str = `Самые лучшие способы приготовления еды приведены на русскоязычном ресурсе http://site.ru и на английском языке - https://site.com.
  `;
  
  console.log('\nЗадача № 4:');
  const h2 = document.createElement('h2');
  h2.textContent = 'Задача № 4:';
  
  let h3 = document.createElement('h3');
  h3.textContent = 'Исходная строка:';
  const text = document.createElement('p');
  text.classList.add('text__task4')
  text.textContent = str;
  
  document.body.append(h2, h3, text)
  
  const regexp = /((https?):\/\/)([a-z0-9.]*[a-z0-9])/ig // упрощенный
  // const regexp = /((https?):\/\/)([a-z0-9+&@#-\/%?=~_|!:,.;]*[a-z0-9+&@#-\/%=~_|])/ig
  
  const result = str.replace(regexp, '<a class="task4__link" href="$1$3">$3</a>');

  console.log(result);
  
  h3 = document.createElement('h3');
  h3.textContent = 'Результат:'
  document.body.append(h3)
  
  const p = document.createElement('p');
  p.classList.add('text__task4-result')

  p.innerHTML = result
  document.body.append(p)
}

