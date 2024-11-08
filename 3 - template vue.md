# Quasar Framework

## Estrutura do componete Vue

O componente Vue é composto por três partes principais: `template`, `script` e `style`.

Agora vamos explorar cada uma dessas partes iniciando pelo `template`, depois `script` e por último `style`.

### Template

O bloco `template` é onde o HTML do componente é definido. Todo o HTML deve estar dentro do bloco `template`.

```html
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ addWordsToMessage }}</h2>
    <!-- Iremos em script definir o método sayHello que deve ser chamado pelo botão abaixo -->
    <button @click="sayHello">Dizer Olá</button>
  </div>
</template>
```

### Script

O bloco `script` é onde o JavaScript do componente é definido. Todo o JavaScript deve estar dentro do bloco `script`.

```html
<script>
  export default {
    data() {
      return {
        message: 'Ola Coding Girls!'
      }
    },
    // No componente Vue, podemos definir métodos que podem ser chamados em eventos
    // Métodos são definidos dentro do bloco `methods`
    methods: {
      sayHello() {
        // sayHello é um método que irá exibir um alerta com a mensagem e será executado quando o botão "Dizer Olá" for clicado
        alert('Hello Coding Girls!')
      }
    },
    computed: {
      // Computed properties são propriedades que permitem definir propriedades computadas.
      // Propriedades computadas são valores derivados de outras propriedades reativas
      addWordsToMessage() {
        return this.message + ' Como você estão?'
      }
    },
    mounted() {
      // O método mounted é chamado quando o componente é montado
      // Podemos usar este método para executar código quando o componente é montado. Exemplo: fazer uma chamada de API, executar métodos, etc.
      console.log('Componente montado')
    },
  }
</script>
```

Para além de `Computed` e `mounted` temos mais elementos que fazem parte do Vue Life Cycle Hooks, que são:

- `beforeCreate`: Chamado antes de a instância ser criada. Neste ponto, as propriedades do Vue ainda não estão disponíveis.
- `created`: Chamado após a instância ser criada. Neste ponto, as propriedades do Vue estão disponíveis.
- `beforeMount`: Chamado antes do componente ser montado no DOM.
- `mounted`: Chamado após o componente ser montado no DOM.
- `beforeUpdate`: Chamado antes de uma atualização ser feita.
- `updated`: Chamado após uma atualização ser feita.
- `beforeDestroy`: Chamado antes de um componente ser destruído.
- `destroyed`: Chamado após um componente ser destruído.

Devo dizer que dificilmente você irá usar tudo. Use de acordo com suas necessidades.


[<img src="https://img.shields.io/badge/Back-blue" alt="Back" style="vertical-align:middle;">](2%20-%20introducao.md)
[<img src="https://img.shields.io/badge/Next-blue" alt="Next" style="vertical-align:middle;">](4%20-%20quasar%20workflow.md)
