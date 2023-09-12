
if (typeof gdjs.evtsExt__Level__BuildTrack !== "undefined") {
  gdjs.evtsExt__Level__BuildTrack.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Level__BuildTrack = {};
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1= [];
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2= [];
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3= [];
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects4= [];
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1= [];
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects2= [];
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects3= [];
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects4= [];


gdjs.evtsExt__Level__BuildTrack.mapOfGDgdjs_46evtsExt_95_95Level_95_95BuildTrack_46GDStartIndicatorObjects1Objects = Hashtable.newFrom({"StartIndicator": gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1});
gdjs.evtsExt__Level__BuildTrack.mapOfGDgdjs_46evtsExt_95_95Level_95_95BuildTrack_46GDRoadTileObjects1Objects = Hashtable.newFrom({"RoadTile": gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1});
gdjs.evtsExt__Level__BuildTrack.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Level__BuildTrack.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Level__BuildTrack.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Level__BuildTrack.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__Level__BuildTrack.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("x").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("StartX")) + gdjs.evtsExt__CurvedMovement__PathEndX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getScene().getVariables().get("y").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("StartY")) + gdjs.evtsExt__CurvedMovement__PathEndY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.evtsExt__Level__BuildTrack.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2, gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).IsStartPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("y")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[k] = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3 */
{gdjs.evtsExt__CurvedMovement__AppendPath.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length === 0 ) ? "" :gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].setVariableBoolean(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getVariables().get("covered"), true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("hasNoMoreTile"), false);
}
{ //Subevents
gdjs.evtsExt__Level__BuildTrack.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2, gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).IsEndPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("y")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[k] = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getVariableBoolean(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getVariables().get("covered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[k] = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3 */
{gdjs.evtsExt__CurvedMovement__AppendPath.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length === 0 ) ? "" :gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).InvertedPathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].setVariableBoolean(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3[i].getVariables().get("covered"), true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("hasNoMoreTile"), false);
}
{ //Subevents
gdjs.evtsExt__Level__BuildTrack.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Level__BuildTrack.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RoadTile"), gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("StartIndicator"), gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Level__BuildTrack.mapOfGDgdjs_46evtsExt_95_95Level_95_95BuildTrack_46GDStartIndicatorObjects1Objects, gdjs.evtsExt__Level__BuildTrack.mapOfGDgdjs_46evtsExt_95_95Level_95_95BuildTrack_46GDRoadTileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1 */
/* Reuse gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1 */
{runtimeScene.getScene().getVariables().get("StartX").setNumber((( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).StartX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getScene().getVariables().get("StartY").setNumber((( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).StartY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtsExt__CurvedMovement__DuplicatedPath.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("PathName") : ""), (( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1.length === 0 ) ? "" :gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("RoadTileBehavior")).PathName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1[i].setVariableBoolean(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1[i].getVariables().get("covered"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.evtsExt__Level__BuildTrack.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("hasNoMoreTile"), false);
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(eventsFunctionContext.getObjects("RoadTile"), gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2[i].getVariableBoolean(gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2[i].getVariables().get("covered"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2[k] = gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("hasNoMoreTile"), false);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("hasNoMoreTile"), true);
}
{ //Subevents: 
gdjs.evtsExt__Level__BuildTrack.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};

gdjs.evtsExt__Level__BuildTrack.func = function(runtimeScene, PathName, RoadTile, RoadTileBehavior, StartIndicator, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"RoadTile": RoadTile
, "StartIndicator": StartIndicator
},
  _objectArraysMap: {
"RoadTile": gdjs.objectsListsToArray(RoadTile)
, "StartIndicator": gdjs.objectsListsToArray(StartIndicator)
},
  _behaviorNamesMap: {
"RoadTileBehavior": RoadTileBehavior
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects1.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects2.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects3.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDRoadTileObjects4.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects1.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects2.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects3.length = 0;
gdjs.evtsExt__Level__BuildTrack.GDStartIndicatorObjects4.length = 0;

gdjs.evtsExt__Level__BuildTrack.eventsList5(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Level__BuildTrack.registeredGdjsCallbacks = [];