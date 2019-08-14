window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.AbrirModal = window.blockly.js.blockly.AbrirModal || {};

/**
 * abrirModal
 */
window.blockly.js.blockly.AbrirModal.Executar = function() {

  this.cronapi.screen.showIonicModal("modal17138");
  this.cronapi.screen.changeValueOfField("vars.qrcode1", 'https://www.globo.com/');
}
