
if (typeof gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid !== "undefined") {
  gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid = {};
gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.GDObjectObjects1= [];

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.conditionTrue_0 = {val:false};
gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.userFunc0x9e6c48 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Insired from: https://www.redblobgames.com/grids/hexagons

const cellHeight = eventsFunctionContext.getArgument("CellWidth");
const cellWidth = eventsFunctionContext.getArgument("CellHeight");
const offsetY = eventsFunctionContext.getArgument("OffsetX");
const offsetX = eventsFunctionContext.getArgument("OffsetY");

for (const object of objects)
{
    // Find the hexagon cube coordinates for a given position 

    // The following is a simplified version of this:
    //
    // const x = (object.getX() - offsetX) * Math.sqrt(3) / cellWidth;
    // const y = (object.getY() - offsetY) * 2 / cellHeight;
    //
    // const cubeX = Math.sqrt(3) / 3 * x  -  1/3 * y;
    // const cubeZ =                          2/3 * y;

    const x = (object.getY() - offsetX) / cellWidth;
    const y = (object.getX() - offsetY) / cellHeight;

    const cubeX = x - 2/3 * y;
    const cubeZ =     4/3 * y;
    const cubeY = -cubeX - cubeZ;

    let roundX = Math.round(cubeX);
    let roundY = Math.round(cubeY);
    let roundZ = Math.round(cubeZ);

    const deltaX = Math.abs(roundX - cubeX);
    const deltaY = Math.abs(roundY - cubeY);
    const deltaZ = Math.abs(roundZ - cubeZ);

    if (deltaX > deltaY && deltaX > deltaZ)
    {
        roundX = -roundY - roundZ;
    }
    else if (deltaY > deltaZ)
    {
        roundY = -roundX - roundZ;
    }
    else
    {
        roundZ = -roundX - roundY;
    }

    // Hexagon cube coordinates to hexagon position

    // The following is a simplified version of this:
    //
    // const positionX = Math.sqrt(3) * roundX  + Math.sqrt(3)/2 * roundZ;
    // const positionY =                          3/2 * roundZ;
    //
    // object.setX(positionX * cellWidth / Math.sqrt(3) + offsetX);
    // object.setY(positionY * cellHeight / 2 + offsetY);

    const positionX = roundX + 1/2 * roundZ;
    const positionY =          3/4 * roundZ;

    object.setY(positionX * cellWidth + offsetX);
    object.setX(positionY * cellHeight + offsetY);
}
};
gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.GDObjectObjects1);
gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.userFunc0x9e6c48(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.func = function(runtimeScene, Object, CellWidth, CellHeight, OffsetX, OffsetY, parentEventsFunctionContext) {
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

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.GDObjectObjects1.length = 0;

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__HexagonalGrid__SnapObjectToFlatToppedHexagonalGrid.registeredGdjsCallbacks = [];