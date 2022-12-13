
gdjs.evtsExt__MultitouchJoystick__MultitouchButton = gdjs.evtsExt__MultitouchJoystick__MultitouchButton || {};

/**
 * Behavior generated from Multitouch button
 */
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton = class MultitouchButton extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.IsPressed = false;
    this._behaviorData.TouchID = Number("0") || 0;
    this._behaviorData.TouchDistance = Number("0") || 0;
    this._behaviorData.TouchCounter = Number("") || 0;
    this._behaviorData.IsReleased = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.IsPressed !== newBehaviorData.IsPressed)
      this._behaviorData.IsPressed = newBehaviorData.IsPressed;
    if (oldBehaviorData.TouchID !== newBehaviorData.TouchID)
      this._behaviorData.TouchID = newBehaviorData.TouchID;
    if (oldBehaviorData.TouchDistance !== newBehaviorData.TouchDistance)
      this._behaviorData.TouchDistance = newBehaviorData.TouchDistance;
    if (oldBehaviorData.TouchCounter !== newBehaviorData.TouchCounter)
      this._behaviorData.TouchCounter = newBehaviorData.TouchCounter;
    if (oldBehaviorData.IsReleased !== newBehaviorData.IsReleased)
      this._behaviorData.IsReleased = newBehaviorData.IsReleased;

    return true;
  }

  // Properties:
  
  _getIsPressed() {
    return this._behaviorData.IsPressed !== undefined ? this._behaviorData.IsPressed : false;
  }
  _setIsPressed(newValue) {
    this._behaviorData.IsPressed = newValue;
  }
  _getTouchID() {
    return this._behaviorData.TouchID !== undefined ? this._behaviorData.TouchID : Number("0") || 0;
  }
  _setTouchID(newValue) {
    this._behaviorData.TouchID = newValue;
  }
  _getTouchDistance() {
    return this._behaviorData.TouchDistance !== undefined ? this._behaviorData.TouchDistance : Number("0") || 0;
  }
  _setTouchDistance(newValue) {
    this._behaviorData.TouchDistance = newValue;
  }
  _getTouchCounter() {
    return this._behaviorData.TouchCounter !== undefined ? this._behaviorData.TouchCounter : Number("") || 0;
  }
  _setTouchCounter(newValue) {
    this._behaviorData.TouchCounter = newValue;
  }
  _getIsReleased() {
    return this._behaviorData.IsReleased !== undefined ? this._behaviorData.IsReleased : false;
  }
  _setIsReleased(newValue) {
    this._behaviorData.IsReleased = newValue;
  }
}

/**
 * Shared data generated from Multitouch button
 */
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.SharedData = class MultitouchButtonSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._MultitouchJoystick_MultitouchButtonSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._MultitouchJoystick_MultitouchButtonSharedData = new gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.SharedData(
      initialData
    );
  }
  return instanceContainer._MultitouchJoystick_MultitouchButtonSharedData;
}

// Methods:
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount3 = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex3 = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects5= [];

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4);


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPressed()) ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchCounter())), (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchCounter())), (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0)) ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;}}
if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchID(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchCounter())));
}
}{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(true);
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchCounter(gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchCounter() + (1));
}
}}

}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount3 = gdjs.evtTools.input.getStartedTouchCount(runtimeScene);
for(gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex3 = 0;gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex3 < gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount3;++gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex3) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
}if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchCounter(0);
}
}
{ //Subevents
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(false);
}
}{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(true);
}
}{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchID(0);
}
}}

}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchID()));
}if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPressed() ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext = {};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2= [];

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1);

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsReleased() ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleased = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext = {};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1);

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPressed() ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext = {};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_1 = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1);

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_1 = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPressed() ) {
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(false);
}
}{for(var i = 0, len = gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(true);
}
}}

}


};

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("MultitouchJoystick::MultitouchButton", gdjs.evtsExt__MultitouchJoystick__MultitouchButton.MultitouchButton);
