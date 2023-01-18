gdjs.PongCode = {};
gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final = [];

gdjs.PongCode.GDLeftArrowRoundButtonObjects3_3final = [];

gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final = [];

gdjs.PongCode.GDRightArrowRoundButtonObjects3_3final = [];

gdjs.PongCode.GDPaddleObjects1= [];
gdjs.PongCode.GDPaddleObjects2= [];
gdjs.PongCode.GDPaddleObjects3= [];
gdjs.PongCode.GDPaddleObjects4= [];
gdjs.PongCode.GDCircleGuideObjects1= [];
gdjs.PongCode.GDCircleGuideObjects2= [];
gdjs.PongCode.GDCircleGuideObjects3= [];
gdjs.PongCode.GDCircleGuideObjects4= [];
gdjs.PongCode.GDBallObjects1= [];
gdjs.PongCode.GDBallObjects2= [];
gdjs.PongCode.GDBallObjects3= [];
gdjs.PongCode.GDBallObjects4= [];
gdjs.PongCode.GDControlHelpObjects1= [];
gdjs.PongCode.GDControlHelpObjects2= [];
gdjs.PongCode.GDControlHelpObjects3= [];
gdjs.PongCode.GDControlHelpObjects4= [];
gdjs.PongCode.GDBeginTextObjects1= [];
gdjs.PongCode.GDBeginTextObjects2= [];
gdjs.PongCode.GDBeginTextObjects3= [];
gdjs.PongCode.GDBeginTextObjects4= [];
gdjs.PongCode.GDScoreTextObjects1= [];
gdjs.PongCode.GDScoreTextObjects2= [];
gdjs.PongCode.GDScoreTextObjects3= [];
gdjs.PongCode.GDScoreTextObjects4= [];
gdjs.PongCode.GDHighScoreTextObjects1= [];
gdjs.PongCode.GDHighScoreTextObjects2= [];
gdjs.PongCode.GDHighScoreTextObjects3= [];
gdjs.PongCode.GDHighScoreTextObjects4= [];
gdjs.PongCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.PongCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.PongCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.PongCode.GDLeftArrowRoundButtonObjects4= [];
gdjs.PongCode.GDRightArrowRoundButtonObjects1= [];
gdjs.PongCode.GDRightArrowRoundButtonObjects2= [];
gdjs.PongCode.GDRightArrowRoundButtonObjects3= [];
gdjs.PongCode.GDRightArrowRoundButtonObjects4= [];

gdjs.PongCode.conditionTrue_0 = {val:false};
gdjs.PongCode.condition0IsTrue_0 = {val:false};
gdjs.PongCode.condition1IsTrue_0 = {val:false};
gdjs.PongCode.condition2IsTrue_0 = {val:false};
gdjs.PongCode.condition3IsTrue_0 = {val:false};
gdjs.PongCode.conditionTrue_1 = {val:false};
gdjs.PongCode.condition0IsTrue_1 = {val:false};
gdjs.PongCode.condition1IsTrue_1 = {val:false};
gdjs.PongCode.condition2IsTrue_1 = {val:false};
gdjs.PongCode.condition3IsTrue_1 = {val:false};
gdjs.PongCode.conditionTrue_2 = {val:false};
gdjs.PongCode.condition0IsTrue_2 = {val:false};
gdjs.PongCode.condition1IsTrue_2 = {val:false};
gdjs.PongCode.condition2IsTrue_2 = {val:false};
gdjs.PongCode.condition3IsTrue_2 = {val:false};
gdjs.PongCode.conditionTrue_3 = {val:false};
gdjs.PongCode.condition0IsTrue_3 = {val:false};
gdjs.PongCode.condition1IsTrue_3 = {val:false};
gdjs.PongCode.condition2IsTrue_3 = {val:false};
gdjs.PongCode.condition3IsTrue_3 = {val:false};


gdjs.PongCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.PongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.PongCode.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.PongCode.GDRightArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.PongCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDLeftArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.PongCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDRightArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PongCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PongCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.PongCode.GDCircleGuideObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreText"), gdjs.PongCode.GDHighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects1);
{for(var i = 0, len = gdjs.PongCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDBallObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PongCode.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDCircleGuideObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PongCode.GDPaddleObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDPaddleObjects1[i].returnVariable(gdjs.PongCode.GDPaddleObjects1[i].getVariables().get("PaddleAngle")).setNumber(90);
}
}{for(var i = 0, len = gdjs.PongCode.GDCircleGuideObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDCircleGuideObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.PongCode.GDHighScoreTextObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDHighScoreTextObjects1[i].setString("High Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.PongCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBeginTextObjects2Objects = Hashtable.newFrom({"BeginText": gdjs.PongCode.GDBeginTextObjects2});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDLeftArrowRoundButtonObjects4Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.PongCode.GDLeftArrowRoundButtonObjects4});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDRightArrowRoundButtonObjects4Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.PongCode.GDRightArrowRoundButtonObjects4});
gdjs.PongCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BeginText"), gdjs.PongCode.GDBeginTextObjects2);
gdjs.PongCode.GDLeftArrowRoundButtonObjects2.length = 0;

gdjs.PongCode.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBeginTextObjects2Objects) > 0;
}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition1IsTrue_0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.PongCode.condition0IsTrue_1.val = false;
gdjs.PongCode.condition1IsTrue_1.val = false;
gdjs.PongCode.condition2IsTrue_1.val = false;
{
gdjs.PongCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.PongCode.condition0IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
}
}
{
gdjs.PongCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.PongCode.condition1IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
}
}
{
gdjs.PongCode.GDLeftArrowRoundButtonObjects3.length = 0;

gdjs.PongCode.GDRightArrowRoundButtonObjects3.length = 0;

{gdjs.PongCode.conditionTrue_2 = gdjs.PongCode.condition2IsTrue_1;
gdjs.PongCode.condition0IsTrue_2.val = false;
gdjs.PongCode.condition1IsTrue_2.val = false;
gdjs.PongCode.condition2IsTrue_2.val = false;
{
gdjs.PongCode.condition0IsTrue_2.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.PongCode.condition0IsTrue_2.val ) {
{
gdjs.PongCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PongCode.condition1IsTrue_2.val ) {
{
{gdjs.PongCode.conditionTrue_3 = gdjs.PongCode.condition2IsTrue_2;
gdjs.PongCode.GDLeftArrowRoundButtonObjects3_3final.length = 0;gdjs.PongCode.GDRightArrowRoundButtonObjects3_3final.length = 0;gdjs.PongCode.condition0IsTrue_3.val = false;
gdjs.PongCode.condition1IsTrue_3.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.PongCode.GDLeftArrowRoundButtonObjects4);
gdjs.PongCode.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDLeftArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.PongCode.condition0IsTrue_3.val ) {
    gdjs.PongCode.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDLeftArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDLeftArrowRoundButtonObjects3_3final.indexOf(gdjs.PongCode.GDLeftArrowRoundButtonObjects4[j]) === -1 )
            gdjs.PongCode.GDLeftArrowRoundButtonObjects3_3final.push(gdjs.PongCode.GDLeftArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.PongCode.GDRightArrowRoundButtonObjects4);
gdjs.PongCode.condition1IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDRightArrowRoundButtonObjects4Objects, runtimeScene, true, false);
if( gdjs.PongCode.condition1IsTrue_3.val ) {
    gdjs.PongCode.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDRightArrowRoundButtonObjects4.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDRightArrowRoundButtonObjects3_3final.indexOf(gdjs.PongCode.GDRightArrowRoundButtonObjects4[j]) === -1 )
            gdjs.PongCode.GDRightArrowRoundButtonObjects3_3final.push(gdjs.PongCode.GDRightArrowRoundButtonObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PongCode.GDLeftArrowRoundButtonObjects3_3final, gdjs.PongCode.GDLeftArrowRoundButtonObjects3);
gdjs.copyArray(gdjs.PongCode.GDRightArrowRoundButtonObjects3_3final, gdjs.PongCode.GDRightArrowRoundButtonObjects3);
}
}
}}
}
gdjs.PongCode.conditionTrue_2.val = true && gdjs.PongCode.condition0IsTrue_2.val && gdjs.PongCode.condition1IsTrue_2.val && gdjs.PongCode.condition2IsTrue_2.val;
}
if( gdjs.PongCode.condition2IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.PongCode.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.PongCode.GDLeftArrowRoundButtonObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.PongCode.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.PongCode.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.push(gdjs.PongCode.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final, gdjs.PongCode.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final, gdjs.PongCode.GDRightArrowRoundButtonObjects2);
}
}
}}
if (gdjs.PongCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PongCode.GDBallObjects2);
/* Reuse gdjs.PongCode.GDBeginTextObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.PongCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDBallObjects2[i].addForceTowardObject((gdjs.PongCode.GDPaddleObjects2.length !== 0 ? gdjs.PongCode.GDPaddleObjects2[0] : null), 200, 1);
}
}{for(var i = 0, len = gdjs.PongCode.GDBeginTextObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDBeginTextObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDLeftArrowRoundButtonObjects3Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.PongCode.GDLeftArrowRoundButtonObjects3});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDRightArrowRoundButtonObjects3Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.PongCode.GDRightArrowRoundButtonObjects3});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PongCode.GDBallObjects1});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.PongCode.GDPaddleObjects1});
gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDPaddleObjects1Objects = Hashtable.newFrom({"Paddle": gdjs.PongCode.GDPaddleObjects1});
gdjs.PongCode.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CircleGuide"), gdjs.PongCode.GDCircleGuideObjects2);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.PongCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDPaddleObjects2[i].putAroundObject((gdjs.PongCode.GDCircleGuideObjects2.length !== 0 ? gdjs.PongCode.GDCircleGuideObjects2[0] : null), (( gdjs.PongCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDCircleGuideObjects2[0].getWidth()) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.PongCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle"))));
}
}{for(var i = 0, len = gdjs.PongCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDPaddleObjects2[i].setAngle((gdjs.PongCode.GDPaddleObjects2[i].getAngleToPosition((( gdjs.PongCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDCircleGuideObjects2[0].getCenterXInScene()), (( gdjs.PongCode.GDCircleGuideObjects2.length === 0 ) ? 0 :gdjs.PongCode.GDCircleGuideObjects2[0].getCenterYInScene()))) + 90);
}
}}

}


{



}


{

gdjs.PongCode.GDLeftArrowRoundButtonObjects2.length = 0;


gdjs.PongCode.condition0IsTrue_0.val = false;
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition0IsTrue_0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.length = 0;gdjs.PongCode.condition0IsTrue_1.val = false;
gdjs.PongCode.condition1IsTrue_1.val = false;
{
gdjs.PongCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.PongCode.condition0IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.PongCode.GDLeftArrowRoundButtonObjects3);
{gdjs.PongCode.conditionTrue_2 = gdjs.PongCode.condition1IsTrue_1;
gdjs.PongCode.condition0IsTrue_2.val = false;
gdjs.PongCode.condition1IsTrue_2.val = false;
{
gdjs.PongCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDLeftArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.PongCode.condition0IsTrue_2.val ) {
{
gdjs.PongCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.PongCode.conditionTrue_2.val = true && gdjs.PongCode.condition0IsTrue_2.val && gdjs.PongCode.condition1IsTrue_2.val;
}
if( gdjs.PongCode.condition1IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDLeftArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.indexOf(gdjs.PongCode.GDLeftArrowRoundButtonObjects3[j]) === -1 )
            gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final.push(gdjs.PongCode.GDLeftArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PongCode.GDLeftArrowRoundButtonObjects2_1final, gdjs.PongCode.GDLeftArrowRoundButtonObjects2);
}
}
}if (gdjs.PongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.PongCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDPaddleObjects2[i].returnVariable(gdjs.PongCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).add(2);
}
}}

}


{

gdjs.PongCode.GDRightArrowRoundButtonObjects2.length = 0;


gdjs.PongCode.condition0IsTrue_0.val = false;
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition0IsTrue_0;
gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.length = 0;gdjs.PongCode.condition0IsTrue_1.val = false;
gdjs.PongCode.condition1IsTrue_1.val = false;
{
gdjs.PongCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.PongCode.condition0IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.PongCode.GDRightArrowRoundButtonObjects3);
{gdjs.PongCode.conditionTrue_2 = gdjs.PongCode.condition1IsTrue_1;
gdjs.PongCode.condition0IsTrue_2.val = false;
gdjs.PongCode.condition1IsTrue_2.val = false;
{
gdjs.PongCode.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDRightArrowRoundButtonObjects3Objects, runtimeScene, true, false);
}if ( gdjs.PongCode.condition0IsTrue_2.val ) {
{
gdjs.PongCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.PongCode.conditionTrue_2.val = true && gdjs.PongCode.condition0IsTrue_2.val && gdjs.PongCode.condition1IsTrue_2.val;
}
if( gdjs.PongCode.condition1IsTrue_1.val ) {
    gdjs.PongCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PongCode.GDRightArrowRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.indexOf(gdjs.PongCode.GDRightArrowRoundButtonObjects3[j]) === -1 )
            gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final.push(gdjs.PongCode.GDRightArrowRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PongCode.GDRightArrowRoundButtonObjects2_1final, gdjs.PongCode.GDRightArrowRoundButtonObjects2);
}
}
}if (gdjs.PongCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects2);
{for(var i = 0, len = gdjs.PongCode.GDPaddleObjects2.length ;i < len;++i) {
    gdjs.PongCode.GDPaddleObjects2[i].returnVariable(gdjs.PongCode.GDPaddleObjects2[i].getVariables().get("PaddleAngle")).sub(2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PongCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Paddle"), gdjs.PongCode.GDPaddleObjects1);

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBallObjects1Objects, gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDPaddleObjects1Objects, false, runtimeScene, false);
}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition1IsTrue_0;
gdjs.PongCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8320500);
}
}}
if (gdjs.PongCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PongCode.GDBallObjects1 */
/* Reuse gdjs.PongCode.GDPaddleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.PongCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.PongCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDPaddleObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bounce.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.PongCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.PongCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};gdjs.PongCode.eventsList4 = function(runtimeScene) {

{


gdjs.PongCode.eventsList2(runtimeScene);
}


{


gdjs.PongCode.eventsList3(runtimeScene);
}


};gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PongCode.GDBallObjects1});
gdjs.PongCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.PongCode.condition0IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
}if (gdjs.PongCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


};gdjs.PongCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PongCode.GDBallObjects1);

gdjs.PongCode.condition0IsTrue_0.val = false;
gdjs.PongCode.condition1IsTrue_0.val = false;
{
gdjs.PongCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.PongCode.mapOfGDgdjs_46PongCode_46GDBallObjects1Objects) <= 0;
}if ( gdjs.PongCode.condition0IsTrue_0.val ) {
{
{gdjs.PongCode.conditionTrue_1 = gdjs.PongCode.condition1IsTrue_0;
gdjs.PongCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8322300);
}
}}
if (gdjs.PongCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "lose.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}
{ //Subevents
gdjs.PongCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.PongCode.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.PongCode.eventsList1(runtimeScene);
}


{


gdjs.PongCode.eventsList4(runtimeScene);
}


{


gdjs.PongCode.eventsList6(runtimeScene);
}


};

gdjs.PongCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PongCode.GDPaddleObjects1.length = 0;
gdjs.PongCode.GDPaddleObjects2.length = 0;
gdjs.PongCode.GDPaddleObjects3.length = 0;
gdjs.PongCode.GDPaddleObjects4.length = 0;
gdjs.PongCode.GDCircleGuideObjects1.length = 0;
gdjs.PongCode.GDCircleGuideObjects2.length = 0;
gdjs.PongCode.GDCircleGuideObjects3.length = 0;
gdjs.PongCode.GDCircleGuideObjects4.length = 0;
gdjs.PongCode.GDBallObjects1.length = 0;
gdjs.PongCode.GDBallObjects2.length = 0;
gdjs.PongCode.GDBallObjects3.length = 0;
gdjs.PongCode.GDBallObjects4.length = 0;
gdjs.PongCode.GDControlHelpObjects1.length = 0;
gdjs.PongCode.GDControlHelpObjects2.length = 0;
gdjs.PongCode.GDControlHelpObjects3.length = 0;
gdjs.PongCode.GDControlHelpObjects4.length = 0;
gdjs.PongCode.GDBeginTextObjects1.length = 0;
gdjs.PongCode.GDBeginTextObjects2.length = 0;
gdjs.PongCode.GDBeginTextObjects3.length = 0;
gdjs.PongCode.GDBeginTextObjects4.length = 0;
gdjs.PongCode.GDScoreTextObjects1.length = 0;
gdjs.PongCode.GDScoreTextObjects2.length = 0;
gdjs.PongCode.GDScoreTextObjects3.length = 0;
gdjs.PongCode.GDScoreTextObjects4.length = 0;
gdjs.PongCode.GDHighScoreTextObjects1.length = 0;
gdjs.PongCode.GDHighScoreTextObjects2.length = 0;
gdjs.PongCode.GDHighScoreTextObjects3.length = 0;
gdjs.PongCode.GDHighScoreTextObjects4.length = 0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.PongCode.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.PongCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.PongCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.PongCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.PongCode.GDRightArrowRoundButtonObjects4.length = 0;

gdjs.PongCode.eventsList7(runtimeScene);

return;

}

gdjs['PongCode'] = gdjs.PongCode;
