<template>
  <div class="ph3 ph4-ns pv4 bg-near-white">
    <div class="flex items-center f4 f3-ns lh-title fw5">
      <span class="mr2 hot-pink">2.</span>
      <span class="dark-pink">Millionaire maker</span>
    </div>
    <p class="measure-wide mv3 f5 lh-copy">
      Become the latest Bitcoin millionaire by letting Bitcoin pick your lottery
      numbers this week. The <code class="bg-white">math/rand_int</code> function will
      deterministicly calculate random numbers in your specified range.
    </p>

    <p class="mv3 lh-copy">
      Generate
      <input type="text"
        class="input-reset w3 mh1 pa2 mono f5 lh-copy gray hover-dark-gray bg-white ba bw1 b--transparent outline-0 tc"
        v-model="tx.num" />
      numbers between
      <input type="text"
        class="input-reset w3 mh1 pa2 mono f5 lh-copy gray hover-dark-gray bg-white ba bw1 b--transparent outline-0 tc"
        v-model="tx.min" />
      and
      <input type="text"
        class="input-reset w3 mh1 pa2 mono f5 lh-copy gray hover-dark-gray bg-white ba bw1 b--transparent outline-0 tc"
        v-model="tx.max" />.
    </p>

    <p class="mv3 lh-copy">
      My name is
      <input type="text"
        class="input-reset w5 mh1 pa2 mono f5 lh-copy gray hover-dark-gray bg-white ba bw1 b--transparent outline-0 tc"
        v-model="tx.name" />.
    </p>

    <div class="mv4 language-bash">
      <pre class="language-bash" style="margin:0;"><code v-html="opReturnPreview" /><code class="db" style="margin-top: 1rem; font-size: 0.75rem;" v-html="script" /></pre> 
    </div>

    <div v-if="isValid && moneyButtonComponent">
      <component
        :is="moneyButtonComponent"
        label="Pick lotto"
        success-message="Feeling lucky!"
        :outputs="outputs"
        @payment="onPayment" />
    </div>
    <div v-else class="flex items-center pa3 bg-dark-red white">
      <AlertIcon class="f3 mr4" />
      <p class="mv0 f6 lh-copy" style="margin: 0;">
        <span class="fw5">Invalid arguments.</span> Please ensure all fields above are entered correctly
        and you have allowed a big enough range from which to pick all the
        numbers you require.
      </p>
    </div>
  </div>
</template>

<script>
import prism from 'prismjs'
import 'prismjs/components/prism-bash'
import AlertIcon from 'vue-material-design-icons/Alert'

export default {
  data() {
    return {
      tx: {
        num: '6',
        min: '1',
        max: '59',
        name: 'Satoshi Nakamoto'
      },
      script: 'abc',
      moneyButtonComponent: null
    }
  },

  computed: {
    opReturnPreview() {
      const code = 'OP_FALSE OP_RETURN\n'
        +'  0xB3D08D9E\t# math/rand_int\n'
        +`    "${ this.tx.num }" \t\t# numbers\n`
        +`    "${ this.tx.min }" \t\t# min\n`
        +`    "${ this.tx.max }"\t\t# max\n`
        +'    "|"\n'
        +'  0x0CA59130\t# object/put_new\n'
        +'    "numbers"\n'
        +'    "name"\n'
        +`    "${ this.tx.name }"`;
      return prism.highlight(code, prism.languages.bash, 'bash');
    },

    outputs() {
      return [{
        script: this.script,
        amount: 0,
        currency: 'BSV'
      }];
    },

    isValid() {
      return [
        !isNaN(this.tx.num),
        !isNaN(this.tx.min),
        !isNaN(this.tx.max),
        !!this.tx.name.length
      ].every(c => c === true) && (this.tx.max - (this.tx.min-1) >= this.tx.num);
    }
  },

  mounted() {
    import('vue-money-button')
      .then(module => {
        this.moneyButtonComponent = module.default
        this.generateScript()
      })
  },

  watch: {
    tx: {
      deep: true,
      handler() { this.generateScript() }
    }
  },

  methods: {
    generateScript() {
      const script = new bsv.Script();
      script.add( bsv.Opcode.OP_FALSE );
      script.add( bsv.Opcode.OP_RETURN );
      script.add( bsv.deps.Buffer.from('B3D08D9E', 'hex') );
      script.add( bsv.deps.Buffer.from(this.tx.num) );
      script.add( bsv.deps.Buffer.from(this.tx.min) );
      script.add( bsv.deps.Buffer.from(this.tx.max) );
      script.add( bsv.deps.Buffer.from('|') );
      script.add( bsv.deps.Buffer.from('0CA59130', 'hex') );
      script.add( bsv.deps.Buffer.from('numbers') );
      script.add( bsv.deps.Buffer.from('name') );
      script.add( bsv.deps.Buffer.from(this.tx.name) );
      this.script = script.toASM();
    },

    onPayment(payment) {
      if (payment) {
        setTimeout(_ => {
          this.$emit('payment', payment.txid)
        }, 2500)
        
      }
    }
  },

  components: {
    AlertIcon
  }
}
</script>

<style lang="scss" scoped>
input[type="text"]:focus {
  border-color: #FF41B4;
}

.bg-white {
  background: #fff !important;
}
</style>