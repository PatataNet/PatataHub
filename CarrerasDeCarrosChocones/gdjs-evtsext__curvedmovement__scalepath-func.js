
if (typeof gdjs.evtsExt__CurvedMovement__ScalePath !== "undefined") {
  gdjs.evtsExt__CurvedMovement__ScalePath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__ScalePath = {};


gdjs.evtsExt__CurvedMovement__ScalePath.userFunc0xcca610 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const pathName = eventsFunctionContext.getArgument("PathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let curvedPath = curvedPaths.get(pathName);
if (curvedPath) {
    const scaleX = eventsFunctionContext.getArgument("ScaleX");
    const scaleY = eventsFunctionContext.getArgument("ScaleY");
    curvedPath.scale(scaleX, scaleY);
}
};
gdjs.evtsExt__CurvedMovement__ScalePath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__ScalePath.userFunc0xcca610(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__ScalePath.func = function(runtimeScene, PathName, ScaleX, ScaleY, parentEventsFunctionContext) {
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
if (argName === "ScaleX") return ScaleX;
if (argName === "ScaleY") return ScaleY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__ScalePath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CurvedMovement__ScalePath.registeredGdjsCallbacks = [];