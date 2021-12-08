import ElCoduckLogo from './src/coduck-logo';

/* istanbul ignore next */
ElCoduckLogo.install = function(Vue) {
  Vue.component(ElCoduckLogo.name, ElCoduckLogo);
};

export default ElCoduckLogo;
