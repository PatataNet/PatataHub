
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator || {};

/**
 * Behavior generated from Player animator
 */
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator = class PlayerAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Form = "SpaceShip";
    this._behaviorData.StayOnScreen = behaviorData.StayOnScreen !== undefined ? behaviorData.StayOnScreen : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Form !== newBehaviorData.Form)
      this._behaviorData.Form = newBehaviorData.Form;
    if (oldBehaviorData.StayOnScreen !== newBehaviorData.StayOnScreen)
      this._behaviorData.StayOnScreen = newBehaviorData.StayOnScreen;

    return true;
  }

  // Properties:
  
  _getForm() {
    return this._behaviorData.Form !== undefined ? this._behaviorData.Form : "SpaceShip";
  }
  _setForm(newValue) {
    this._behaviorData.Form = newValue;
  }
  _getStayOnScreen() {
    return this._behaviorData.StayOnScreen !== undefined ? this._behaviorData.StayOnScreen : "";
  }
  _setStayOnScreen(newValue) {
    this._behaviorData.StayOnScreen = newValue;
  }
}

/**
 * Shared data generated from Player animator
 */
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.SharedData = class PlayerAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpaceShooterPlayer_PlayerAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpaceShooterPlayer_PlayerAnimatorSharedData = new gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._SpaceShooterPlayer_PlayerAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterPlayer__GoingUp.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("SpaceshipUp");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterPlayer__GoingDown.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("SpaceshipDown");
}
}}

}


{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpaceShooterPlayer__GoingDown.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpaceShooterPlayer__GoingUp.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("SpaceshipIdle");
}
}}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCurrentAnimationName("SpaceshipToMech") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("MechIdle");
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForm("Mech");
}
}}

}


{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("SpaceshipToMech")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForm() == "SpaceShip" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("MechIdle");
}
}}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterPlayer__GoingUp.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("MechUp");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterPlayer__GoingDown.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("MechDown");
}
}}

}


{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpaceShooterPlayer__GoingDown.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpaceShooterPlayer__GoingUp.func(runtimeScene, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95SpaceShooterPlayer_95_95PlayerAnimator_46PlayerAnimator_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("MechIdle");
}
}}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpaceShooterPlayer__ShouldFire.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("MechAttack");
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCurrentAnimationName("MechAttack") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginRight(70 - 35, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginTop(-(12), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginBottom(-(11), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("MechAttack")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginRight(70, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginTop(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginBottom(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].isCurrentAnimationName("MechToSpaceship") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName("SpaceshipIdle");
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForm("SpaceShip");
}
}}

}


{

/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("MechToSpaceship")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForm() == "Mech" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "StayOnScreen": this._getStayOnScreen()
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

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext = {};
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects2= [];


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForm() == "SpaceShip" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].setAnimationName("SpaceshipToMech");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForm() == "Mech" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].setAnimationName("MechToSpaceship");
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginRight(70, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginTop(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("StayOnScreen")).SetMarginBottom(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleForm = function(parentEventsFunctionContext) {

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
, "StayOnScreen": this._getStayOnScreen()
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

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.ToggleFormContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext = {};
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects2= [];


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForm()); }}}

}


};

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerForm = function(parentEventsFunctionContext) {

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
, "StayOnScreen": this._getStayOnScreen()
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

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.PlayerFormContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext = {};
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1= [];
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects2= [];


gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[i].isCurrentAnimationName("MechAttack") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[i].getAnimationFrame() > 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[k] = gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMech = function(parentEventsFunctionContext) {

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
, "StayOnScreen": this._getStayOnScreen()
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

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator.prototype.IsAtackingWithMechContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("SpaceShooterPlayer::PlayerAnimator", gdjs.evtsExt__SpaceShooterPlayer__PlayerAnimator.PlayerAnimator);
