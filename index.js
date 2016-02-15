module.exports = function(kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/kvp-pretty-filters/range']
    }
  });
};