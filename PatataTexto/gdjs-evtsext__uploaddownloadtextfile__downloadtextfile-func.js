
if (typeof gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile !== "undefined") {
  gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile = {};

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.conditionTrue_0 = {val:false};
gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.userFunc0x72e780 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function DownloadTextContent(filename, mimeType,content) {
    var link = document.createElement('a')
    var blob = new Blob([content], {type: mimeType})
    var url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.click();
    link.remove();
}

const FileName = eventsFunctionContext.getArgument("FileName");
const TextContent = eventsFunctionContext.getArgument("TextContent");

DownloadTextContent(FileName, "text/plain", TextContent);
};
gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.userFunc0x72e780(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func = function(runtimeScene, FileName, TextContent, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "FileName") return FileName;
if (argName === "TextContent") return TextContent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.registeredGdjsCallbacks = [];