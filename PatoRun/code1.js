gdjs.Level_321Code = {};
gdjs.Level_321Code.GDDuckObjects3_1final = [];

gdjs.Level_321Code.GDDuckObjects1= [];
gdjs.Level_321Code.GDDuckObjects2= [];
gdjs.Level_321Code.GDDuckObjects3= [];
gdjs.Level_321Code.GDDuckObjects4= [];
gdjs.Level_321Code.GDBlockObjects1= [];
gdjs.Level_321Code.GDBlockObjects2= [];
gdjs.Level_321Code.GDBlockObjects3= [];
gdjs.Level_321Code.GDBlockObjects4= [];
gdjs.Level_321Code.GDKeyObjects1= [];
gdjs.Level_321Code.GDKeyObjects2= [];
gdjs.Level_321Code.GDKeyObjects3= [];
gdjs.Level_321Code.GDKeyObjects4= [];
gdjs.Level_321Code.GDDoorObjects1= [];
gdjs.Level_321Code.GDDoorObjects2= [];
gdjs.Level_321Code.GDDoorObjects3= [];
gdjs.Level_321Code.GDDoorObjects4= [];
gdjs.Level_321Code.GDSpikeObjects1= [];
gdjs.Level_321Code.GDSpikeObjects2= [];
gdjs.Level_321Code.GDSpikeObjects3= [];
gdjs.Level_321Code.GDSpikeObjects4= [];
gdjs.Level_321Code.GDDuckArtworkObjects1= [];
gdjs.Level_321Code.GDDuckArtworkObjects2= [];
gdjs.Level_321Code.GDDuckArtworkObjects3= [];
gdjs.Level_321Code.GDDuckArtworkObjects4= [];
gdjs.Level_321Code.GDLevelObjects1= [];
gdjs.Level_321Code.GDLevelObjects2= [];
gdjs.Level_321Code.GDLevelObjects3= [];
gdjs.Level_321Code.GDLevelObjects4= [];
gdjs.Level_321Code.GDSparkleParticleObjects1= [];
gdjs.Level_321Code.GDSparkleParticleObjects2= [];
gdjs.Level_321Code.GDSparkleParticleObjects3= [];
gdjs.Level_321Code.GDSparkleParticleObjects4= [];
gdjs.Level_321Code.GDCloudsObjects1= [];
gdjs.Level_321Code.GDCloudsObjects2= [];
gdjs.Level_321Code.GDCloudsObjects3= [];
gdjs.Level_321Code.GDCloudsObjects4= [];
gdjs.Level_321Code.GDDownButtonObjects1= [];
gdjs.Level_321Code.GDDownButtonObjects2= [];
gdjs.Level_321Code.GDDownButtonObjects3= [];
gdjs.Level_321Code.GDDownButtonObjects4= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};
gdjs.Level_321Code.condition3IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition2IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11714980);
}
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].setAnimationName("Walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects3[k] = gdjs.Level_321Code.GDDuckObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects3.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11716244);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].setPosition((( gdjs.Level_321Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects3[0].getPointX("")),(( gdjs.Level_321Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects3[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects3[i].setPosition((( gdjs.Level_321Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects3[0].getPointX("")) - 32,(( gdjs.Level_321Code.GDDuckObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects3[0].getPointY("")) - 150);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
gdjs.Level_321Code.condition2IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level_321Code.condition2IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11727716);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDuckObjects3 */
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getVariables().get("JumpsRemaining").sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].setHeight(55);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].setWidth(70);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectWidthTween("Squash Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].getBehavior("Tween").addObjectHeightTween("Stretch Jump", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{

gdjs.Level_321Code.GDDuckObjects3.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDDuckObjects3_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects4);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        gdjs.Level_321Code.condition0IsTrue_1.val = true;
        gdjs.Level_321Code.GDDuckObjects4[k] = gdjs.Level_321Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects4.length = k;if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDDuckObjects4.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDDuckObjects3_1final.indexOf(gdjs.Level_321Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_321Code.GDDuckObjects3_1final.push(gdjs.Level_321Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects4);
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects4.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321Code.condition1IsTrue_1.val = true;
        gdjs.Level_321Code.GDDuckObjects4[k] = gdjs.Level_321Code.GDDuckObjects4[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects4.length = k;if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDDuckObjects4.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDDuckObjects3_1final.indexOf(gdjs.Level_321Code.GDDuckObjects4[j]) === -1 )
            gdjs.Level_321Code.GDDuckObjects3_1final.push(gdjs.Level_321Code.GDDuckObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDDuckObjects3_1final, gdjs.Level_321Code.GDDuckObjects3);
}
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("JumpsRemaining")) > 0;
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects2[k] = gdjs.Level_321Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("JumpsRemaining")) != 1;
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("JumpsRemaining").setNumber(2);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_321Code.GDSpikeObjects2});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_321Code.GDSpikeObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Key").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Quack.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects2[k] = gdjs.Level_321Code.GDDuckObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11735028);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].setHeight(50);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectHeightTween("Stretch", 64, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects2[i].getBehavior("Tween").addObjectWidthTween("Squash", 64, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDuckObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDuckObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDDuckObjects1[k] = gdjs.Level_321Code.GDDuckObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDuckObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11737276);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DuckArtwork"), gdjs.Level_321Code.GDDuckArtworkObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectHeightTween("Stretch Air", 75, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDuckArtworkObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDuckArtworkObjects1[i].getBehavior("Tween").addObjectWidthTween("Squash Air", 50, "linear", 80, false);
}
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Level_321Code.GDKeyObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_321Code.GDSparkleParticleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects2});
gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11745340);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects1Objects = Hashtable.newFrom({"Duck": gdjs.Level_321Code.GDDuckObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_321Code.GDDoorObjects1});
gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Level_321Code.GDKeyObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDKeyObjects2 */
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getVariables().get("Key").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSparkleParticleObjects2Objects, (( gdjs.Level_321Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjects2[0].getPointX("Center")), (( gdjs.Level_321Code.GDKeyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDKeyObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDKeyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Key")) > 0;
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDoorObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getVariables().get("Key").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDDoorObjects2[i].isCurrentAnimationName("Unlocked") ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDDoorObjects2[k] = gdjs.Level_321Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDDoorObjects2.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_321Code.GDDuckObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointX("")) - 32,(( gdjs.Level_321Code.GDDuckObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDDuckObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Duck"), gdjs.Level_321Code.GDDuckObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDuckObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDoorObjects1Objects, true, runtimeScene, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11746700);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_321Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList7(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDDuckObjects1.length = 0;
gdjs.Level_321Code.GDDuckObjects2.length = 0;
gdjs.Level_321Code.GDDuckObjects3.length = 0;
gdjs.Level_321Code.GDDuckObjects4.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects3.length = 0;
gdjs.Level_321Code.GDBlockObjects4.length = 0;
gdjs.Level_321Code.GDKeyObjects1.length = 0;
gdjs.Level_321Code.GDKeyObjects2.length = 0;
gdjs.Level_321Code.GDKeyObjects3.length = 0;
gdjs.Level_321Code.GDKeyObjects4.length = 0;
gdjs.Level_321Code.GDDoorObjects1.length = 0;
gdjs.Level_321Code.GDDoorObjects2.length = 0;
gdjs.Level_321Code.GDDoorObjects3.length = 0;
gdjs.Level_321Code.GDDoorObjects4.length = 0;
gdjs.Level_321Code.GDSpikeObjects1.length = 0;
gdjs.Level_321Code.GDSpikeObjects2.length = 0;
gdjs.Level_321Code.GDSpikeObjects3.length = 0;
gdjs.Level_321Code.GDSpikeObjects4.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects1.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects2.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects3.length = 0;
gdjs.Level_321Code.GDDuckArtworkObjects4.length = 0;
gdjs.Level_321Code.GDLevelObjects1.length = 0;
gdjs.Level_321Code.GDLevelObjects2.length = 0;
gdjs.Level_321Code.GDLevelObjects3.length = 0;
gdjs.Level_321Code.GDLevelObjects4.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_321Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_321Code.GDCloudsObjects1.length = 0;
gdjs.Level_321Code.GDCloudsObjects2.length = 0;
gdjs.Level_321Code.GDCloudsObjects3.length = 0;
gdjs.Level_321Code.GDCloudsObjects4.length = 0;
gdjs.Level_321Code.GDDownButtonObjects1.length = 0;
gdjs.Level_321Code.GDDownButtonObjects2.length = 0;
gdjs.Level_321Code.GDDownButtonObjects3.length = 0;
gdjs.Level_321Code.GDDownButtonObjects4.length = 0;

gdjs.Level_321Code.eventsList8(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
