
if (typeof gdjs.evtsExt__ReadPixels__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ReadPixels__onFirstSceneLoaded = {};

gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.userFunc0x7eba18 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Define an new private object javascript for this extension
gdjs._readPixels = {};

/** 
 * @param {HTMLCanvasElement} canvas
 */
gdjs._readPixels.getCanvasType = function (canvas) {
    const is2d = canvas.getContext("2d");
    const isBitmap = canvas.getContext("bitmaprenderer");
    const isWebGL1 = canvas.getContext("webgl");
    const isWebGL2 = canvas.getContext("webgl2");
    const isExperimentalWebGL = canvas.getContext("experimental-webgl");

    return is2d ?
        "2d" : isBitmap ?
            "bitmaprenderer" : isWebGL1 ?
                "webgl" : isWebGL2 ?
                    "webgl2" : isExperimentalWebGL ?
                        "experimental-webgl" : null;
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} colorIndex Should be 0, 1, 2 or 3, for red, green, blue or alpha channel.
 * @param {number} positionX The X position of the pixel on the canvas to read
 * @param {number} positionY The Y position of the pixel on the canvas to read
 */
gdjs._readPixels.getPixelColor = function (canvas, colorIndex, positionX, positionY) {

    const gl = canvas.getContext("webgl2") ||  canvas.getContext("webgl") || canvas.getContext("experimental-webgl") ;

    const data = new Uint8Array(1 * 4); // [255,255,255,255] RGBA

    const invertedPositionY = gl.drawingBufferHeight - positionY;
    // mandatory because textures in webGL are invert before rendering in the canvas,
    // otherwise the bottom left corner will be used

    gl.readPixels(positionX, invertedPositionY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    // Read 1 pixel and store it in data.

    return data[colorIndex];
}


};
gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.userFunc0x7eba18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__ReadPixels__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
