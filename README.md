# kvp-pretty-filters
Kibana provides an amazing GUI for letting users explore data sets stored in ElasticSearch. 
Non-technical users can easly explore large datasets with pre-made dashboards.
The only [missing features](http://stackoverflow.com/questions/35347332/input-controls-for-easy-filtering-in-kibana-dashboard) 
are simple controls for editible filters that do not require a knowlegde of the powerful DSL query language or editing raw JSON.

kvp-pretty-filters is a Kibana visualization plugin that attempts to close this gap. 
kvp-pretty-filters contains a set of visualizations that enhance any dashboard with editible filter UI compenents that are approachable by non-techincal users.

A special thanks to timroes for his [example kibana plugins] (https://github.com/timroes/tr-k4p-tagcloud) 
and [blog post](https://www.timroes.de/2015/12/06/writing-kibana-4-plugins-visualizations-using-data/) that greatly influenced this code base.

## Visualizations

### Range
The range visualization provides min and max inputs that allow users to filter a numerical field. 

