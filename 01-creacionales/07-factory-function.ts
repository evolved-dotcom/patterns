/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = 'en' | 'es' | 'fr';

function createGreeter(language: Language) {
  return function (name: string): string {
      const messages = {
          es: `Hola, ${name}!`,
          en: `Hello, ${name}!`,
          fr: `Bonjour, ${name}!`
      }
      return messages[language];
  }
}

function main() {
    const spanishGreeter = createGreeter('es');
    const englishGreeter = createGreeter('en');
    const frenchGreeter = createGreeter('fr');

    console.log(spanishGreeter('Carlos'));
    console.log(englishGreeter('John'));
    console.log(frenchGreeter('Marie'));
}

main();