
if (typeof gdjs.evtsExt__Toolbar__UpdateToolSelection !== "undefined") {
  gdjs.evtsExt__Toolbar__UpdateToolSelection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Toolbar__UpdateToolSelection = {};
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final = [];

gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1= [];
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2= [];


gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1});
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects);
}
{ //Subevents
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1});
gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1});
gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1});
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Toolbar__UpdateToolSelection.mapOfGDgdjs_46evtsExt_95_95Toolbar_95_95UpdateToolSelection_46GDButtonObjects1Objects);
}
{ //Subevents
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_ToolBar").getChild("SelectedToolName").setString("None");
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(8606588);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{runtimeScene.getScene().getVariables().get("_ToolBar").getChild("SelectedToolName").setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[0].getVariables()).get("BuildingName"))));
}}

}


{



}


{

gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final.indexOf(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[j]) === -1 )
            gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final.push(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final.indexOf(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[j]) === -1 )
            gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final.push(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1_1final, gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].enableEffect("Black", false);
}
}{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].enableEffect("White", true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].enableEffect("Black", true);
}
}{for(var i = 0, len = gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1[i].enableEffect("White", false);
}
}}

}


};

gdjs.evtsExt__Toolbar__UpdateToolSelection.func = function(runtimeScene, Button, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Button": Button
},
  _objectArraysMap: {
"Button": gdjs.objectsListsToArray(Button)
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

gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects1.length = 0;
gdjs.evtsExt__Toolbar__UpdateToolSelection.GDButtonObjects2.length = 0;

gdjs.evtsExt__Toolbar__UpdateToolSelection.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Toolbar__UpdateToolSelection.registeredGdjsCallbacks = [];