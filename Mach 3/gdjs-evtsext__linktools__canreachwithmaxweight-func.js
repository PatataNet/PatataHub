
if (typeof gdjs.evtsExt__LinkTools__CanReachWithMaxWeight !== "undefined") {
  gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight = {};
gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.GDPickedObjectObjects1= [];
gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.GDTargetObjectObjects1= [];

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.userFunc0x86f7b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/**
 * Insert a node in an array sorted by farest 1st
 * @param {gdjs.RuntimeObject[]} objects
 * @param {gdjs.RuntimeObject} object
 */
const insertOpenNode = function (objects, object)
{
    let leftIndex = 0;
    let rightIndex = objects.length;
    while (leftIndex < rightIndex)
    {
        const medianIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (objects[medianIndex].linktoolsWeightSum < object.linktoolsWeightSum
         || objects[medianIndex].linktoolsWeightSum === object.linktoolsWeightSum
         && objects[medianIndex].linktoolsDepth < object.linktoolsDepth)
            rightIndex = medianIndex;
        else
            leftIndex = medianIndex + 1;
    }
    objects.splice(rightIndex, 0, object);
};

let pickedSomething = false;
const pickedObjects = eventsFunctionContext.getObjects("PickedObject");
const targetObjects = eventsFunctionContext.getObjects("TargetObject");
/** @type {string} */
const initialLengthVariableName = eventsFunctionContext.getArgument("InitialLengthVariable");
/** @type {number} */
const maxWeight = eventsFunctionContext.getArgument("MaxWeight");
/** @type {string} */
const costClass = eventsFunctionContext.getArgument("CostClass");
const skipFirstCost = eventsFunctionContext.getArgument("SkipFirstWeight") === true;
/** @type {number} */
const maxDepth = eventsFunctionContext.getArgument("MaxDepth");

/** @type {gdjs.LinksManager} */
const manager = gdjs.LinksManager.getManager(runtimeScene);
for (const targetObject of targetObjects)
{
    targetObject.linktoolsDepth = 0;
    if (initialLengthVariableName === "")
    {
        targetObject.linktoolsWeightSum = 0;
    }
    else
    {
        targetObject.linktoolsWeightSum = targetObject.getVariableNumber(targetObject.getVariables().get(initialLengthVariableName));
    }
}
for (const pickedObject of pickedObjects)
{
    pickedObject.pick = false;
}
// mark every instance that can be reached through links
// openObjects is the new discovered instances where links must be checked
let openObjects;
openObjects = targetObjects.slice();
if (initialLengthVariableName !== "")
{
    // nearest last because pop is o(1)
    openObjects.sort
    (
        function (a, b)
        {
            return b.linktoolsWeightSum - a.linktoolsWeightSum;
        }
    );
}
while (openObjects.length !== 0)
{
    const object = openObjects.pop();
    const linktoolsWeightSum = object.linktoolsWeightSum;
    /** @type {Array<gdjs.RuntimeObject>} */
    const linkedObjects = manager.getObjectsLinkedWith(object);
    for (const linkedObject of linkedObjects)
    {
        // don't check one instance twice
        // and it must be in the set given by the caller
        if (!linkedObject.pick && pickedObjects.includes(linkedObject) && object.linktoolsDepth < maxDepth)
        {
            let newWeightSum = 0;
            if (costClass.length === 0)
            {
                newWeightSum = linktoolsWeightSum + 1;
            }
            else
            {
                const costVariable = linkedObject.getVariables().get("linktools_Cost");
                if (costVariable.hasChild(costClass))
                {
                    const cost = linkedObject.getVariableNumber(costVariable.getChild(costClass));
                    newWeightSum = linktoolsWeightSum + cost;
                }
                else {
                    newWeightSum = maxWeight + 1;
                }
            }
            if (newWeightSum <= maxWeight)
            {
                if (object.linktoolsDepth === 0 && skipFirstCost)
                {
                    linkedObject.linktoolsWeightSum = linktoolsWeightSum;
                }
                else
                {
                    linkedObject.linktoolsWeightSum = newWeightSum;
                }
                linkedObject.pick = true;
                pickedSomething = true;
                linkedObject.linktoolsDepth = object.linktoolsDepth + 1;
                insertOpenNode(openObjects, linkedObject);
            }
        }
    }
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
gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.userFunc0x86f7b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.func = function(runtimeScene, PickedObject, TargetObject, InitialLengthVariable, MaxWeight, CostClass, MaxDepth, SkipFirstWeight, parentEventsFunctionContext) {
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
if (argName === "InitialLengthVariable") return InitialLengthVariable;
if (argName === "MaxWeight") return MaxWeight;
if (argName === "CostClass") return CostClass;
if (argName === "MaxDepth") return MaxDepth;
if (argName === "SkipFirstWeight") return SkipFirstWeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.GDPickedObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LinkTools__CanReachWithMaxWeight.registeredGdjsCallbacks = [];