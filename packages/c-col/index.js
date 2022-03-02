import CCol from './src/c-col';

/* istanbul ignore next */
CCol.install = function(Vue) {
  Vue.component(CCol.name, CCol);
};

export default CCol;

