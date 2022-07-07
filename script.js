/*

# O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

const button = document.querySelector('button');
button.addEventListener('click', updateButton);
function updateButton() {

  let userName = prompt("Olá, usuário! Qual seu nome?")
  let option 

  while (option != 2) {
    option = prompt(`
    Eai, ${userName}. =)
    Vamos realizar operações matemáticas juntos?
  
    1. Sim, vamos nessa!
    2. Não, obrigado. 
    `)

    const optionNumber = Number(option)
  
    switch (optionNumber) {

      case 1:
        alert(`
        Ok, ${userName}, então vamos lá!
        Insira dois números de sua preferência. :)`)

        let firstNumber = prompt("Digite o primeiro número:")
        let secondNumber = prompt("Ok, agora o segundo número :D")

        alert(`
        Tudo certo, ${userName}.
        Vamos aos resultados das operações matemáticas.`)

        firstNumber = Number(firstNumber)
        secondNumber = Number(secondNumber)

        const sum = firstNumber + secondNumber
        const subtration = firstNumber - secondNumber
        const multiplication = firstNumber * secondNumber
        const division = firstNumber / secondNumber
        const restDivision = firstNumber % secondNumber

        alert(`
        A soma dos números é: ${sum}`)
        alert(`
        A subtração é: ${subtration}`)
        alert(`
        A multiplicação é: ${multiplication}`)
        alert(`
        A divisão é: ${division}`)
        alert(`
        O resto da divisão é: ${restDivision}`)

        if (sum % 2 === 0) {
          alert(`
          A soma dos dois números é um valor par: ${sum}`)

        } else {
          alert(`
          A soma dos dois números é um valor ímpar: ${sum}`)
        }

        if (firstNumber == secondNumber) {
          alert(`
          E os dois números inseridos são iguais: ${firstNumber} e ${secondNumber} `)

        } else {
          alert(`
          E os dois números inseridos são diferentes: ${firstNumber} e ${secondNumber} `)
        }
      
        alert(`
        Prontinho, ${userName}. Espero que tenha gostado. :D`)
        break
    
      case 2:
        alert(`
        Ok, ${userName}. Até mais :)`)
        break
      
      
      default:
        if (Number.isNaN(optionNumber)) {
          alert(`
          Opção inválida. Você inseriu o texto: ${option}.
          Insira apenas o número 1 ou 2.`)

        } else {
          alert(`
          Opção inválida. Você inseriu o número: ${option}.
          Insira apenas o número 1 ou 2.`)
        }
        
    }

  }
}







