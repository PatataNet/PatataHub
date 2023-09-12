
if (typeof gdjs.evtsExt__CurvedMovement__CreatePathFromSvg !== "undefined") {
  gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__CreatePathFromSvg = {};


gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.userFunc0xcdf7b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";

const pathName = eventsFunctionContext.getArgument("PathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

const svgCommandsString = eventsFunctionContext.getArgument("SvgCommandsString");

curvedPaths.set(pathName, gdjs.__curvedMovementExtension.CurvedPath.parsePath(svgCommandsString));

};
gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.userFunc0xcdf7b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.func = function(runtimeScene, PathName, SvgCommandsString, parentEventsFunctionContext) {
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
if (argName === "PathName") return PathName;
if (argName === "SvgCommandsString") return SvgCommandsString;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CurvedMovement__CreatePathFromSvg.registeredGdjsCallbacks = [];