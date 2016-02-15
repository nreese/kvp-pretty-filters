require('plugins/kvp-pretty-filters/rangeController');
require('plugins/kvp-pretty-filters/range.css');

// The provider function, which must return our new visualization type
function KvpRangeProvider(Private) {
  var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));
  var Schemas = Private(require('ui/Vis/Schemas'));

  return new TemplateVisType({
    name: 'kvpRange', // The internal id of the visualization (must be unique)
    title: 'pretty-filters Range',
    description: 'min and max inputs that allow non-technical users to update a filter on a numerical field.',
    icon: 'fa-sliders', // The font awesome icon of this visualization
    template: require('plugins/kvp-pretty-filters/range.html'),
    schemas: new Schemas([
        {
          group: 'buckets',
          name: 'range',
          title: 'range',
          min: 1,
          max: 1,
          aggFilter: 'range'
        }
      ])
  });
}

require('ui/registry/vis_types').register(KvpRangeProvider);
