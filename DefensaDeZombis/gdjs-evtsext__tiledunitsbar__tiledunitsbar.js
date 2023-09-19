
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar || {};

/**
 * Object generated from Resource bar (separated units)
 */
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar = class TiledUnitsBar extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.MaxValue = objectData.content.MaxValue !== undefined ? objectData.content.MaxValue : Number("3") || 0;
    this._objectData.InitialValue = objectData.content.InitialValue !== undefined ? objectData.content.InitialValue : Number("3") || 0;
    this._objectData.PreviousInitialValue = Number("") || 0;
    this._objectData.UnitWidth = objectData.content.UnitWidth !== undefined ? objectData.content.UnitWidth : Number("24") || 0;
    this._objectData.ShowBackground = objectData.content.ShowBackground !== undefined ? objectData.content.ShowBackground : true;
    this._objectData.BarLeftPadding = objectData.content.BarLeftPadding !== undefined ? objectData.content.BarLeftPadding : Number("0") || 0;
    this._objectData.BarRightPadding = objectData.content.BarRightPadding !== undefined ? objectData.content.BarRightPadding : Number("0") || 0;
    this._objectData.BarVerticalAnchorOrigin = "Center";
    this._objectData.BarVerticalAnchorTarget = "Center";

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.MaxValue !== newObjectData.content.MaxValue)
      this._objectData.MaxValue = newObjectData.content.MaxValue;
    if (oldObjectData.content.InitialValue !== newObjectData.content.InitialValue)
      this._objectData.InitialValue = newObjectData.content.InitialValue;
    if (oldObjectData.content.PreviousInitialValue !== newObjectData.content.PreviousInitialValue)
      this._objectData.PreviousInitialValue = newObjectData.content.PreviousInitialValue;
    if (oldObjectData.content.UnitWidth !== newObjectData.content.UnitWidth)
      this._objectData.UnitWidth = newObjectData.content.UnitWidth;
    if (oldObjectData.content.ShowBackground !== newObjectData.content.ShowBackground)
      this._objectData.ShowBackground = newObjectData.content.ShowBackground;
    if (oldObjectData.content.BarLeftPadding !== newObjectData.content.BarLeftPadding)
      this._objectData.BarLeftPadding = newObjectData.content.BarLeftPadding;
    if (oldObjectData.content.BarRightPadding !== newObjectData.content.BarRightPadding)
      this._objectData.BarRightPadding = newObjectData.content.BarRightPadding;
    if (oldObjectData.content.BarVerticalAnchorOrigin !== newObjectData.content.BarVerticalAnchorOrigin)
      this._objectData.BarVerticalAnchorOrigin = newObjectData.content.BarVerticalAnchorOrigin;
    if (oldObjectData.content.BarVerticalAnchorTarget !== newObjectData.content.BarVerticalAnchorTarget)
      this._objectData.BarVerticalAnchorTarget = newObjectData.content.BarVerticalAnchorTarget;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getMaxValue() {
    return this._objectData.MaxValue !== undefined ? this._objectData.MaxValue : Number("3") || 0;
  }
  _setMaxValue(newValue) {
    this._objectData.MaxValue = newValue;
  }
  _getInitialValue() {
    return this._objectData.InitialValue !== undefined ? this._objectData.InitialValue : Number("3") || 0;
  }
  _setInitialValue(newValue) {
    this._objectData.InitialValue = newValue;
  }
  _getPreviousInitialValue() {
    return this._objectData.PreviousInitialValue !== undefined ? this._objectData.PreviousInitialValue : Number("") || 0;
  }
  _setPreviousInitialValue(newValue) {
    this._objectData.PreviousInitialValue = newValue;
  }
  _getUnitWidth() {
    return this._objectData.UnitWidth !== undefined ? this._objectData.UnitWidth : Number("24") || 0;
  }
  _setUnitWidth(newValue) {
    this._objectData.UnitWidth = newValue;
  }
  _getShowBackground() {
    return this._objectData.ShowBackground !== undefined ? this._objectData.ShowBackground : true;
  }
  _setShowBackground(newValue) {
    this._objectData.ShowBackground = newValue;
  }
  _toggleShowBackground() {
    this._setShowBackground(!this._getShowBackground());
  }
  _getBarLeftPadding() {
    return this._objectData.BarLeftPadding !== undefined ? this._objectData.BarLeftPadding : Number("0") || 0;
  }
  _setBarLeftPadding(newValue) {
    this._objectData.BarLeftPadding = newValue;
  }
  _getBarRightPadding() {
    return this._objectData.BarRightPadding !== undefined ? this._objectData.BarRightPadding : Number("0") || 0;
  }
  _setBarRightPadding(newValue) {
    this._objectData.BarRightPadding = newValue;
  }
  _getBarVerticalAnchorOrigin() {
    return this._objectData.BarVerticalAnchorOrigin !== undefined ? this._objectData.BarVerticalAnchorOrigin : "Center";
  }
  _setBarVerticalAnchorOrigin(newValue) {
    this._objectData.BarVerticalAnchorOrigin = newValue;
  }
  _getBarVerticalAnchorTarget() {
    return this._objectData.BarVerticalAnchorTarget !== undefined ? this._objectData.BarVerticalAnchorTarget : "Center";
  }
  _setBarVerticalAnchorTarget(newValue) {
    this._objectData.BarVerticalAnchorTarget = newValue;
  }
}

// Methods:
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDBackgroundObjects1Objects = Hashtable.newFrom({"Background": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDBarObjects1Objects = Hashtable.newFrom({"Bar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDFillBarObjects1Objects = Hashtable.newFrom({"FillBar": gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1});
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i]._setPreviousInitialValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i]._getInitialValue()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDBackgroundObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDBarObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95TiledUnitsBar_95_95TiledUnitsBar_46TiledUnitsBar_46prototype_46onCreatedContext_46GDFillBarObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1[i].setZOrder(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i]._getShowBackground()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i].SetMaxValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i]._getMaxValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i].SetValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1[i]._getInitialValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].CenterBar((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetMaxValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._getMaxValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue() != (gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._getPreviousInitialValue()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._setPreviousInitialValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue()));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetValue((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final = [];

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final = [];

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[0].getWidth()) != Math.max((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBRight()), (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[0].getAABBRight())) - Math.min((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBLeft()), (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[0].getAABBLeft())));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[0].getHeight()) != Math.max((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBBottom()), (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[0].getAABBBottom())) - Math.min((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBTop()), (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[0].getAABBTop())));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1);
gdjs.copyArray(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1_1final, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1);
gdjs.copyArray(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1 */
/* Reuse gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].returnVariable(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Width")).setNumber((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].returnVariable(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Height")).setNumber((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Width"))));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Height"))));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].CenterBar((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[i].setCenterPositionInScene((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1[0].getCenterXInScene()),(( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[i].setX(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[i].getX() + (0));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[i].setY(gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[i].getY() + (0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects1[i].setPosition((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[0].getX()),(( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1[0].getY()));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBar = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.CenterBarContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).SetValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1[i].setWidth((gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1[0]._getUnitWidth()));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar"))._getMaxValue()); }}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).SetMaxValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1[i].setWidth((( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1[0]._getMaxValue()) * (( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1[0]._getUnitWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1[i].CenterBar((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmpty = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsEmptyContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext = {};
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects2= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects1= [];
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects2= [];


gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ResourceBar")).IsFull((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[k] = gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFull = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBarObjectsList = [...runtimeScene.getObjects("Bar")];
var GDBarObjects = Hashtable.newFrom({"Bar": thisGDBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FillBar": GDFillBarObjects
, "Bar": GDBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "FillBar": thisGDFillBarObjectsList
, "Bar": thisGDBarObjectsList
, "Background": thisGDBackgroundObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBarObjects2.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.IsFullContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("TiledUnitsBar::TiledUnitsBar", gdjs.evtsExt__TiledUnitsBar__TiledUnitsBar.TiledUnitsBar);
