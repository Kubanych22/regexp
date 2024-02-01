export const task2 = () => {
  const h2 = document.createElement('h2');
  h2.textContent = 'Задача № 2:'
  const form = document.createElement('form');
  form.classList.add('task2__form');
  const input = document.createElement('input');
  const output = document.createElement('p');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend')
  legend.textContent = 'Введите email'
  fieldset.append(legend, input)
  
  form.append(fieldset);
  document.body.append(h2, form, output)
  
  console.log('\nЗадача № 2:');
  
  input.addEventListener('input', (e) => {
    e.preventDefault();
    output.textContent = 'Email невалидный';
    const regexp = /-/
    if (regexp.test(input.value)) {
      return
    }
    input.value = input.value.replace(/(\w+)@([a-z]{3,})\.([a-z]{2,5})/gi,
      (str) => {
        console.log(str);
        output.textContent = str;
        str = '';
        return str;
      });
  });
}

