
gdjs.evtsExt__PlayingCard__PlayingCard = gdjs.evtsExt__PlayingCard__PlayingCard || {};

/**
 * Behavior generated from Playing Card
 */
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard = class PlayingCard extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.CardId = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.CardId !== newBehaviorData.CardId)
      this._behaviorData.CardId = newBehaviorData.CardId;

    return true;
  }

  // Properties:
  
  _getCardId() {
    return this._behaviorData.CardId !== undefined ? this._behaviorData.CardId : Number("") || 0;
  }
  _setCardId(newValue) {
    this._behaviorData.CardId = newValue;
  }
}

/**
 * Shared data generated from Playing Card
 */
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.SharedData = class PlayingCardSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PlayingCard_PlayingCardSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PlayingCard_PlayingCardSharedData = new gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.SharedData(
      initialData
    );
  }
  return instanceContainer._PlayingCard_PlayingCardSharedData;
}

// Methods:
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCardId((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CardId")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardId = function(CardId, parentEventsFunctionContext) {

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
if (argName === "CardId") return CardId;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SetCardIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition2IsTrue_2 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_3 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_3 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition2IsTrue_3 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_1 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2);
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_2 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_1;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2.val = false;
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CardColor") : "") == "Red");
}
}if ( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val ) {
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3.val = ((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()) <= 25);
}
}}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_2.val = true && gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val && gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2);
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_2 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_1;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2.val = false;
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CardColor") : "") == "Black");
}
}if ( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val ) {
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_3.val = ((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()) > 25);
}
}}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_2.val = true && gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_2.val && gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1_1final, gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColor = function(CardColor, parentEventsFunctionContext) {

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
if (argName === "CardColor") return CardColor;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.floor((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()) / 13); }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.SuiteIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects1);

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.conditionTrue_1 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition0IsTrue_0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CardSuiteId")) || 0 : 0) == Math.floor((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()) / 13));
}
}if (gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteId = function(CardSuiteId, parentEventsFunctionContext) {

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
if (argName === "CardSuiteId") return CardSuiteId;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckSuiteIdContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()); }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.Id = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.mod((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()), 13); }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.Value = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext = {};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects2= [];

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects1);

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.conditionTrue_1 = gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition0IsTrue_0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CardValue")) || 0 : 0) == gdjs.evtTools.common.mod((( gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCardId()), 13));
}
}if (gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValue = function(CardValue, parentEventsFunctionContext) {

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
if (argName === "CardValue") return CardValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.CheckValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PlayingCard::PlayingCard", gdjs.evtsExt__PlayingCard__PlayingCard.PlayingCard);
