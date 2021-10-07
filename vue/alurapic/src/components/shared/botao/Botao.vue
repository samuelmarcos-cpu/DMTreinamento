<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao[estilo]"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      required: false,
      default: "button",
    },

    rotulo: {
      type: String,
      required: true,
    },

    confirmacao: {
      type: Boolean,
      required: false,
      default: false,
    },

    estilo: {
      type: String,
      required: false,
      default: "padrao",
    },
  },
  data() {
    return {
      estiloDoBotao: {
        padrao: "botao botao-padrao",
        perigo: "botao botao-perigo",
      },
    };
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao && !confirm("Confirma operacao?")) {
        return;
      }

      this.$emit("botaoAtivado", new Date());
    },
  },
};
</script>    

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>