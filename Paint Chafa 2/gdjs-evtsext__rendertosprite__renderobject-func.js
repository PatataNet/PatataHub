
if (typeof gdjs.evtsExt__RenderToSprite__RenderObject !== "undefined") {
  gdjs.evtsExt__RenderToSprite__RenderObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__RenderObject = {};
gdjs.evtsExt__RenderToSprite__RenderObject.GDsourceObjects1= [];
gdjs.evtsExt__RenderToSprite__RenderObject.GDrenderTargetObjects1= [];

gdjs.evtsExt__RenderToSprite__RenderObject.conditionTrue_0 = {val:false};
gdjs.evtsExt__RenderToSprite__RenderObject.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RenderToSprite__RenderObject.userFunc0x7e84e0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const source = eventsFunctionContext.getObjects("source")[0].getRendererObject();
const renderTarget = eventsFunctionContext.getObjects("renderTarget")[0].getRendererObject();

// Reset position so that it is not offscreen while rendering
const { position: { x: originalX, y: originalY } } = source;
const { width, height, x, y } = source.getLocalBounds();
source.position = { x: -x, y: -y };

// Ensure the target is a RenderTexture of the correct size
if (renderTarget.texture instanceof PIXI.RenderTexture) {
    renderTarget.texture.resize(width, height);
} else {
    renderTarget.texture = PIXI.RenderTexture.create({ width, height });
}

// Render 😎
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(source, { renderTexture: renderTarget.texture });

// Restore original position
source.position = { x: originalX, y: originalY };

};
gdjs.evtsExt__RenderToSprite__RenderObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RenderToSprite__RenderObject.userFunc0x7e84e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__RenderToSprite__RenderObject.func = function(runtimeScene, source, renderTarget, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"source": source
, "renderTarget": renderTarget
},
  _objectArraysMap: {
"source": gdjs.objectsListsToArray(source)
, "renderTarget": gdjs.objectsListsToArray(renderTarget)
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

gdjs.evtsExt__RenderToSprite__RenderObject.GDsourceObjects1.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject.GDrenderTargetObjects1.length = 0;

gdjs.evtsExt__RenderToSprite__RenderObject.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RenderToSprite__RenderObject.registeredGdjsCallbacks = [];