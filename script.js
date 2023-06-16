(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912",
   "camera": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_camera"
  }
 ],
 "id": "playList_EA057C36_C6F9_A75A_41E3_BBD40AED6E42"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3",
   "camera": "this.panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_camera"
  }
 ],
 "id": "playList_EA068C37_C6F9_A75A_41BC_43D06C1C108E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1F39A31_BD90_790E_41C3_3803B760C139_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u044b",
 "id": "panorama_B0030219_BD90_C931_41D6_6BEC26496A18",
 "thumbnailUrl": "media/panorama_B0030219_BD90_C931_41D6_6BEC26496A18_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.75,
  "pitch": 0
 },
 "id": "camera_E051DCF9_C6F9_A0D6_41D2_C9CCA2A782F8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_camera",
   "media": "this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -82.02,
   "backwardYaw": 43.17,
   "distance": 1,
   "panorama": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.98,
   "backwardYaw": -148.65,
   "distance": 1,
   "panorama": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -179.81,
   "backwardYaw": -5.84,
   "distance": 1,
   "panorama": "this.panorama_B000B633_BD90_4972_41C3_BB914C3724AC"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 19,
      "tags": "ondemand",
      "colCount": 19,
      "width": 9728,
      "height": 9728
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u04401.1",
 "id": "panorama_B1F39A31_BD90_790E_41C3_3803B760C139",
 "thumbnailUrl": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DA9DBEA2_C386_1FF1_41BB_2B834EC3C406",
  "this.overlay_D5F4C6CA_C647_E0CA_41CF_F97A3B57EEA3",
  "this.overlay_D15D81D9_C64B_A0D7_41E3_9EEE6C8B8D75"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.67,
  "pitch": 0
 },
 "id": "camera_E1326D9A_C6F9_A14A_41D0_455C66A1F692",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5",
   "camera": "this.panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_camera"
  }
 ],
 "id": "playList_EA006C37_C6F9_A75A_41D2_146AEC670336"
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -33.59,
   "backwardYaw": -144.06,
   "distance": 1,
   "panorama": "this.panorama_B60AC953_BC70_5B31_41E2_183878C88428"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 29.25,
   "backwardYaw": -0.01,
   "distance": 1,
   "panorama": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0441\u0442\u043e\u043b\u043e\u0432\u0430\u044f",
 "id": "panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9",
 "thumbnailUrl": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D76172B9_C382_07D3_41D9_241CAA51DE37",
  "this.overlay_D6AD2DC7_C382_7DBF_41A8_E5A71B9A8A56"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.5,
  "pitch": 0
 },
 "id": "camera_EE84DDE3_C6F9_A0FB_41E1_D57B8B767492",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.84,
   "backwardYaw": 179.87,
   "distance": 1,
   "panorama": "this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.07,
   "backwardYaw": 133.96,
   "distance": 1,
   "panorama": "this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1",
 "thumbnailUrl": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_t.jpg",
 "label": "\u0443\u043b\u0438\u0446\u0430",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EA32EC3C_C6F9_A74E_41D0_5BB4AE1ABE73",
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D0A69F5B_C149_E8C4_41E4_9407FFD8E0C2",
  "this.overlay_D63AF24A_C38E_06B1_41DE_4B33D334B8F4",
  "this.overlay_D5B62E52_C38E_3F50_41D2_25EEAAA44F12"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B655DECD_BC73_B911_41A1_55447BC33109_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD",
   "camera": "this.panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_camera"
  }
 ],
 "id": "playList_EA0BEC35_C6F9_A75E_41BC_5ACA1E6F1162"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 28.07,
   "backwardYaw": -28.2,
   "distance": 1,
   "panorama": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "3",
 "id": "panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6",
 "thumbnailUrl": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D27BE54A_C64E_A1CA_41D4_4CBC177F55CE"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536",
   "camera": "this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536_camera"
  }
 ],
 "id": "playList_EA12AC33_C6F9_A75A_41CC_F1F22EA5B808"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 36.36,
   "backwardYaw": -157.58,
   "distance": 1,
   "panorama": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u0430\u0431\u0438\u043d\u0435\u0442",
 "id": "panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6",
 "thumbnailUrl": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DB9B90A1_C486_03F3_41D1_CF23725A0CE8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.38,
  "pitch": 0
 },
 "id": "camera_E159BDA8_C6F9_A176_41A0_E2375953D7FC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 9.35,
   "backwardYaw": -41.02,
   "distance": 1,
   "panorama": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "2",
 "id": "panorama_B0087563_BD90_CB11_41D4_E60097ECB19B",
 "thumbnailUrl": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D1FC1A7F_C649_A3CB_41E0_6FADC760576B"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA",
   "camera": "this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_camera"
  }
 ],
 "id": "playList_EA0C7C33_C6F9_A75A_41A4_695FD0AB89E9"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6",
   "camera": "this.panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_camera"
  }
 ],
 "id": "playList_EA020C38_C6F9_A756_41D6_1B510C5B306C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.19,
  "pitch": 0
 },
 "id": "camera_E1819D33_C6F9_A15B_41DA_430BB231115A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461",
   "camera": "this.panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_camera"
  }
 ],
 "id": "playList_EA092C34_C6F9_A75E_41E1_FA4A88100662"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.3,
  "pitch": 0
 },
 "id": "camera_EEC57E0E_C6F9_A34A_41C9_9B13F35259FD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B60AC953_BC70_5B31_41E2_183878C88428",
   "camera": "this.panorama_B60AC953_BC70_5B31_41E2_183878C88428_camera"
  }
 ],
 "id": "playList_EA0A3C36_C6F9_A75A_41E6_1C028B90A55B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.64,
  "pitch": 0
 },
 "id": "camera_E0263CE3_C6F9_A0FA_41B1_4F028B87A656",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.98,
  "pitch": 0
 },
 "id": "camera_EEE54E24_C6F9_A37E_41E0_1FCC1EAAD40A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B0087563_BD90_CB11_41D4_E60097ECB19B",
   "camera": "this.panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_camera"
  }
 ],
 "id": "playList_EA061C37_C6F9_A75A_41D6_C6E0A1E96012"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -27.7,
   "backwardYaw": -50.94,
   "distance": 1,
   "panorama": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 23,
      "tags": "ondemand",
      "colCount": 23,
      "width": 11776,
      "height": 11776
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 12,
      "tags": "ondemand",
      "colCount": 12,
      "width": 6144,
      "height": 6144
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "1",
 "id": "panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3",
 "thumbnailUrl": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D3BA6BB4_C64A_A15D_4173_EF4D2E2125AC"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9",
   "camera": "this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_camera"
  }
 ],
 "id": "playList_EA0CEC33_C6F9_A75A_41C3_DDE57802E347"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC",
   "camera": "this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_camera"
  }
 ],
 "id": "playList_EA134C32_C6F9_A75A_41B8_7C7D234B1274"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.32,
   "backwardYaw": -58.73,
   "distance": 1,
   "panorama": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.87,
   "backwardYaw": -179.84,
   "distance": 1,
   "panorama": "this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0443\u043b\u0438\u0446\u04302",
 "id": "panorama_B00F1992_BD90_BB33_41CC_B109D211D536",
 "thumbnailUrl": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D5656D4C_C382_02B1_41D5_FD7CF65E3DA2",
  "this.overlay_D4A6CA78_C386_0751_41E7_19A105B33202",
  "this.overlay_D4ACA465_C382_0373_41E6_60C52FD04C3F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.28,
  "pitch": 0
 },
 "id": "camera_E0614D1D_C6F9_A14E_41E4_18689E17779E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -14.51,
   "backwardYaw": -30.72,
   "distance": 1,
   "panorama": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "5",
 "id": "panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255",
 "thumbnailUrl": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D40BAA7F_C649_A3CB_41E7_4721F61F016C"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.35,
  "pitch": 0
 },
 "id": "camera_E1270DA1_C6F9_A176_41D5_3071C6C2DC50",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.19,
  "pitch": 0
 },
 "id": "camera_E164ADCD_C6F9_A0CE_41E8_90D55D267AB1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967",
   "camera": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_camera"
  }
 ],
 "id": "playList_EA017C37_C6F9_A75A_41A5_C49BEDC950B2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B00F1992_BD90_BB33_41CC_B109D211D536_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0444\u043e\u0442\u043e\u0441\u0442\u0443\u0434\u0438\u044f",
 "id": "panorama_B6577D95_BC70_FB31_41C1_A042E98872D9",
 "thumbnailUrl": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D4BDA8B7_C65A_AF5B_41CF_CF4D022C76A3"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755",
   "camera": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_camera"
  }
 ],
 "id": "playList_EA3C6C39_C6F9_A756_41E1_03C92B1D881D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.8,
  "pitch": 0
 },
 "id": "camera_E1799DBE_C6F9_A14A_41E8_3D21455CA2D3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.29,
  "pitch": 0
 },
 "id": "camera_EE107E32_C6F9_A35A_41DF_481BAE6E0261",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B000B633_BD90_4972_41C3_BB914C3724AC",
   "camera": "this.panorama_B000B633_BD90_4972_41C3_BB914C3724AC_camera"
  }
 ],
 "id": "playList_EA3FAC39_C6F9_A756_41D1_DAA6A814F371"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139",
   "camera": "this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139_camera"
  }
 ],
 "id": "playList_EA076C36_C6F9_A75A_41CD_FC99BFCA532A"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -5.84,
   "backwardYaw": -179.81,
   "distance": 1,
   "panorama": "this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "4",
 "id": "panorama_B000B633_BD90_4972_41C3_BB914C3724AC",
 "thumbnailUrl": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D244D13B_C64F_A14B_41E7_31473595B243"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 44.65,
   "backwardYaw": 30.08,
   "distance": 1,
   "panorama": "this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 28,
      "tags": "ondemand",
      "colCount": 28,
      "width": 14336,
      "height": 14336
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 14,
      "tags": "ondemand",
      "colCount": 14,
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u0430\u0431\u0438\u043d\u0435\u04422",
 "id": "panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD",
 "thumbnailUrl": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D8375074_C6C7_BFDD_41C6_0AEEF2A498A1"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -83.08,
   "backwardYaw": -83.85,
   "distance": 1,
   "panorama": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.5,
   "backwardYaw": 2.07,
   "distance": 1,
   "panorama": "this.panorama_B646BD3B_BC71_BB71_41E1_33B592820217"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -83.26,
   "backwardYaw": -89.11,
   "distance": 1,
   "panorama": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u04402",
 "id": "panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA",
 "thumbnailUrl": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DAAC5EB7_C6CA_A35B_41E6_96009437D5F6",
  "this.overlay_DAA0E258_C6CB_A3D5_41E5_B82CD2C01D1B",
  "this.overlay_E3A26AD1_C6DB_E0D7_41E3_2F834BFA6FAE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.01,
  "pitch": -5.02
 },
 "id": "panorama_B60AC953_BC70_5B31_41E2_183878C88428_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.42,
  "pitch": 0
 },
 "id": "camera_E19A0D25_C6F9_A17F_41BA_0AE55C47D1B1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.71,
   "backwardYaw": 102.92,
   "distance": 1,
   "panorama": "this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "6",
 "id": "panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF",
 "thumbnailUrl": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D45AB5B6_C64A_615D_419B_3B2351B1F5B1"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.9,
  "pitch": 0
 },
 "id": "camera_E04E3D00_C6F9_A136_41E3_596996D209E2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.86,
  "pitch": 0
 },
 "id": "camera_EEDE9DFF_C6F9_A0CA_41C3_24BD63DFBA09",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.42,
  "pitch": 0
 },
 "id": "camera_E0287CDB_C6F9_A0CA_41D1_BE652D0750DA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 167.62,
   "backwardYaw": 0.14,
   "distance": 1,
   "panorama": "this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u0430\u0431\u0438\u043d\u0435\u0442 \u0441 4 \u044d\u0442\u0430\u0436\u0430",
 "id": "panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A",
 "thumbnailUrl": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E5A0241E_C6D9_A74D_41C4_8DF756769619"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B000B633_BD90_4972_41C3_BB914C3724AC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.65,
  "pitch": 0
 },
 "id": "camera_EEFE7E15_C6F9_A35E_41CB_13DA2819C8A9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -119.02,
   "backwardYaw": -100.04,
   "distance": 1,
   "panorama": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0444\u043e\u0442\u043e\u043a\u0430\u0431\u0438\u043d\u0435\u0442",
 "id": "panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5",
 "thumbnailUrl": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E46ECC59_C6DA_A7D7_41E8_5A8A5E98E699"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 158.45,
   "backwardYaw": 134.59,
   "distance": 1,
   "panorama": "this.panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -83.33,
   "backwardYaw": -80.58,
   "distance": 1,
   "panorama": "this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.58,
   "backwardYaw": 36.36,
   "distance": 1,
   "panorama": "this.panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -83.85,
   "backwardYaw": -83.08,
   "distance": 1,
   "panorama": "this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u0440 3",
 "id": "panorama_B655C291_BC70_4931_41D0_A022DE980C28",
 "thumbnailUrl": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E4BD3C88_C6CE_E735_41E0_3D0875337117",
  "this.overlay_E4884685_C6CE_A33F_41DF_D1B1E2AF0C56",
  "this.overlay_E0EC0AEB_C6C6_60CB_41D6_237E39B0D17B",
  "this.overlay_E09EDCE2_C6C6_60F5_41E2_B4A71F1B48D5"
 ]
},
{
 "class": "Menu",
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "улица",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "label": "Media",
 "id": "Menu_EA32EC3C_C6F9_A74E_41D0_5BB4AE1ABE73",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446-\u0437\u0430\u043b",
 "id": "panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8",
 "thumbnailUrl": "media/panorama_B1FCE380_BD90_4F0F_41D5_3E4DB22EF7E8_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.96,
  "pitch": 0
 },
 "id": "camera_E1A1BD49_C6F9_A137_41DB_266FEC1CE474",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.81,
   "backwardYaw": 179.81,
   "distance": 1,
   "panorama": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0441\u043f\u043e\u0440\u0442\u0437\u0430\u043b",
 "id": "panorama_B646E236_BC70_4973_41E4_52B0383A99E2",
 "thumbnailUrl": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E73B49DE_C6DE_A0CD_41E2_5591F5A836A6"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -60.17,
   "backwardYaw": -19.6,
   "distance": 1,
   "panorama": "this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -100.04,
   "backwardYaw": -119.02,
   "distance": 1,
   "panorama": "this.panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -58.73,
   "backwardYaw": -1.32,
   "distance": 1,
   "panorama": "this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0432\u0445\u043e\u0434",
 "id": "panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912",
 "thumbnailUrl": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D4756246_C39E_06B0_41A9_C1CAE4BB0A94",
  "this.overlay_DAAA1D79_C39E_7D53_41E2_A0D3426D30F8",
  "this.overlay_C9C64D5D_C65E_A1CF_41D5_3B198A34CD50"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.98,
  "pitch": 0
 },
 "id": "camera_E1F24D6E_C6F9_A1CD_41D6_C3DE3D821EC0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.68,
  "pitch": 0
 },
 "id": "camera_E1E72D75_C6F9_A1DF_41E7_EE00D526FC2E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.89,
  "pitch": 0
 },
 "id": "camera_E139AD92_C6F9_A15A_41D3_0E7E94162695",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.15,
  "pitch": 0
 },
 "id": "camera_E1126D83_C6F9_A13A_4189_08B32F131FAF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.74,
  "pitch": 0
 },
 "id": "camera_E040ED07_C6F9_A13A_41DC_3BFB81F72D52",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.55,
  "pitch": 0
 },
 "id": "camera_E1183D7C_C6F9_A1CD_41C5_913F80903676",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.99,
  "pitch": 0
 },
 "id": "camera_EEBECDEA_C6F9_A0CA_41E7_50BA63A55606",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -30.72,
   "backwardYaw": -14.51,
   "distance": 1,
   "panorama": "this.panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.92,
   "backwardYaw": -3.71,
   "distance": 1,
   "panorama": "this.panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -28.2,
   "backwardYaw": 28.07,
   "distance": 1,
   "panorama": "this.panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.65,
   "backwardYaw": 90.98,
   "distance": 1,
   "panorama": "this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u04402.1",
 "id": "panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755",
 "thumbnailUrl": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D268A59B_C649_E14B_41D4_59982196794E",
  "this.overlay_D7E6D14F_C64A_E1CA_41D1_FBCF88E4F8C8",
  "this.overlay_D3C8F18D_C649_A14F_41D5_2DE369C2FB32",
  "this.overlay_D062BFAF_C646_A14B_41BB_AF1D2700F078"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.19,
  "pitch": 0
 },
 "id": "camera_E05AFCF2_C6F9_A0DA_41C9_51894D12D492",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.99,
  "pitch": 0
 },
 "id": "camera_EEB3EDF1_C6F9_A0D6_41E5_7877E4A27BCD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.93,
  "pitch": 0
 },
 "id": "camera_E1077D8B_C6F9_A14A_41AB_421C0E34DEFF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.83,
  "pitch": 0
 },
 "id": "camera_E1DBED50_C6F9_A1D5_41DF_84FC81FFA0C5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.93,
  "pitch": 0
 },
 "id": "camera_EEA5FDF8_C6F9_A0D6_41D9_C6605880ADFF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.04,
  "pitch": 0
 },
 "id": "camera_E1ACBD42_C6F9_A135_4183_A9E775050FAD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B646E236_BC70_4973_41E4_52B0383A99E2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.83,
  "pitch": 0
 },
 "id": "camera_EED32E07_C6F9_A33A_41BE_E065D5DEB49B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B646E236_BC70_4973_41E4_52B0383A99E2",
   "camera": "this.panorama_B646E236_BC70_4973_41E4_52B0383A99E2_camera"
  }
 ],
 "id": "playList_EA0FEC33_C6F9_A75A_41C6_DD2BA9455120"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.98,
  "pitch": 0
 },
 "id": "camera_EEF04E1D_C6F9_A34E_41E2_87042EA988BC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.92,
  "pitch": 0
 },
 "id": "camera_E05D4CEA_C6F9_A0CA_41E0_DB119464DA9A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.1,
   "backwardYaw": -14.01,
   "distance": 1,
   "panorama": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.1,
   "backwardYaw": -14.01,
   "distance": 1,
   "panorama": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 133.96,
   "backwardYaw": -0.07,
   "distance": 1,
   "panorama": "this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 17,
      "tags": "ondemand",
      "colCount": 17,
      "width": 8704,
      "height": 8704
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 9,
      "tags": "ondemand",
      "colCount": 9,
      "width": 4608,
      "height": 4608
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043f\u0440\u043e\u0445\u043e\u0434\u043d\u0430\u044f",
 "id": "panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC",
 "thumbnailUrl": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D751645F_C156_D8FC_41B8_774C87BB4FDF",
  "this.overlay_D08A3295_C386_07D0_41DF_CFEEEF860F2E",
  "this.overlay_D0EED44A_C386_02B0_41DB_B7BF21771400"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.41,
  "pitch": 0
 },
 "id": "camera_E032DCD4_C6F9_A0DE_41E0_856F104A1845",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.81,
   "backwardYaw": -179.81,
   "distance": 1,
   "panorama": "this.panorama_B646E236_BC70_4973_41E4_52B0383A99E2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.01,
   "backwardYaw": 29.25,
   "distance": 1,
   "panorama": "this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -14.01,
   "backwardYaw": -7.1,
   "distance": 1,
   "panorama": "this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -89.11,
   "backwardYaw": -83.26,
   "distance": 1,
   "panorama": "this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u04401",
 "id": "panorama_B655DECD_BC73_B911_41A1_55447BC33109",
 "thumbnailUrl": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D06889CB_C382_05B7_41E5_79FAF08DF9E9",
  "this.overlay_D7B2E41C_C382_02D1_41E3_592AC5EBE5E0",
  "this.overlay_D850BC1B_C6C6_A74B_41E8_CD94729680AA",
  "this.overlay_E5A42431_C6DF_A757_41D7_5F19F66B1ECD"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.35,
  "pitch": 0
 },
 "id": "camera_E1CCCD58_C6F9_A1D5_41E3_B731A2E06EF5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -80.58,
   "backwardYaw": -83.33,
   "distance": 1,
   "panorama": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 30.08,
   "backwardYaw": 44.65,
   "distance": 1,
   "panorama": "this.panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.14,
   "backwardYaw": 167.62,
   "distance": 1,
   "panorama": "this.panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u043e\u0440\u0438\u0434\u043e\u0440 4",
 "id": "panorama_B65E57CC_BC70_5717_41DE_53F770DAD913",
 "thumbnailUrl": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E4188A11_C6C9_A357_41DF_EB998B723F7D",
  "this.overlay_E678CBD9_C6CA_A0D7_41D9_8125EB4A8AD9",
  "this.overlay_EEE7F0BB_C6CA_5F4A_41C6_612C7ED3F647"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.27,
  "pitch": 0
 },
 "id": "camera_E075DD0F_C6F9_A14A_41E6_61425433C233",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B646BD3B_BC71_BB71_41E1_33B592820217_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.92,
  "pitch": 0
 },
 "id": "camera_E1529DB0_C6F9_A156_41E7_10229C079217",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109",
   "camera": "this.panorama_B655DECD_BC73_B911_41A1_55447BC33109_camera"
  }
 ],
 "id": "playList_EA120C33_C6F9_A75A_41E0_1ED93526F580"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.06,
  "pitch": 0
 },
 "id": "camera_E144EDB7_C6F9_A15A_41DB_E4762C652E22",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28",
   "camera": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28_camera"
  }
 ],
 "id": "playList_EA0F6C34_C6F9_A75E_41D4_121E3A93C120"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 134.59,
   "backwardYaw": 158.45,
   "distance": 1,
   "panorama": "this.panorama_B655C291_BC70_4931_41D0_A022DE980C28"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 26,
      "tags": "ondemand",
      "colCount": 26,
      "width": 13312,
      "height": 13312
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 13,
      "tags": "ondemand",
      "colCount": 13,
      "width": 6656,
      "height": 6656
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u0430\u0431\u0438\u043d\u0435\u04423",
 "id": "panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461",
 "thumbnailUrl": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D86CE3E7_C6C7_A0FB_41D6_AD527C4040D3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913",
   "camera": "this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_camera"
  }
 ],
 "id": "playList_EA0E9C34_C6F9_A75E_41E8_08859C7FEAAC"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6",
   "camera": "this.panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_camera"
  }
 ],
 "id": "playList_EA09CC34_C6F9_A75E_41BF_DBCFEA32E190"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.16,
  "pitch": 0
 },
 "id": "camera_E06EDD16_C6F9_A15A_41E1_4892C8B70777",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -19.6,
   "backwardYaw": -60.17,
   "distance": 1,
   "panorama": "this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.94,
   "backwardYaw": -27.7,
   "distance": 1,
   "panorama": "this.panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -41.02,
   "backwardYaw": 9.35,
   "distance": 1,
   "panorama": "this.panorama_B0087563_BD90_CB11_41D4_E60097ECB19B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 43.17,
   "backwardYaw": -82.02,
   "distance": 1,
   "panorama": "this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 16,
      "tags": "ondemand",
      "colCount": 16,
      "width": 8192,
      "height": 8192
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0430",
 "id": "panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967",
 "thumbnailUrl": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D907ABF7_C39E_055F_41E4_4EC6141715C6",
  "this.overlay_D8BF8F2D_C386_1EF3_41C3_A3F9F0C3C772",
  "this.overlay_D08F599B_C63A_614A_41D0_021B1D354700",
  "this.overlay_D152DA2D_C63B_A34F_41D9_D8D58B150E08"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -144.06,
   "backwardYaw": -33.59,
   "distance": 1,
   "panorama": "this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 22,
      "tags": "ondemand",
      "colCount": 22,
      "width": 11264,
      "height": 11264
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "height": 5632
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u0430\u043a\u0442\u043e\u0432\u044b\u0439 \u0437\u0430\u043b",
 "id": "panorama_B60AC953_BC70_5B31_41E2_183878C88428",
 "thumbnailUrl": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D690B025_C382_02F3_41E1_EC86ADB8627F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.4,
  "pitch": 0
 },
 "id": "camera_E1F84D66_C6F9_A1FD_41DD_074DCF0F8DF2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.41,
  "pitch": 0
 },
 "id": "camera_E18C7D2C_C6F9_A14D_41E4_0BE4BB2AE014",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.99,
  "pitch": 0
 },
 "id": "camera_EE93FDDC_C6F9_A0CD_41E4_F4A9C97C49D1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.94,
  "pitch": 0
 },
 "id": "camera_EE99BDD5_C6F9_A0DF_41D1_BC094FBC5A32",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B655C291_BC70_4931_41D0_A022DE980C28_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.13,
  "pitch": 0
 },
 "id": "camera_E1BB9D3B_C6F9_A14B_41A2_FB88F2C8E203",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.02,
  "pitch": 0
 },
 "id": "camera_EE3EEE41_C6F9_A336_41E7_76E9403866E6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.49,
  "pitch": 0
 },
 "id": "camera_EE1F6E2B_C6F9_A34A_41E2_FC2B58CECCD5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.07,
   "backwardYaw": 39.5,
   "distance": 1,
   "panorama": "this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/u/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/r/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/b/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/d/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 20,
      "tags": "ondemand",
      "colCount": 20,
      "width": 10240,
      "height": 10240
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0/l/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "\u043a\u0430\u0431\u0438\u043d\u0435\u04421",
 "id": "panorama_B646BD3B_BC71_BB71_41E1_33B592820217",
 "thumbnailUrl": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_E4E21255_C6C6_A3DF_41D3_A3F6D580071A"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF",
   "camera": "this.panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_camera"
  }
 ],
 "id": "playList_EA02BC38_C6F9_A756_41DB_0FD66D87FCC2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B646BD3B_BC71_BB71_41E1_33B592820217",
   "camera": "this.panorama_B646BD3B_BC71_BB71_41E1_33B592820217_camera"
  }
 ],
 "id": "playList_EA0EEC34_C6F9_A75E_41B6_6FBDA3295C1D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.93,
  "pitch": 0
 },
 "id": "camera_EE04EE3A_C6F9_A34A_41B7_94211B5C126A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A",
   "camera": "this.panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_camera"
  }
 ],
 "id": "playList_EA086C35_C6F9_A75E_41A4_A5ABB86E5016"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.16,
  "pitch": 0
 },
 "id": "camera_E1C74D5F_C6F9_A1CB_41D0_B66F4A18DC65",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255",
   "camera": "this.panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_camera"
  }
 ],
 "id": "playList_EA3D6C38_C6F9_A756_41E0_78DE115B80A1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.26,
  "pitch": -2.01
 },
 "id": "panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.08,
  "pitch": 0
 },
 "id": "camera_E173CDC6_C6F9_A13A_41CB_CF0DB17B1FD8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967, this.camera_E1DBED50_C6F9_A1D5_41DF_84FC81FFA0C5); this.setMediaBehaviour(this.playList_EA017C37_C6F9_A75A_41A5_C49BEDC950B2, 0, this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.03,
   "image": "this.AnimatedImageResource_E3D9169F_C386_0FCF_41E6_287497423E5D",
   "pitch": -19.66,
   "yaw": -82.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA9DBEA2_C386_1FF1_41BB_2B834EC3C406",
 "maps": [
  {
   "hfov": 17.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -19.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755, this.camera_E1CCCD58_C6F9_A1D5_41E3_B731A2E06EF5); this.setMediaBehaviour(this.playList_EA3C6C39_C6F9_A756_41E1_03C92B1D881D, 0, this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 864,
      "height": 656
     }
    ]
   },
   "pitch": -19.89,
   "yaw": 90.98
  }
 ],
 "id": "overlay_D5F4C6CA_C647_E0CA_41CF_F97A3B57EEA3",
 "maps": [
  {
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -19.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B000B633_BD90_4972_41C3_BB914C3724AC, this.camera_E1C74D5F_C6F9_A1CB_41D0_B66F4A18DC65); this.setMediaBehaviour(this.playList_EA3FAC39_C6F9_A756_41D1_DAA6A814F371, 0, this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 765,
      "height": 653
     }
    ]
   },
   "pitch": -20.03,
   "yaw": -179.81
  }
 ],
 "id": "overlay_D15D81D9_C64B_A0D7_41E3_9EEE6C8B8D75",
 "maps": [
  {
   "hfov": 8.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -20.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B60AC953_BC70_5B31_41E2_183878C88428, this.camera_EE99BDD5_C6F9_A0DF_41D1_BC094FBC5A32); this.setMediaBehaviour(this.playList_EA0A3C36_C6F9_A75A_41E6_1C028B90A55B, 0, this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 463,
      "height": 336
     }
    ]
   },
   "pitch": -12.92,
   "yaw": -33.59
  }
 ],
 "id": "overlay_D76172B9_C382_07D3_41D9_241CAA51DE37",
 "maps": [
  {
   "hfov": 6.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -12.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655DECD_BC73_B911_41A1_55447BC33109, this.camera_EE93FDDC_C6F9_A0CD_41E4_F4A9C97C49D1); this.setMediaBehaviour(this.playList_EA120C33_C6F9_A75A_41E0_1ED93526F580, 0, this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 401,
      "height": 341
     }
    ]
   },
   "pitch": -14.68,
   "yaw": 29.25
  }
 ],
 "id": "overlay_D6AD2DC7_C382_7DBF_41A8_E5A71B9A8A56",
 "maps": [
  {
   "hfov": 5.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -14.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC, this.camera_E1ACBD42_C6F9_A135_4183_A9E775050FAD); this.setMediaBehaviour(this.playList_EA134C32_C6F9_A75A_41B8_7C7D234B1274, 0, this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1123,
      "height": 877
     }
    ]
   },
   "pitch": -12.88,
   "yaw": -0.07
  }
 ],
 "id": "overlay_D0A69F5B_C149_E8C4_41E4_9407FFD8E0C2",
 "maps": [
  {
   "hfov": 12.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -12.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536, this.camera_E1BB9D3B_C6F9_A14B_41A2_FB88F2C8E203); this.setMediaBehaviour(this.playList_EA12AC33_C6F9_A75A_41CC_F1F22EA5B808, 0, this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 926,
      "height": 724
     }
    ]
   },
   "pitch": -4.54,
   "yaw": -179.84
  }
 ],
 "id": "overlay_D63AF24A_C38E_06B1_41DE_4B33D334B8F4",
 "maps": [
  {
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 48.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 465
     }
    ]
   },
   "pitch": 8.91,
   "yaw": -179.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D5B62E52_C38E_3F50_41D2_25EEAAA44F12",
 "data": {
  "label": "\u0412 \u0414\u0420\u0423\u0413\u041e\u0419 \u041a\u041e\u0420\u041f\u0423\u0421"
 },
 "maps": [
  {
   "hfov": 48.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1_0_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 70,
      "height": 16
     }
    ]
   },
   "pitch": 8.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755, this.camera_E1799DBE_C6F9_A14A_41E8_3D21455CA2D3); this.setMediaBehaviour(this.playList_EA3C6C39_C6F9_A756_41E1_03C92B1D881D, 0, this.panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 910,
      "height": 676
     }
    ]
   },
   "pitch": -18.03,
   "yaw": 28.07
  }
 ],
 "id": "overlay_D27BE54A_C64E_A1CA_41D4_4CBC177F55CE",
 "maps": [
  {
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -18.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655C291_BC70_4931_41D0_A022DE980C28, this.camera_E19A0D25_C6F9_A17F_41BA_0AE55C47D1B1); this.setMediaBehaviour(this.playList_EA0F6C34_C6F9_A75E_41D4_121E3A93C120, 0, this.panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1010,
      "height": 873
     }
    ]
   },
   "pitch": -19.16,
   "yaw": 36.36
  }
 ],
 "id": "overlay_DB9B90A1_C486_03F3_41D1_CF23725A0CE8",
 "maps": [
  {
   "hfov": 9.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -19.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967, this.camera_EEE54E24_C6F9_A37E_41E0_1FCC1EAAD40A); this.setMediaBehaviour(this.playList_EA017C37_C6F9_A75A_41A5_C49BEDC950B2, 0, this.panorama_B0087563_BD90_CB11_41D4_E60097ECB19B)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 776,
      "height": 636
     }
    ]
   },
   "pitch": -15.26,
   "yaw": 9.35
  }
 ],
 "id": "overlay_D1FC1A7F_C649_A3CB_41E0_6FADC760576B",
 "maps": [
  {
   "hfov": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0087563_BD90_CB11_41D4_E60097ECB19B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -15.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967, this.camera_E144EDB7_C6F9_A15A_41DB_E4762C652E22); this.setMediaBehaviour(this.playList_EA017C37_C6F9_A75A_41A5_C49BEDC950B2, 0, this.panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 856,
      "height": 745
     }
    ]
   },
   "pitch": -11.24,
   "yaw": -27.7
  }
 ],
 "id": "overlay_D3BA6BB4_C64A_A15D_4173_EF4D2E2125AC",
 "maps": [
  {
   "hfov": 8.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1, this.camera_E06EDD16_C6F9_A15A_41E1_4892C8B70777); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 855,
      "height": 691
     }
    ]
   },
   "pitch": -5.91,
   "yaw": 179.87
  }
 ],
 "id": "overlay_D5656D4C_C382_02B1_41D5_FD7CF65E3DA2",
 "maps": [
  {
   "hfov": 12.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 15
     }
    ]
   },
   "pitch": -5.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 50.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 300
     }
    ]
   },
   "pitch": 9.36,
   "yaw": 180,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D4A6CA78_C386_0751_41E7_19A105B33202",
 "data": {
  "label": "\u0412 \u0414\u0420\u0423\u0413\u041e\u0419 \u041a\u041e\u0420\u041f\u0423\u0421"
 },
 "maps": [
  {
   "hfov": 50.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 109,
      "height": 16
     }
    ]
   },
   "pitch": 9.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912, this.camera_E075DD0F_C6F9_A14A_41E6_61425433C233); this.setMediaBehaviour(this.playList_EA057C36_C6F9_A75A_41E3_BBD40AED6E42, 0, this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 601,
      "height": 523
     }
    ]
   },
   "pitch": -1.95,
   "yaw": -1.32
  }
 ],
 "id": "overlay_D4ACA465_C382_0373_41E6_60C52FD04C3F",
 "maps": [
  {
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B00F1992_BD90_BB33_41CC_B109D211D536_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -1.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755, this.camera_E0614D1D_C6F9_A14E_41E4_18689E17779E); this.setMediaBehaviour(this.playList_EA3C6C39_C6F9_A756_41E1_03C92B1D881D, 0, this.panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 721,
      "height": 621
     }
    ]
   },
   "pitch": -17.02,
   "yaw": -14.51
  }
 ],
 "id": "overlay_D40BAA7F_C649_A3CB_41E7_4721F61F016C",
 "maps": [
  {
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -17.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_EA057C36_C6F9_A75A_41E3_BBD40AED6E42, 0, this.panorama_B6577D95_BC70_FB31_41C1_A042E98872D9)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.47,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 734,
      "height": 650
     }
    ]
   },
   "pitch": -29.61,
   "yaw": -146.87
  }
 ],
 "id": "overlay_D4BDA8B7_C65A_AF5B_41CF_CF4D022C76A3",
 "maps": [
  {
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6577D95_BC70_FB31_41C1_A042E98872D9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -29.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139, this.camera_E164ADCD_C6F9_A0CE_41E8_90D55D267AB1); this.setMediaBehaviour(this.playList_EA076C36_C6F9_A75A_41CD_FC99BFCA532A, 0, this.panorama_B000B633_BD90_4972_41C3_BB914C3724AC)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 783,
      "height": 682
     }
    ]
   },
   "pitch": -15.89,
   "yaw": -5.84
  }
 ],
 "id": "overlay_D244D13B_C64F_A14B_41E7_31473595B243",
 "maps": [
  {
   "hfov": 10.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B000B633_BD90_4972_41C3_BB914C3724AC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -15.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913, this.camera_E1529DB0_C6F9_A156_41E7_10229C079217); this.setMediaBehaviour(this.playList_EA0E9C34_C6F9_A75E_41E8_08859C7FEAAC, 0, this.panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1377,
      "height": 1115
     }
    ]
   },
   "pitch": -17.27,
   "yaw": 44.65
  }
 ],
 "id": "overlay_D8375074_C6C7_BFDD_41C6_0AEEF2A498A1",
 "maps": [
  {
   "hfov": 10.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655C291_BC70_4931_41D0_A022DE980C28, this.camera_E1126D83_C6F9_A13A_4189_08B32F131FAF); this.setMediaBehaviour(this.playList_EA0F6C34_C6F9_A75E_41D4_121E3A93C120, 0, this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA)"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.88,
   "image": "this.AnimatedImageResource_E0E11A81_C6CE_A337_41BB_78C87E9AC44C",
   "pitch": -24.93,
   "yaw": -83.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAAC5EB7_C6CA_A35B_41E6_96009437D5F6",
 "maps": [
  {
   "hfov": 25.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655DECD_BC73_B911_41A1_55447BC33109, this.camera_E139AD92_C6F9_A15A_41D3_0E7E94162695); this.setMediaBehaviour(this.playList_EA120C33_C6F9_A75A_41E0_1ED93526F580, 0, this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1863,
      "height": 1561
     }
    ]
   },
   "pitch": -55.83,
   "yaw": -83.26
  }
 ],
 "id": "overlay_DAA0E258_C6CB_A3D5_41E5_B82CD2C01D1B",
 "maps": [
  {
   "hfov": 14.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 15
     }
    ]
   },
   "pitch": -55.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B646BD3B_BC71_BB71_41E1_33B592820217, this.camera_E1077D8B_C6F9_A14A_41AB_421C0E34DEFF); this.setMediaBehaviour(this.playList_EA0EEC34_C6F9_A75E_41B6_6FBDA3295C1D, 0, this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 868,
      "height": 719
     }
    ]
   },
   "pitch": -37.24,
   "yaw": 39.5
  }
 ],
 "id": "overlay_E3A26AD1_C6DB_E0D7_41E3_2F834BFA6FAE",
 "maps": [
  {
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -37.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755, this.camera_E173CDC6_C6F9_A13A_41CB_CF0DB17B1FD8); this.setMediaBehaviour(this.playList_EA3C6C39_C6F9_A756_41E1_03C92B1D881D, 0, this.panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 761,
      "height": 718
     }
    ]
   },
   "pitch": -18.65,
   "yaw": -3.71
  }
 ],
 "id": "overlay_D45AB5B6_C64A_615D_419B_3B2351B1F5B1",
 "maps": [
  {
   "hfov": 10.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -18.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913, this.camera_EEDE9DFF_C6F9_A0CA_41C3_24BD63DFBA09); this.setMediaBehaviour(this.playList_EA0E9C34_C6F9_A75E_41E8_08859C7FEAAC, 0, this.panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1170,
      "height": 1028
     }
    ]
   },
   "pitch": -18.15,
   "yaw": 167.62
  }
 ],
 "id": "overlay_E5A0241E_C6D9_A74D_41C4_8DF756769619",
 "maps": [
  {
   "hfov": 12.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -18.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912, this.camera_E1A1BD49_C6F9_A137_41DB_266FEC1CE474); this.setMediaBehaviour(this.playList_EA057C36_C6F9_A75A_41E3_BBD40AED6E42, 0, this.panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1071,
      "height": 853
     }
    ]
   },
   "pitch": -28.45,
   "yaw": -119.02
  }
 ],
 "id": "overlay_E46ECC59_C6DA_A7D7_41E8_5A8A5E98E699",
 "maps": [
  {
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 15
     }
    ]
   },
   "pitch": -28.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913, this.camera_E0287CDB_C6F9_A0CA_41D1_BE652D0750DA); this.setMediaBehaviour(this.playList_EA0E9C34_C6F9_A75E_41E8_08859C7FEAAC, 0, this.panorama_B655C291_BC70_4931_41D0_A022DE980C28)"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.57,
   "image": "this.AnimatedImageResource_E0E2CA86_C6CE_A33D_41E6_96265CB93226",
   "pitch": -24.56,
   "yaw": -83.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4BD3C88_C6CE_E735_41E0_3D0875337117",
 "maps": [
  {
   "hfov": 19.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -24.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA, this.camera_E05D4CEA_C6F9_A0CA_41E0_DB119464DA9A); this.setMediaBehaviour(this.playList_EA0C7C33_C6F9_A75A_41A4_695FD0AB89E9, 0, this.panorama_B655C291_BC70_4931_41D0_A022DE980C28)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1887,
      "height": 1282
     }
    ]
   },
   "pitch": -54.33,
   "yaw": -83.85
  }
 ],
 "id": "overlay_E4884685_C6CE_A33F_41DF_D1B1E2AF0C56",
 "maps": [
  {
   "hfov": 15.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -54.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B65345AD_BC71_CB11_41D1_2D2D6630F8D6, this.camera_E0263CE3_C6F9_A0FA_41B1_4F028B87A656); this.setMediaBehaviour(this.playList_EA09CC34_C6F9_A75E_41BF_DBCFEA32E190, 0, this.panorama_B655C291_BC70_4931_41D0_A022DE980C28)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 605,
      "height": 526
     }
    ]
   },
   "pitch": -26.82,
   "yaw": -157.58
  }
 ],
 "id": "overlay_E0EC0AEB_C6C6_60CB_41D6_237E39B0D17B",
 "maps": [
  {
   "hfov": 7.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -26.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461, this.camera_E032DCD4_C6F9_A0DE_41E0_856F104A1845); this.setMediaBehaviour(this.playList_EA092C34_C6F9_A75E_41E1_FA4A88100662, 0, this.panorama_B655C291_BC70_4931_41D0_A022DE980C28)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 605,
      "height": 526
     }
    ]
   },
   "pitch": -27.57,
   "yaw": 158.45
  }
 ],
 "id": "overlay_E09EDCE2_C6C6_60F5_41E2_B4A71F1B48D5",
 "maps": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -27.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655DECD_BC73_B911_41A1_55447BC33109, this.camera_E1819D33_C6F9_A15B_41DA_430BB231115A); this.setMediaBehaviour(this.playList_EA120C33_C6F9_A75A_41E0_1ED93526F580, 0, this.panorama_B646E236_BC70_4973_41E4_52B0383A99E2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 930,
      "height": 813
     }
    ]
   },
   "pitch": -5.72,
   "yaw": -179.81
  }
 ],
 "id": "overlay_E73B49DE_C6DE_A0CD_41E2_5591F5A836A6",
 "maps": [
  {
   "hfov": 10.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646E236_BC70_4973_41E4_52B0383A99E2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967, this.camera_E1F84D66_C6F9_A1FD_41DD_074DCF0F8DF2); this.setMediaBehaviour(this.playList_EA017C37_C6F9_A75A_41A5_C49BEDC950B2, 0, this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912)"
  }
 ],
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.57,
   "image": "this.AnimatedImageResource_DFD93DF3_C386_3D50_41E2_E5B6A546EA28",
   "pitch": 3.71,
   "yaw": -60.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D4756246_C39E_06B0_41A9_C1CAE4BB0A94",
 "maps": [
  {
   "hfov": 23.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B00F1992_BD90_BB33_41CC_B109D211D536, this.camera_E1E72D75_C6F9_A1DF_41E7_EE00D526FC2E); this.setMediaBehaviour(this.playList_EA12AC33_C6F9_A75A_41CC_F1F22EA5B808, 0, this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.47,
   "image": "this.AnimatedImageResource_DFD8DDF3_C386_3D50_41D8_B163D9C3133C",
   "pitch": -28.95,
   "yaw": -58.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_DAAA1D79_C39E_7D53_41E2_A0D3426D30F8",
 "maps": [
  {
   "hfov": 17.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -28.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0109167_BD90_4B11_41A0_50FBEFCB4BE5, this.camera_E1F24D6E_C6F9_A1CD_41D6_C3DE3D821EC0); this.setMediaBehaviour(this.playList_EA006C37_C6F9_A75A_41D2_146AEC670336, 0, this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 599,
      "height": 561
     }
    ]
   },
   "pitch": -13.51,
   "yaw": -100.04
  }
 ],
 "id": "overlay_C9C64D5D_C65E_A1CF_41D5_3B198A34CD50",
 "maps": [
  {
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 15
     }
    ]
   },
   "pitch": -13.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139, this.camera_EE3EEE41_C6F9_A336_41E7_76E9403866E6); this.setMediaBehaviour(this.playList_EA076C36_C6F9_A75A_41CD_FC99BFCA532A, 0, this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 498,
      "height": 467
     }
    ]
   },
   "pitch": -14.6,
   "yaw": -148.65
  }
 ],
 "id": "overlay_D268A59B_C649_E14B_41D4_59982196794E",
 "maps": [
  {
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -14.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1FD06A0_BD91_C90F_41D2_6FE588ED2DFF, this.camera_EE107E32_C6F9_A35A_41DF_481BAE6E0261); this.setMediaBehaviour(this.playList_EA02BC38_C6F9_A756_41DB_0FD66D87FCC2, 0, this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 789,
      "height": 812
     }
    ]
   },
   "pitch": -31.1,
   "yaw": 102.92
  }
 ],
 "id": "overlay_D7E6D14F_C64A_E1CA_41D1_FBCF88E4F8C8",
 "maps": [
  {
   "hfov": 9.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": -31.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F21DD0_BD90_5B0F_41B9_E91BDE6777C6, this.camera_EE04EE3A_C6F9_A34A_41B7_94211B5C126A); this.setMediaBehaviour(this.playList_EA020C38_C6F9_A756_41D6_1B510C5B306C, 0, this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 614,
      "height": 535
     }
    ]
   },
   "pitch": -17.27,
   "yaw": -28.2
  }
 ],
 "id": "overlay_D3C8F18D_C649_A14F_41D5_2DE369C2FB32",
 "maps": [
  {
   "hfov": 8.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F28EB0_BD91_B90F_41E1_E6B56212E255, this.camera_EE1F6E2B_C6F9_A34A_41E2_FC2B58CECCD5); this.setMediaBehaviour(this.playList_EA3D6C38_C6F9_A756_41E0_78DE115B80A1, 0, this.panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 828,
      "height": 731
     }
    ]
   },
   "pitch": -27.19,
   "yaw": -30.72
  }
 ],
 "id": "overlay_D062BFAF_C646_A14B_41BB_AF1D2700F078",
 "maps": [
  {
   "hfov": 10.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1FDC599_BD90_4B31_41E3_65A17ACF8755_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -27.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655DECD_BC73_B911_41A1_55447BC33109, this.camera_EEBECDEA_C6F9_A0CA_41E7_50BA63A55606); this.setMediaBehaviour(this.playList_EA120C33_C6F9_A75A_41E0_1ED93526F580, 0, this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1147,
      "height": 900
     }
    ]
   },
   "pitch": -29.96,
   "yaw": -7.1
  }
 ],
 "id": "overlay_D751645F_C156_D8FC_41B8_774C87BB4FDF",
 "maps": [
  {
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655DECD_BC73_B911_41A1_55447BC33109, this.camera_EEB3EDF1_C6F9_A0D6_41E5_7877E4A27BCD); this.setMediaBehaviour(this.playList_EA120C33_C6F9_A75A_41E0_1ED93526F580, 0, this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1147,
      "height": 900
     }
    ]
   },
   "pitch": -29.96,
   "yaw": -7.1
  }
 ],
 "id": "overlay_D08A3295_C386_07D0_41DF_CFEEEF860F2E",
 "maps": [
  {
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -29.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B64FFB91_BC70_BF31_41D2_E18A41A8B0D1, this.camera_EEA5FDF8_C6F9_A0D6_41D9_C6605880ADFF); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 945,
      "height": 826
     }
    ]
   },
   "pitch": -23.43,
   "yaw": 133.96
  }
 ],
 "id": "overlay_D0EED44A_C386_02B0_41DB_B7BF21771400",
 "maps": [
  {
   "hfov": 11.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -23.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B6557A82_BC73_D913_41CC_032F7A24CCCC, this.camera_E04E3D00_C6F9_A136_41E3_596996D209E2); this.setMediaBehaviour(this.playList_EA134C32_C6F9_A75A_41B8_7C7D234B1274, 0, this.panorama_B655DECD_BC73_B911_41A1_55447BC33109)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 535,
      "height": 434
     }
    ]
   },
   "pitch": -21.14,
   "yaw": -14.01
  }
 ],
 "id": "overlay_D06889CB_C382_05B7_41E5_79FAF08DF9E9",
 "maps": [
  {
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -21.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9, this.camera_E051DCF9_C6F9_A0D6_41D2_C9CCA2A782F8); this.setMediaBehaviour(this.playList_EA0CEC33_C6F9_A75A_41C3_DDE57802E347, 0, this.panorama_B655DECD_BC73_B911_41A1_55447BC33109)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 325,
      "height": 241
     }
    ]
   },
   "pitch": -4.88,
   "yaw": -0.01
  }
 ],
 "id": "overlay_D7B2E41C_C382_02D1_41E3_592AC5EBE5E0",
 "maps": [
  {
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -4.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA, this.camera_E040ED07_C6F9_A13A_41DC_3BFB81F72D52); this.setMediaBehaviour(this.playList_EA0C7C33_C6F9_A75A_41A4_695FD0AB89E9, 0, this.panorama_B655DECD_BC73_B911_41A1_55447BC33109)"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.53,
   "image": "this.AnimatedImageResource_E0E0FA81_C6CE_A337_41E6_F580E151792E",
   "pitch": -2.07,
   "yaw": -89.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D850BC1B_C6C6_A74B_41E8_CD94729680AA",
 "maps": [
  {
   "hfov": 29.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B646E236_BC70_4973_41E4_52B0383A99E2, this.camera_E05AFCF2_C6F9_A0DA_41C9_51894D12D492); this.setMediaBehaviour(this.playList_EA0FEC33_C6F9_A75A_41C6_DD2BA9455120, 0, this.panorama_B655DECD_BC73_B911_41A1_55447BC33109)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 604,
      "height": 491
     }
    ]
   },
   "pitch": -10.49,
   "yaw": 179.81
  }
 ],
 "id": "overlay_E5A42431_C6DF_A757_41D7_5F19F66B1ECD",
 "maps": [
  {
   "hfov": 8.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 15
     }
    ]
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655C291_BC70_4931_41D0_A022DE980C28, this.camera_E1326D9A_C6F9_A14A_41D0_455C66A1F692); this.setMediaBehaviour(this.playList_EA0F6C34_C6F9_A75E_41D4_121E3A93C120, 0, this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1490,
      "height": 1359
     }
    ]
   },
   "pitch": -48.17,
   "yaw": -80.58
  }
 ],
 "id": "overlay_E4188A11_C6C9_A357_41DF_EB998B723F7D",
 "maps": [
  {
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -48.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B65632C6_BC70_4913_41E7_3EBD6E067D6A, this.camera_E159BDA8_C6F9_A176_41A0_E2375953D7FC); this.setMediaBehaviour(this.playList_EA086C35_C6F9_A75E_41A4_A5ABB86E5016, 0, this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 841,
      "height": 457
     }
    ]
   },
   "pitch": -7.56,
   "yaw": 0.14
  }
 ],
 "id": "overlay_E678CBD9_C6CA_A0D7_41D9_8125EB4A8AD9",
 "maps": [
  {
   "hfov": 12.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -7.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B652FFC7_BC70_7711_41D7_681ACFDBCBAD, this.camera_E1270DA1_C6F9_A176_41D5_3071C6C2DC50); this.setMediaBehaviour(this.playList_EA0BEC35_C6F9_A75E_41BC_5ACA1E6F1162, 0, this.panorama_B65E57CC_BC70_5717_41DE_53F770DAD913)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 879,
      "height": 749
     }
    ]
   },
   "pitch": -34.73,
   "yaw": 30.08
  }
 ],
 "id": "overlay_EEE7F0BB_C6CA_5F4A_41C6_612C7ED3F647",
 "maps": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B65E57CC_BC70_5717_41DE_53F770DAD913_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -34.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B655C291_BC70_4931_41D0_A022DE980C28, this.camera_E1183D7C_C6F9_A1CD_41C5_913F80903676); this.setMediaBehaviour(this.playList_EA0F6C34_C6F9_A75E_41D4_121E3A93C120, 0, this.panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1286,
      "height": 1127
     }
    ]
   },
   "pitch": -23.68,
   "yaw": 134.59
  }
 ],
 "id": "overlay_D86CE3E7_C6C7_A0FB_41D6_AD527C4040D3",
 "maps": [
  {
   "hfov": 10.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 134.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B6432FA0_BC70_F70E_41C9_C6C8F0FCE461_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -23.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F39A31_BD90_790E_41C3_3803B760C139, this.camera_EEF04E1D_C6F9_A34E_41E2_87042EA988BC); this.setMediaBehaviour(this.playList_EA076C36_C6F9_A75A_41CD_FC99BFCA532A, 0, this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967)"
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.41,
   "image": "this.AnimatedImageResource_DFDEEDF2_C386_3D50_41D9_2413BFF5A2AB",
   "pitch": -27.7,
   "yaw": 43.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_D907ABF7_C39E_055F_41E4_4EC6141715C6",
 "maps": [
  {
   "hfov": 26.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -27.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912, this.camera_EED32E07_C6F9_A33A_41BE_E065D5DEB49B); this.setMediaBehaviour(this.playList_EA057C36_C6F9_A75A_41E3_BBD40AED6E42, 0, this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967)"
  }
 ],
 "data": {
  "label": "Arrow 02b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1066,
      "height": 856
     }
    ]
   },
   "pitch": -49.05,
   "yaw": -19.6
  }
 ],
 "id": "overlay_D8BF8F2D_C386_1EF3_41C3_A3F9F0C3C772",
 "maps": [
  {
   "hfov": 10.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 15
     }
    ]
   },
   "pitch": -49.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF717DC0_BD90_DB0F_41D2_0E6A476420E3, this.camera_EEC57E0E_C6F9_A34A_41C9_9B13F35259FD); this.setMediaBehaviour(this.playList_EA068C37_C6F9_A75A_41BC_43D06C1C108E, 0, this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 900,
      "height": 821
     }
    ]
   },
   "pitch": -23.93,
   "yaw": -50.94
  }
 ],
 "id": "overlay_D08F599B_C63A_614A_41D0_021B1D354700",
 "maps": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -23.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0087563_BD90_CB11_41D4_E60097ECB19B, this.camera_EEFE7E15_C6F9_A35E_41CB_13DA2819C8A9); this.setMediaBehaviour(this.playList_EA061C37_C6F9_A75A_41D6_C6E0A1E96012, 0, this.panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 602,
      "height": 524
     }
    ]
   },
   "pitch": -19.03,
   "yaw": -41.02
  }
 ],
 "id": "overlay_D152DA2D_C63B_A34F_41D9_D8D58B150E08",
 "maps": [
  {
   "hfov": 8.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -19.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B656E54C_BC70_4B17_41DB_6DEFEE0FFEB9, this.camera_E18C7D2C_C6F9_A14D_41E4_0BE4BB2AE014); this.setMediaBehaviour(this.playList_EA0CEC33_C6F9_A75A_41C3_DDE57802E347, 0, this.panorama_B60AC953_BC70_5B31_41E2_183878C88428)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 713,
      "height": 513
     }
    ]
   },
   "pitch": -6.32,
   "yaw": -144.06
  }
 ],
 "id": "overlay_D690B025_C382_02F3_41E1_EC86ADB8627F",
 "maps": [
  {
   "hfov": 7.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B60AC953_BC70_5B31_41E2_183878C88428_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -6.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA, this.camera_EE84DDE3_C6F9_A0FB_41E1_D57B8B767492); this.setMediaBehaviour(this.playList_EA0C7C33_C6F9_A75A_41A4_695FD0AB89E9, 0, this.panorama_B646BD3B_BC71_BB71_41E1_33B592820217)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1422,
      "height": 1020
     }
    ]
   },
   "pitch": -20.91,
   "yaw": 2.07
  }
 ],
 "id": "overlay_E4E21255_C6C6_A3DF_41D3_A3F6D580071A",
 "maps": [
  {
   "hfov": 15.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B646BD3B_BC71_BB71_41E1_33B592820217_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -20.91
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E3D9169F_C386_0FCF_41E6_287497423E5D",
 "levels": [
  {
   "url": "media/panorama_B1F39A31_BD90_790E_41C3_3803B760C139_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E0E11A81_C6CE_A337_41BB_78C87E9AC44C",
 "levels": [
  {
   "url": "media/panorama_B642F4A1_BC73_C911_41CC_5FB9843F32CA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E0E2CA86_C6CE_A33D_41E6_96265CB93226",
 "levels": [
  {
   "url": "media/panorama_B655C291_BC70_4931_41D0_A022DE980C28_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DFD93DF3_C386_3D50_41E2_E5B6A546EA28",
 "levels": [
  {
   "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DFD8DDF3_C386_3D50_41D8_B163D9C3133C",
 "levels": [
  {
   "url": "media/panorama_B1F2BC70_BD91_D90F_41E1_1BA85A048912_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E0E0FA81_C6CE_A337_41E6_F580E151792E",
 "levels": [
  {
   "url": "media/panorama_B655DECD_BC73_B911_41A1_55447BC33109_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_DFDEEDF2_C386_3D50_41D9_2413BFF5A2AB",
 "levels": [
  {
   "url": "media/panorama_B1F24C95_BD90_D936_41D9_5BAA5E330967_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
}],
 "start": "this.init()",
 "data": {
  "name": "Player450"
 },
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.51,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
