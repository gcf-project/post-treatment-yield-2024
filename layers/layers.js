var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvincialBoundary_1 = new ol.format.GeoJSON();
var features_ProvincialBoundary_1 = format_ProvincialBoundary_1.readFeatures(json_ProvincialBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvincialBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincialBoundary_1.addFeatures(features_ProvincialBoundary_1);
var lyr_ProvincialBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvincialBoundary_1, 
                style: style_ProvincialBoundary_1,
                popuplayertitle: 'Provincial Boundary',
                interactive: true,
                title: '<img src="styles/legend/ProvincialBoundary_1.png" /> Provincial Boundary'
            });
var format_DistrictYields_2 = new ol.format.GeoJSON();
var features_DistrictYields_2 = format_DistrictYields_2.readFeatures(json_DistrictYields_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictYields_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictYields_2.addFeatures(features_DistrictYields_2);
var lyr_DistrictYields_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictYields_2, 
                style: style_DistrictYields_2,
                popuplayertitle: 'District Yields',
                interactive: true,
    title: 'District Yields<br />\
    <img src="styles/legend/DistrictYields_2_0.png" /> 0.01 - 0.05<br />\
    <img src="styles/legend/DistrictYields_2_1.png" /> 0.05 - 0.16<br />\
    <img src="styles/legend/DistrictYields_2_2.png" /> 0.16 - 0.23<br />\
    <img src="styles/legend/DistrictYields_2_3.png" /> 0.23 - 0.31<br />\
    <img src="styles/legend/DistrictYields_2_4.png" /> 0.31 - 0.64<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ProvincialBoundary_1.setVisible(true);lyr_DistrictYields_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvincialBoundary_1,lyr_DistrictYields_2];
lyr_ProvincialBoundary_1.set('fieldAliases', {'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_DistrictYields_2.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'District', 'NAME2_': 'Province', 'AREA_': 'AREA_', 'White sorg': 'White sorg', 'Pearl Mill': 'Pearl Mill', 'Cow peas': 'Cow peas', 'Velvet Bea': 'Velvet Bea', 'Sesame': 'Sesame', });
lyr_ProvincialBoundary_1.set('fieldImages', {'ID': 'Range', 'PROVINCE_N': 'TextEdit', 'AREA': 'TextEdit', 'POPULATION': 'TextEdit', 'POPU_M': 'TextEdit', 'POPU_F': 'TextEdit', 'PERIMETER': 'Hidden', });
lyr_DistrictYields_2.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'TextEdit', 'NAME2_': 'Hidden', 'AREA_': 'Hidden', 'White sorg': 'TextEdit', 'Pearl Mill': 'TextEdit', 'Cow peas': 'TextEdit', 'Velvet Bea': 'TextEdit', 'Sesame': 'TextEdit', });
lyr_ProvincialBoundary_1.set('fieldLabels', {'ID': 'no label', 'PROVINCE_N': 'header label - visible with data', 'AREA': 'no label', 'POPULATION': 'header label - visible with data', 'POPU_M': 'header label - visible with data', 'POPU_F': 'header label - visible with data', });
lyr_DistrictYields_2.set('fieldLabels', {'NAME1_': 'header label - visible with data', 'White sorg': 'header label - visible with data', 'Pearl Mill': 'header label - visible with data', 'Cow peas': 'header label - visible with data', 'Velvet Bea': 'header label - visible with data', 'Sesame': 'header label - visible with data', });
lyr_DistrictYields_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});