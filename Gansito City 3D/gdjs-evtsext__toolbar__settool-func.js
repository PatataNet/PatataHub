
if (typeof gdjs.evtsExt__Toolbar__SetTool !== "undefined") {
  gdjs.evtsExt__Toolbar__SetTool.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Toolbar__SetTool = {};
gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1= [];
gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects2= [];


gdjs.evtsExt__Toolbar__SetTool.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1);
{runtimeScene.getScene().getVariables().get("_ToolBar").getChild("SelectedToolName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Tool") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Button"), gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[i].getVariableString(gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[i].getVariables().get("BuildingName")) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Tool") : "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[k] = gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Toolbar__SetTool.func = function(runtimeScene, Button, Tool, parentEventsFunctionContext) {
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
if (argName === "Tool") return Tool;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects1.length = 0;
gdjs.evtsExt__Toolbar__SetTool.GDButtonObjects2.length = 0;

gdjs.evtsExt__Toolbar__SetTool.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Toolbar__SetTool.registeredGdjsCallbacks = [];