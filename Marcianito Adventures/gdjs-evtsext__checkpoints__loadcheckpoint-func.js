
if (typeof gdjs.evtsExt__Checkpoints__LoadCheckpoint !== "undefined") {
  gdjs.evtsExt__Checkpoints__LoadCheckpoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Checkpoints__LoadCheckpoint = {};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final = [];

gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final = [];

gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1= [];
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2= [];
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3= [];
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects1= [];
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects2= [];
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects3= [];

gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_0 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_1 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_2 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition2IsTrue_2 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_3 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_3 = {val:false};
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition2IsTrue_3 = {val:false};


gdjs.evtsExt__Checkpoints__LoadCheckpoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1.length = 0;


gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_1 = gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final.length = 0;gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_1.val = false;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToLoadObject"), gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2);
{gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_2 = gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_1;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val = false;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i].variableChildExists(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i].getVariables().get("__Checkpoints").getChild("Position"), "X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")) ) {
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val = true;
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[k] = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length = k;}if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i].variableChildExists(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i].getVariables().get("__Checkpoints").getChild("Position"), "Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")) ) {
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2.val = true;
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[k] = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length = k;}}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_2.val = true && gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val && gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_1.val ) {
    gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final.indexOf(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final.push(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[j]);
    }
}
}
{
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length = 0;

{gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_2 = gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_1;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val = false;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2.val = false;
{
{gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3 = gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SetIgnoreUndefined") : "") != "true");
}
}if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val ) {
{
{gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3 = gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final.length = 0;gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_3.val = false;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_3.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToLoadObject"), gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i].variableChildExists(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i].getVariables().get("__Checkpoints").getChild("Position"), "Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))) ) {
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_3.val = true;
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[k] = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length = k;if( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_3.val ) {
    gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final.indexOf(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final.push(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("ToLoadObject"), gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i].variableChildExists(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i].getVariables().get("__Checkpoints").getChild("Position"), "X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : ""))) ) {
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_3.val = true;
        gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[k] = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length = k;if( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_3.val ) {
    gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final.indexOf(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[j]) === -1 )
            gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final.push(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2_3final, gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2);
}
}
}}
gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_2.val = true && gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_2.val && gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition1IsTrue_1.val ) {
    gdjs.evtsExt__Checkpoints__LoadCheckpoint.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final.indexOf(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final.push(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1_1final, gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1);
}
}
}if (gdjs.evtsExt__Checkpoints__LoadCheckpoint.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("ToMoveObject"), gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects1[i].setPosition((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1[0].getVariables()).get("__Checkpoints").getChild("Position").getChild("X" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")))),(gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1[0].getVariables()).get("__Checkpoints").getChild("Position").getChild("Y" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CheckpointName") : "")))));
}
}}

}


};

gdjs.evtsExt__Checkpoints__LoadCheckpoint.func = function(runtimeScene, ToLoadObject, ToMoveObject, CheckpointName, SetIgnoreUndefined, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ToLoadObject": ToLoadObject
, "ToMoveObject": ToMoveObject
},
  _objectArraysMap: {
"ToLoadObject": gdjs.objectsListsToArray(ToLoadObject)
, "ToMoveObject": gdjs.objectsListsToArray(ToMoveObject)
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
if (argName === "CheckpointName") return CheckpointName;
if (argName === "SetIgnoreUndefined") return SetIgnoreUndefined;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects1.length = 0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects2.length = 0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToLoadObjectObjects3.length = 0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects1.length = 0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects2.length = 0;
gdjs.evtsExt__Checkpoints__LoadCheckpoint.GDToMoveObjectObjects3.length = 0;

gdjs.evtsExt__Checkpoints__LoadCheckpoint.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Checkpoints__LoadCheckpoint.registeredGdjsCallbacks = [];