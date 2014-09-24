var layers = {
  "umd_tree_loss_gain": {
    "id": 597,
    "slug": "umd_tree_loss_gain",
    "title": "UMD/Google tree cover\nloss",
    "title_color": "#F69",
    "subtitle": "",
    "sublayer": "",
    "table_name": "",
    "source": "",
    "category_color": "#F69",
    "category_slug": "forest_clearing",
    "category_name": "Forest change",
    "external": "false",
    "zmin": "",
    "zmax": "",
    "mindate": "2001-01-01T12:00:00.000Z",
    "maxdate": "2013-12-31T12:00:00.000Z",
    "xmax": null,
    "xmin": null,
    "ymax": null,
    "ymin": null,
    "tileurl": "",
    "visible": true,
    "position": 1
  },
  "forestgain": {
    "id": 596,
    "slug": "forestgain",
    "title": "UMD/Google tree cover gain",
    "title_color": "#6D6DE5",
    "subtitle": "(12 years, 30m, global)",
    "sublayer": "",
    "table_name": "forestgain",
    "source": "",
    "category_color": "#F69",
    "category_slug": "forest_clearing",
    "category_name": "Forest change",
    "external": "true",
    "zmin": "",
    "zmax": "",
    "mindate": null,
    "maxdate": null,
    "xmax": null,
    "xmin": null,
    "ymax": null,
    "ymin": null,
    "tileurl": "http://earthengine.google.org/static/hansen_2013/gain_alpha/{Z}/{X}/{Y}.png",
    "visible": true,
    "position": 0
  },
  "fires": {
    "id": 593,
    "slug": "fires",
    "title": "NASA active fires",
    "title_color": "#FFCC00",
    "subtitle": "(past 7 days, 1km, global)",
    "sublayer": "",
    "table_name": "global_7d",
    "source": "",
    "category_color": "#F69",
    "category_slug": "forest_clearing",
    "category_name": "Forest change",
    "external": "false",
    "zmin": "0",
    "zmax": "22",
    "mindate": null,
    "maxdate": null,
    "xmax": null,
    "xmin": null,
    "ymax": null,
    "ymin": null,
    "tileurl": "https://wri-01.cartodb.com/tiles/global_7d/{Z}/{X}/{Y}.png",
    "visible": true,
    "position": 0,
    "detailsTpl": "<div class=\"layer-details layer-details-fires\">\n  <a href=\"http://fires.globalforestwatch.org/\" target=\"_blank\" class=\"gfw-fires-link\">Check out <span>GFW FIRES</span></a>\n</div>\n"
  },
  "forest2000": {
    "id": 591,
    "slug": "forest2000",
    "title": "Tree cover extent",
    "title_color": "#A5ED80",
    "subtitle": "",
    "sublayer": "",
    "table_name": "forest2000",
    "source": "",
    "category_color": "#B2D26E",
    "category_slug": "forest_cover",
    "category_name": "Forest cover",
    "external": "true",
    "zmin": "",
    "zmax": "",
    "mindate": null,
    "maxdate": null,
    "xmax": null,
    "xmin": null,
    "ymax": null,
    "ymin": null,
    "tileurl": "http://gfw-ee-tiles.appspot.com/gfw/forest_cover_2000/{Z}/{X}/{Y}.png",
    "visible": true
  },
  "logging": {
    "id": 581,
    "slug": "logging",
    "title": "Logging",
    "title_color": "#fecc5c",
    "subtitle": "",
    "sublayer": "",
    "table_name": "logging_all_merged",
    "source": "",
    "category_color": "#c98e6c",
    "category_slug": "forest_use",
    "category_name": "Forest use",
    "external": "false",
    "zmin": "0",
    "zmax": "22",
    "mindate": null,
    "maxdate": null,
    "xmax": null,
    "xmin": null,
    "ymax": null,
    "ymin": null,
    "tileurl": "https://wri-01.cartodb.com/tiles/logging_all_merged/{Z}/{X}/{Y}.png",
    "visible": true
  },
  "mining": {
    "id": 573,
    "slug": "mining",
    "title": "Mining",
    "title_color": "#fbb685",
    "subtitle": "",
    "sublayer": "",
    "table_name": "mining_permits_merge",
    "source": "",
    "category_color": "#c98e6c",
    "category_slug": "forest_use",
    "category_name": "Forest use",
    "external": "false",
    "zmin": "0",
    "zmax": "22",
    "mindate": null,
    "maxdate": null,
    "xmax": 30.841667,
    "xmin": 12.275,
    "ymax": 5.166667,
    "ymin": -13.45,
    "tileurl": "https://wri-01.cartodb.com/tiles/cod_mc_4/{Z}/{X}/{Y}.png",
    "visible": true
  }
};
