
if (typeof gdjs.evtsExt__RenderToSprite__RenderScene !== "undefined") {
  gdjs.evtsExt__RenderToSprite__RenderScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__RenderScene = {};
gdjs.evtsExt__RenderToSprite__RenderScene.GDrenderTargetObjects1= [];

gdjs.evtsExt__RenderToSprite__RenderScene.conditionTrue_0 = {val:false};
gdjs.evtsExt__RenderToSprite__RenderScene.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RenderToSprite__RenderScene.userFunc0x7e9c70 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const source = runtimeScene.getRenderer().getPIXIContainer();
const height = runtimeScene.getLayer("").getCameraHeight();
const width = runtimeScene.getLayer("").getCameraWidth();
/** @type {gdjs.SpriteRuntimeObject} */
const obj = objects[0];
/** @type {PIXI.Sprite} */
const renderTarget = obj.getRendererObject();

// Prepare for render
runtimeScene._updateLayersPreRender();
runtimeScene._updateObjectsPreRender();

// Ensure the target is a RenderTexture of the correct size
gdjs._renderToSprite.rt.resize(width, height);
if (renderTarget.texture instanceof PIXI.RenderTexture) {
    renderTarget.texture.resize(width, height);
} else {
    renderTarget.texture = PIXI.RenderTexture.create({ width, height });
}

// Prerender to a temporary texture to prevent WebGL erroring out.
// See https://www.html5gamedevs.com/topic/45423-why-is-this-not-allowed/
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(source, { renderTexture: gdjs._renderToSprite.rt });

// Actually render 😎
runtimeScene
    .getGame()
    .getRenderer()
    .getPIXIRenderer()
    .render(gdjs._renderToSprite.sprite, { renderTexture: renderTarget.texture });

// Ensure the original width/heigth is restored
renderTarget.width = obj.getWidth();
renderTarget.height = obj.getHeight();

};
gdjs.evtsExt__RenderToSprite__RenderScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("renderTarget"), gdjs.evtsExt__RenderToSprite__RenderScene.GDrenderTargetObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__RenderToSprite__RenderScene.GDrenderTargetObjects1);
gdjs.evtsExt__RenderToSprite__RenderScene.userFunc0x7e9c70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__RenderToSprite__RenderScene.func = function(runtimeScene, renderTarget, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"renderTarget": renderTarget
},
  _objectArraysMap: {
"renderTarget": gdjs.objectsListsToArray(renderTarget)
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

gdjs.evtsExt__RenderToSprite__RenderScene.GDrenderTargetObjects1.length = 0;

gdjs.evtsExt__RenderToSprite__RenderScene.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RenderToSprite__RenderScene.registeredGdjsCallbacks = [];