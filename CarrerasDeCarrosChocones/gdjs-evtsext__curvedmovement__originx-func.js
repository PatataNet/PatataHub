
if (typeof gdjs.evtsExt__CurvedMovement__OriginX !== "undefined") {
  gdjs.evtsExt__CurvedMovement__OriginX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__OriginX = {};


gdjs.evtsExt__CurvedMovement__OriginX.userFunc0xcca610 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const pathName = eventsFunctionContext.getArgument("PathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;
const curvedPath = curvedPaths.get(pathName);

/** @type {number} */
const index = eventsFunctionContext.getArgument("Index");

eventsFunctionContext.returnValue = (
  (curvedPath && curvedPath && index >= 0 && index < curvedPath.curves.length)
  ? curvedPath.getOriginX(index) : 0);

};
gdjs.evtsExt__CurvedMovement__OriginX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__CurvedMovement__OriginX.userFunc0xcca610(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__OriginX.func = function(runtimeScene, PathName, Index, parentEventsFunctionContext) {
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
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__OriginX.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__CurvedMovement__OriginX.registeredGdjsCallbacks = [];