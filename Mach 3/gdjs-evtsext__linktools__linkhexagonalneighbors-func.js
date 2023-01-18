
if (typeof gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors !== "undefined") {
  gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors = {};
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachIndex2 = 0;

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachObjects2 = [];

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachTemporary2 = null;

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachTotalCount2 = 0;

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects1= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects4= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects1= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects2= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3= [];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects4= [];

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.conditionTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0), (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY())) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) * 3 / 4) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) * 3 / 4) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0), (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY())) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) * 3 / 4) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3);
gdjs.copyArray(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2, gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3);


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getX()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0) / 2, (( gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0].getY()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0) * 3 / 4) ) {
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[k] = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = k;}if (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3 */
/* Reuse gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3[0] : null), (gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length !== 0 ? gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3[0] : null));
}}

}


};gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects1);

for(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachIndex2 = 0;gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachIndex2 < gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects1.length;++gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachIndex2) {
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2.length = 0;


gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachTemporary2 = gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects1[gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachIndex2];
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2.push(gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.func = function(runtimeScene, Object, Neighbor, CellWidth, CellHeight, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Neighbor": Neighbor
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Neighbor": gdjs.objectsListsToArray(Neighbor)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects3.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDObjectObjects4.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects1.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects2.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects3.length = 0;
gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.GDNeighborObjects4.length = 0;

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__LinkTools__LinkHexagonalNeighbors.registeredGdjsCallbacks = [];