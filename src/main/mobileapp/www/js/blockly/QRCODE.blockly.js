window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.QRCODE = window.blockly.js.blockly.QRCODE || {};

/**
 * QRCODE
 */
window.blockly.js.blockly.QRCODE.Gerar = function() {
 var item;
  this.cronapi.screen.changeValueOfField("vars.QRCODE", 'https://www.globo.com/');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.QRCODE.leitura = function() {
 var item;
  this.cronapi.cordova.camera.qrCodeScanner('QR_CODE', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.openUrl(item, true, 0, 0);
  }.bind(this), function(sender_item) {
      item = sender_item;
    this.cronapi.screen.notify('error',item);
  }.bind(this));
}
