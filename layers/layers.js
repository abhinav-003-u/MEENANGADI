ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([612860.292141, 1281645.397784, 642174.311207, 1298146.853281]);
var wms_layers = [];

var format_PANCHAYAT_0 = new ol.format.GeoJSON();
var features_PANCHAYAT_0 = format_PANCHAYAT_0.readFeatures(json_PANCHAYAT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_PANCHAYAT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCHAYAT_0.addFeatures(features_PANCHAYAT_0);
var lyr_PANCHAYAT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCHAYAT_0, 
                style: style_PANCHAYAT_0,
                popuplayertitle: "PANCHAYAT",
                interactive: true,
                title: '<img src="styles/legend/PANCHAYAT_0.png" /> PANCHAYAT'
            });
var format_clip_School_1 = new ol.format.GeoJSON();
var features_clip_School_1 = format_clip_School_1.readFeatures(json_clip_School_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_School_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_School_1.addFeatures(features_clip_School_1);
var lyr_clip_School_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_School_1, 
                style: style_clip_School_1,
                popuplayertitle: "clip_School",
                interactive: true,
                title: '<img src="styles/legend/clip_School_1.png" /> clip_School'
            });
var format_clip_Road1_2 = new ol.format.GeoJSON();
var features_clip_Road1_2 = format_clip_Road1_2.readFeatures(json_clip_Road1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_Road1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road1_2.addFeatures(features_clip_Road1_2);
var lyr_clip_Road1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road1_2, 
                style: style_clip_Road1_2,
                popuplayertitle: "clip_Road1",
                interactive: true,
                title: '<img src="styles/legend/clip_Road1_2.png" /> clip_Road1'
            });
var format_clip_Location_3 = new ol.format.GeoJSON();
var features_clip_Location_3 = format_clip_Location_3.readFeatures(json_clip_Location_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_Location_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Location_3.addFeatures(features_clip_Location_3);
var lyr_clip_Location_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Location_3, 
                style: style_clip_Location_3,
                popuplayertitle: "clip_Location",
                interactive: true,
                title: '<img src="styles/legend/clip_Location_3.png" /> clip_Location'
            });
var format_clip_Anganawadi1_4 = new ol.format.GeoJSON();
var features_clip_Anganawadi1_4 = format_clip_Anganawadi1_4.readFeatures(json_clip_Anganawadi1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_clip_Anganawadi1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Anganawadi1_4.addFeatures(features_clip_Anganawadi1_4);
var lyr_clip_Anganawadi1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Anganawadi1_4, 
                style: style_clip_Anganawadi1_4,
                popuplayertitle: "clip_Anganawadi1",
                interactive: true,
                title: '<img src="styles/legend/clip_Anganawadi1_4.png" /> clip_Anganawadi1'
            });

lyr_PANCHAYAT_0.setVisible(true);lyr_clip_School_1.setVisible(true);lyr_clip_Road1_2.setVisible(true);lyr_clip_Location_3.setVisible(true);lyr_clip_Anganawadi1_4.setVisible(true);
var layersList = [lyr_PANCHAYAT_0,lyr_clip_School_1,lyr_clip_Road1_2,lyr_clip_Location_3,lyr_clip_Anganawadi1_4];
lyr_PANCHAYAT_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERBLPAPRJ': 'KERBLPAPRJ', 'KERBLPAP_1': 'KERBLPAP_1', 'CODE': 'CODE', 'PANCHAYAT': 'PANCHAYAT', });
lyr_clip_School_1.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_clip_Road1_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_clip_Location_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_clip_Anganawadi1_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Name1': 'Name1', });
lyr_PANCHAYAT_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERBLPAPRJ': 'Range', 'KERBLPAP_1': 'Range', 'CODE': 'Range', 'PANCHAYAT': 'TextEdit', });
lyr_clip_School_1.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_clip_Road1_2.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_clip_Location_3.set('fieldImages', {'OBJECTID': '', 'name': '', 'WARD_NO': '', 'WARD_NAME': '', });
lyr_clip_Anganawadi1_4.set('fieldImages', {'id': '', 'Name': '', 'Location': '', 'Name1': '', });
lyr_PANCHAYAT_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERBLPAPRJ': 'no label', 'KERBLPAP_1': 'no label', 'CODE': 'no label', 'PANCHAYAT': 'no label', });
lyr_clip_School_1.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_clip_Road1_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_clip_Location_3.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_clip_Anganawadi1_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Name1': 'no label', });
lyr_clip_Anganawadi1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});