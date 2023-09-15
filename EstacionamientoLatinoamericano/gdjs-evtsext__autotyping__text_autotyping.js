
gdjs.evtsExt__AutoTyping__Text_AutoTyping = gdjs.evtsExt__AutoTyping__Text_AutoTyping || {};

/**
 * Behavior generated from Auto typing text
 */
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping = class Text_AutoTyping extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Interval = behaviorData.Interval !== undefined ? behaviorData.Interval : Number("0.05") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Interval !== newBehaviorData.Interval)
      this._behaviorData.Interval = newBehaviorData.Interval;

    return true;
  }

  // Properties:
  
  _getInterval() {
    return this._behaviorData.Interval !== undefined ? this._behaviorData.Interval : Number("0.05") || 0;
  }
  _setInterval(newValue) {
    this._behaviorData.Interval = newValue;
  }
}

/**
 * Shared data generated from Auto typing text
 */
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.SharedData = class Text_AutoTypingSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AutoTyping_Text_AutoTypingSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AutoTyping_Text_AutoTypingSharedData = new gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.SharedData(
      initialData
    );
  }
  return instanceContainer._AutoTyping_Text_AutoTypingSharedData;
}

// Methods:
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].timerElapsedTime("Autotyping Write Timer", (gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInterval())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("Autotyping Write Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")).add(1);
}
}}

}


};gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getString() != (gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer")).setString((gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getString()));
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("Autotyping Write Timer");
}
}}

}


};gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14709764);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer")).setString((gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getString()));
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("Autotyping Write Timer");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")) < gdjs.evtTools.string.strLen((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer")))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].setString(gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer"))), 0, 1 + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")))));
}
}
{ //Subevents
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_write_index")) >= gdjs.evtTools.string.strLen((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_txt_buffer")))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Autotyping Write Timer");
}
{ //Subevents
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1[i].getVariables().get("_write_index")) >= gdjs.evtTools.string.strLen((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1[i].getVariables().get("_txt_buffer")))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinished = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingFinishedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects1[i].pauseTimer("Autotyping Write Timer");
}
}}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.Pause = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.PauseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects1[i].unpauseTimer("Autotyping Write Timer");
}
}}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.Resume = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ResumeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1[i].timerPaused("Autotyping Write Timer") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPause = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.TypingPauseContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext = {};
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14720276);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInterval((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("interval")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeInterval = function(interval, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "interval") return interval;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.ChangeIntervalContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AutoTyping::Text_AutoTyping", gdjs.evtsExt__AutoTyping__Text_AutoTyping.Text_AutoTyping);
