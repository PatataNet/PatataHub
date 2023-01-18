
if (typeof gdjs.evtsExt__LinkTools__CanReach !== "undefined") {
  gdjs.evtsExt__LinkTools__CanReach.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__CanReach = {};
gdjs.evtsExt__LinkTools__CanReach.GDPickedObjectObjects1= [];
gdjs.evtsExt__LinkTools__CanReach.GDTargetObjectObjects1= [];

gdjs.evtsExt__LinkTools__CanReach.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__CanReach.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinkTools__CanReach.userFunc0xa07fb8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let pickedSomething = false;
const pickedObjects = eventsFunctionContext.getObjects("PickedObject");
const targetObjects = eventsFunctionContext.getObjects("TargetObject");
console.log("pickedObjects: " + pickedObjects.length);
/** @type {gdjs.LinksManager} */
const manager = gdjs.LinksManager.getManager(runtimeScene);
for (const targetObject of targetObjects)
{
    targetObject.linktoolsWeightSum = 0;
}
for (const pickedObject of pickedObjects)
{
    pickedObject.pick = false;
}
// mark every instance that can be reached through links
// openObjects is the new discovered instances where links must be checked
let openObjects = [];
let swapOpenObjects = [];
let nextOpenObjects = targetObjects.slice();
let linkLength = 0;
while (nextOpenObjects.length !== 0)
{
    swapOpenObjects = openObjects;
    openObjects = nextOpenObjects;
    nextOpenObjects = swapOpenObjects;
    nextOpenObjects.length = 0;
    while (openObjects.length != 0)
    {
        const object = openObjects.pop();
        /** @type {Array<gdjs.RuntimeObject>} */
        const linkedObjects = manager.getObjectsLinkedWith(object);
        for (const linkedObject of linkedObjects)
        {
            // don't check one instance twice
            // and it must be in the set given by the caller
            if (!linkedObject.pick && pickedObjects.includes(linkedObject))
            {
                linkedObject.pick = true;
                pickedSomething = true;
                linkedObject.linktoolsWeightSum = linkLength + 1;
                nextOpenObjects.push(linkedObject);
            }
        }
    }
    linkLength++;
}
// filter the instances to only keep the one marked with the pick attribute
const pickedObjectsLists = eventsFunctionContext.getObjectsLists("PickedObject");
/** @type {Array<String>} */
const objectNames = [];
pickedObjectsLists.keys(objectNames);
for (const objectName of objectNames)
{
    const pickedObjectsList = pickedObjectsLists.get(objectName);
    gdjs.evtTools.object.filterPickedObjectsList(pickedObjectsList);
}
for (const pickedObject of pickedObjects)
{
    pickedObject.pick = false;
}
eventsFunctionContext.returnValue = pickedSomething;
};
gdjs.evtsExt__LinkTools__CanReach.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LinkTools__CanReach.userFunc0xa07fb8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LinkTools__CanReach.func = function(runtimeScene, PickedObject, TargetObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"PickedObject": PickedObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"PickedObject": gdjs.objectsListsToArray(PickedObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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

gdjs.evtsExt__LinkTools__CanReach.GDPickedObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__CanReach.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__LinkTools__CanReach.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LinkTools__CanReach.registeredGdjsCallbacks = [];