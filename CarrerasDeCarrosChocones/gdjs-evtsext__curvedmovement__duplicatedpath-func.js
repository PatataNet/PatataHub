
if (typeof gdjs.evtsExt__CurvedMovement__DuplicatedPath !== "undefined") {
  gdjs.evtsExt__CurvedMovement__DuplicatedPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__DuplicatedPath = {};


gdjs.evtsExt__CurvedMovement__DuplicatedPath.userFunc0xce6280 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const createdPathName = eventsFunctionContext.getArgument("CreatedPathName");
const sourcePathName = eventsFunctionContext.getArgument("SourcePathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let sourcePath = curvedPaths.get(sourcePathName);
if (sourcePath) {
    const createdPath = sourcePath.clone();
    curvedPaths.set(createdPathName, createdPath);
}
};
gdjs.evtsExt__CurvedMovement__DuplicatedPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__DuplicatedPath.userFunc0xce6280(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__DuplicatedPath.func = function(runtimeScene, CreatedPathName, SourcePathName, parentEventsFunctionContext) {
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
if (argName === "CreatedPathName") return CreatedPathName;
if (argName === "SourcePathName") return SourcePathName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__DuplicatedPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CurvedMovement__DuplicatedPath.registeredGdjsCallbacks = [];