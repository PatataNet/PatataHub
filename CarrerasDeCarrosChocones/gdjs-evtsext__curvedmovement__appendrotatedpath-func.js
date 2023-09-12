
if (typeof gdjs.evtsExt__CurvedMovement__AppendRotatedPath !== "undefined") {
  gdjs.evtsExt__CurvedMovement__AppendRotatedPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CurvedMovement__AppendRotatedPath = {};


gdjs.evtsExt__CurvedMovement__AppendRotatedPath.userFunc0x84e5a8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const modifiedPathName = eventsFunctionContext.getArgument("ModifiedPathName");
const addedPathName = eventsFunctionContext.getArgument("AddedPathName");
/** @type {Map<string, gdjs.__curvedMovementExtension.CurvedPath>} */
const curvedPaths = runtimeScene.__curvedMovementExtension.curvedPaths;

let addedPath = curvedPaths.get(addedPathName);
if (addedPath) {
    let modifiedPath = curvedPaths.get(modifiedPathName);
    if (!modifiedPath) {
        modifiedPath = new gdjs.__curvedMovementExtension.CurvedPath();
        curvedPaths.set(modifiedPathName, modifiedPath);
    }
    const shouldFlip = eventsFunctionContext.getArgument("ShouldFlip");
    modifiedPath.appendRotatedPath(addedPath, shouldFlip);
}
};
gdjs.evtsExt__CurvedMovement__AppendRotatedPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CurvedMovement__AppendRotatedPath.userFunc0x84e5a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CurvedMovement__AppendRotatedPath.func = function(runtimeScene, ModifiedPathName, AddedPathName, ShouldFlip, parentEventsFunctionContext) {
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
if (argName === "ModifiedPathName") return ModifiedPathName;
if (argName === "AddedPathName") return AddedPathName;
if (argName === "ShouldFlip") return ShouldFlip;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CurvedMovement__AppendRotatedPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CurvedMovement__AppendRotatedPath.registeredGdjsCallbacks = [];