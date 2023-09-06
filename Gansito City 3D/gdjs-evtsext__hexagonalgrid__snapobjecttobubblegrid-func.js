
if (typeof gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid !== "undefined") {
  gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid = {};
gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects1= [];
gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects2= [];


gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.mapOfGDgdjs_46evtsExt_95_95HexagonalGrid_95_95SnapObjectToBubbleGrid_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects1});
gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects1);
{gdjs.evtsExt__HexagonalGrid__SnapObjectToPointyToppedHexagonalGrid.func(runtimeScene, gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.mapOfGDgdjs_46evtsExt_95_95HexagonalGrid_95_95SnapObjectToBubbleGrid_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) * 7 / 6, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OffsetX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OffsetY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.func = function(runtimeScene, Object, CellWidth, CellHeight, OffsetX, OffsetY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "CellWidth") return CellWidth;
if (argName === "CellHeight") return CellHeight;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects1.length = 0;
gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.GDObjectObjects2.length = 0;

gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__HexagonalGrid__SnapObjectToBubbleGrid.registeredGdjsCallbacks = [];