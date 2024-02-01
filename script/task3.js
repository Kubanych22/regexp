export const task3 = () => {
  const str = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.
  `;
  
  console.log('\nЗадача № 3:');
  const h2 = document.createElement('h2');
  h2.textContent = 'Задача № 3:';
  
  let h3 = document.createElement('h3');
  h3.textContent = 'Исходный текст:';
  const text = document.createElement('p');
  text.classList.add('text__task3')
  text.textContent = str;
  
  document.body.append(h2, h3, text)
  
  // const regexp = /\((.*?)\)/gi;
  const regexp = /(?<=\()[^()]+(?=\))/gi;
  
  const result = str.match(regexp);
  console.log(result);
  
  h3 = document.createElement('h3');
  h3.textContent = 'Текст в скобхах:'
  document.body.append(h3)
  
  const p = document.createElement('p');
  p.classList.add('text__task3-braces')
  
  result.map((item) => {
    p.textContent += item;
    p.textContent += '\n'
    return p.textContent
  });
  
  document.body.append(p)
  
}
