
if (typeof gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera !== "undefined") {
  gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera = {};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachIndex2 = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachObjects2 = [];

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachTemporary2 = null;

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachTotalCount2 = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3= [];
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects4= [];

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_0 = {val:false};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1 = {val:false};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3);


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i].getX() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinX")) ) {
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[k] = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length = k;}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3 */
{runtimeScene.getVariables().get("__FollowObjects").getChild("MinX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getX()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("LeftMostObjectWidth").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("LeftMostObjectWidth")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getWidth())));
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3);


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i].getX() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxX")) ) {
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[k] = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length = k;}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3 */
{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getX()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("RightMostObjectWidth").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("RightMostObjectWidth")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getWidth())));
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3);


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i].getY() <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinY")) ) {
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[k] = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length = k;}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3 */
{runtimeScene.getVariables().get("__FollowObjects").getChild("MinY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getY()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("TopMostObjectHeight").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("TopMostObjectHeight")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getHeight())));
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2, gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3);


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i].getY() >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxY")) ) {
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[k] = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length = k;}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3 */
{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getY()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("BottomMostObjectHeight").setNumber(Math.max(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("BottomMostObjectHeight")), (( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3[0].getHeight())));
}}

}


};gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxZoom")) || 0 : 0));
}}

}


{


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1 = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxZoom")) || 0 : 0) == 0);
}
}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxZoom").setNumber(1);
}}

}


{


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1 = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LerpSpeed")) || 0 : 0) > 0);
}
}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__FollowObjects").getChild("LerpSpeed").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LerpSpeed")) || 0 : 0));
}}

}


{


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1 = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LerpSpeed")) || 0 : 0) <= 0);
}
}if (gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__FollowObjects").getChild("LerpSpeed").setNumber(0.05);
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1);
{runtimeScene.getVariables().get("__FollowObjects").getChild("MinX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1[0].getX()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxX").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1[0].getX()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("MinY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1[0].getY()));
}{runtimeScene.getVariables().get("__FollowObjects").getChild("MaxY").setNumber((( gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1[0].getY()));
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1);

for(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachIndex2 = 0;gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachIndex2 < gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length;++gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachIndex2) {
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2.length = 0;


gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachTemporary2 = gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1[gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachIndex2];
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2.push(gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxX"))) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("LerpSpeed"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


{


{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxY"))) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("LerpSpeed"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


{



}


{


{
{runtimeScene.getVariables().get("__FollowObjects").getChild("CameraWidth").setNumber(Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxX")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinX"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("LeftMostObjectWidth")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("RightMostObjectWidth")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HorizontalBuffer")) || 0 : 0) * 2);
}{runtimeScene.getVariables().get("__FollowObjects").getChild("CameraHeight").setNumber(Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MinY"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("TopMostObjectHeight")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("BottomMostObjectHeight")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VerticalBuffer")) || 0 : 0) * 2);
}{runtimeScene.getVariables().get("__FollowObjects").getChild("CameraZoom").setNumber(Math.min(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("CameraHeight")), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("CameraWidth"))));
}}

}


{



}


{


{
{runtimeScene.getVariables().get("__FollowObjects").getChild("CameraZoom").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("CameraZoom")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinZoom")) || 0 : 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("MaxZoom"))));
}}

}


{



}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("CameraZoom")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__FollowObjects").getChild("LerpSpeed"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


};

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.func = function(runtimeScene, Object, HorizontalBuffer, VerticalBuffer, MinZoom, MaxZoom, Layer, Camera, LerpSpeed, parentEventsFunctionContext) {
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
if (argName === "HorizontalBuffer") return HorizontalBuffer;
if (argName === "VerticalBuffer") return VerticalBuffer;
if (argName === "MinZoom") return MinZoom;
if (argName === "MaxZoom") return MaxZoom;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "LerpSpeed") return LerpSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects2.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects3.length = 0;
gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.GDObjectObjects4.length = 0;

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__FollowObjectsWithCamera__FollowObjectsWithCamera.registeredGdjsCallbacks = [];