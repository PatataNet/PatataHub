
if (typeof gdjs.evtsExt__Reflection__Reflect !== "undefined") {
  gdjs.evtsExt__Reflection__Reflect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Reflection__Reflect = {};
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1= [];
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2= [];
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects3= [];
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1= [];
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2= [];
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects3= [];
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects1= [];
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2= [];
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects3= [];

gdjs.evtsExt__Reflection__Reflect.conditionTrue_0 = {val:false};
gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Reflection__Reflect.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = {val:false};
gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Reflection__Reflect.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Reflection__Reflect.mapOfGDgdjs_46evtsExt_95_95Reflection_95_95Reflect_46GDReflectionObjectObjects1Objects = Hashtable.newFrom({"ReflectionObject": gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1});
gdjs.evtsExt__Reflection__Reflect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0;
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Remove") : false);
}
}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__Reflection__Reflect.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setX((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setAnimation((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getAnimation()));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setAnimationFrame((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getAnimationFrame()));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setWidth((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setHeight((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setAngle(-((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getAngle())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i].isVisible() ) {
        gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[k] = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length = k;}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i].isVisible()) ) {
        gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[k] = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length = k;}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i].isFlippedX() ) {
        gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[k] = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length = k;}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i].isFlippedX()) ) {
        gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[k] = gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length = k;}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].flipX(false);
}
}}

}


{


gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0;
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0) >= 0);
}
}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectiveSurface"), gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2);
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].setY((( gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2[0].getY()) - ((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getPointY("")) - (( gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2[0].getY())) - (( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getHeight()) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Distance")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0;
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1.val = ((( gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[0].getPointY("")) >= (( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2[0].getPointY("")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DeleteDistance")) || 0 : 0));
}
}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ReflectionObject"), gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1);

gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0;
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1.val = ((( gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[0].getPointY("")) <= (( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1[0].getPointY("")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DeleteDistance")) || 0 : 0));
}
}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[i].hide();
}
}
{ //Subevents
gdjs.evtsExt__Reflection__Reflect.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Reflection__Reflect.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Reflection__Reflect.conditionTrue_1 = gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0;
gdjs.evtsExt__Reflection__Reflect.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10477732);
}
}if (gdjs.evtsExt__Reflection__Reflect.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("PrimaryObject"), gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1);
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Reflection__Reflect.mapOfGDgdjs_46evtsExt_95_95Reflection_95_95Reflect_46GDReflectionObjectObjects1Objects, (( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1[0].getPointX("")), (( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[i].setOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Opacity")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1[i].setZOrder((( gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1[0].getZOrder()) - 1);
}
}}

}


{


gdjs.evtsExt__Reflection__Reflect.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Reflection__Reflect.func = function(runtimeScene, ReflectionObject, PrimaryObject, Distance, Opacity, ReflectiveSurface, Zorder, Layer, Remove, DeleteDistance, FloorOpacity, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ReflectionObject": ReflectionObject
, "PrimaryObject": PrimaryObject
, "ReflectiveSurface": ReflectiveSurface
},
  _objectArraysMap: {
"ReflectionObject": gdjs.objectsListsToArray(ReflectionObject)
, "PrimaryObject": gdjs.objectsListsToArray(PrimaryObject)
, "ReflectiveSurface": gdjs.objectsListsToArray(ReflectiveSurface)
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
if (argName === "Distance") return Distance;
if (argName === "Opacity") return Opacity;
if (argName === "Zorder") return Zorder;
if (argName === "Layer") return Layer;
if (argName === "Remove") return Remove;
if (argName === "DeleteDistance") return DeleteDistance;
if (argName === "FloorOpacity") return FloorOpacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects1.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects2.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDReflectionObjectObjects3.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects1.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects2.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDPrimaryObjectObjects3.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects1.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects2.length = 0;
gdjs.evtsExt__Reflection__Reflect.GDReflectiveSurfaceObjects3.length = 0;

gdjs.evtsExt__Reflection__Reflect.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Reflection__Reflect.registeredGdjsCallbacks = [];