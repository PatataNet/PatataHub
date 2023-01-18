
if (typeof gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles !== "undefined") {
  gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles = {};
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount2 = 0;

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount4 = 0;

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex2 = 0;

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex4 = 0;

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects2= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects3= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects4= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects5= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects6= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects1= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects2= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects3= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects4= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5= [];
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects6= [];

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.conditionTrue_0 = {val:false};
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.mapOfGDgdjs_46evtsExt_95_95MinesweeperFunctions_95_95RevealEmptyTiles_46GDNeighborObjects5Objects = Hashtable.newFrom({"Neighbor": gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5});
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.mapOfGDgdjs_46evtsExt_95_95MinesweeperFunctions_95_95RevealEmptyTiles_46GDObjectObjects5Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects5});
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5 */

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i].getVariableBoolean(gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i].getVariables().get("Revealed"), false) ) {
        gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[k] = gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length = k;}if (gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5 */
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects5);
{gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.func(runtimeScene, gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.mapOfGDgdjs_46evtsExt_95_95MinesweeperFunctions_95_95RevealEmptyTiles_46GDNeighborObjects5Objects, gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.mapOfGDgdjs_46evtsExt_95_95MinesweeperFunctions_95_95RevealEmptyTiles_46GDObjectObjects5Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5);

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i].isCollidingWithPoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("ThisCenterX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("ThisObjectWidth"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("ThisCenterY")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__Minesweeper").getChild("ThisObjectWidth")))) ) {
        gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[k] = gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length = k;}if (gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5 */
{for(var i = 0, len = gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i].setVariableBoolean(gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5[i].getVariables().get("Revealed"), true);
}
}
{ //Subevents
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetX").add(1);
}}

}


};gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount4 = 3;
for(gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex4 = 0;gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex4 < gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount4;++gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


{
{runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetX").setNumber(-(1));
}{runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetY").add(1);
}}

}


};gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1);
{runtimeScene.getVariables().get("__Minesweeper").getChild("ThisCenterX").setNumber((( gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1[0].getCenterXInScene()));
}{runtimeScene.getVariables().get("__Minesweeper").getChild("ThisCenterY").setNumber((( gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1[0].getCenterYInScene()));
}{runtimeScene.getVariables().get("__Minesweeper").getChild("ThisObjectWidth").setNumber((( gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1[0].getWidth()));
}{runtimeScene.getVariables().get("__Minesweeper").getChild("ThisNeighborCount").setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetX").setNumber(-(1));
}{runtimeScene.getVariables().get("__Minesweeper").getChild("NeighborOffsetY").setNumber(-(1));
}}

}


{



}


{


gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount2 = 3;
for(gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex2 = 0;gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex2 < gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatCount2;++gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.func = function(runtimeScene, Object, Neighbor, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects1.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects2.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects3.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects4.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects5.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDObjectObjects6.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects1.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects2.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects3.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects4.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects5.length = 0;
gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.GDNeighborObjects6.length = 0;

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MinesweeperFunctions__RevealEmptyTiles.registeredGdjsCallbacks = [];