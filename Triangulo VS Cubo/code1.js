gdjs.Level0Code = {};
gdjs.Level0Code.GDCloseRoundButtonObjects1_1final = [];

gdjs.Level0Code.GDFireRoundButtonObjects2_1final = [];

gdjs.Level0Code.GDRestartButtonObjects1_1final = [];

gdjs.Level0Code.GDRestartButtonObjects2_3final = [];

gdjs.Level0Code.GDTargetRoundButtonObjects1_1final = [];

gdjs.Level0Code.GDWonOrLostObjects1_1final = [];

gdjs.Level0Code.GDWonOrLostObjects2_3final = [];

gdjs.Level0Code.GDPlayerObjects1= [];
gdjs.Level0Code.GDPlayerObjects2= [];
gdjs.Level0Code.GDPlayerObjects3= [];
gdjs.Level0Code.GDPlayerObjects4= [];
gdjs.Level0Code.GDPlayerObjects5= [];
gdjs.Level0Code.GDEnemyObjects1= [];
gdjs.Level0Code.GDEnemyObjects2= [];
gdjs.Level0Code.GDEnemyObjects3= [];
gdjs.Level0Code.GDEnemyObjects4= [];
gdjs.Level0Code.GDEnemyObjects5= [];
gdjs.Level0Code.GDZombieObjects1= [];
gdjs.Level0Code.GDZombieObjects2= [];
gdjs.Level0Code.GDZombieObjects3= [];
gdjs.Level0Code.GDZombieObjects4= [];
gdjs.Level0Code.GDZombieObjects5= [];
gdjs.Level0Code.GDGreenFloorObjects1= [];
gdjs.Level0Code.GDGreenFloorObjects2= [];
gdjs.Level0Code.GDGreenFloorObjects3= [];
gdjs.Level0Code.GDGreenFloorObjects4= [];
gdjs.Level0Code.GDGreenFloorObjects5= [];
gdjs.Level0Code.GDFireBallObjects1= [];
gdjs.Level0Code.GDFireBallObjects2= [];
gdjs.Level0Code.GDFireBallObjects3= [];
gdjs.Level0Code.GDFireBallObjects4= [];
gdjs.Level0Code.GDFireBallObjects5= [];
gdjs.Level0Code.GDStatsObjects1= [];
gdjs.Level0Code.GDStatsObjects2= [];
gdjs.Level0Code.GDStatsObjects3= [];
gdjs.Level0Code.GDStatsObjects4= [];
gdjs.Level0Code.GDStatsObjects5= [];
gdjs.Level0Code.GDWonOrLostObjects1= [];
gdjs.Level0Code.GDWonOrLostObjects2= [];
gdjs.Level0Code.GDWonOrLostObjects3= [];
gdjs.Level0Code.GDWonOrLostObjects4= [];
gdjs.Level0Code.GDWonOrLostObjects5= [];
gdjs.Level0Code.GDFireRoundButtonObjects1= [];
gdjs.Level0Code.GDFireRoundButtonObjects2= [];
gdjs.Level0Code.GDFireRoundButtonObjects3= [];
gdjs.Level0Code.GDFireRoundButtonObjects4= [];
gdjs.Level0Code.GDFireRoundButtonObjects5= [];
gdjs.Level0Code.GDTargetRoundButtonObjects1= [];
gdjs.Level0Code.GDTargetRoundButtonObjects2= [];
gdjs.Level0Code.GDTargetRoundButtonObjects3= [];
gdjs.Level0Code.GDTargetRoundButtonObjects4= [];
gdjs.Level0Code.GDTargetRoundButtonObjects5= [];
gdjs.Level0Code.GDCloseRoundButtonObjects1= [];
gdjs.Level0Code.GDCloseRoundButtonObjects2= [];
gdjs.Level0Code.GDCloseRoundButtonObjects3= [];
gdjs.Level0Code.GDCloseRoundButtonObjects4= [];
gdjs.Level0Code.GDCloseRoundButtonObjects5= [];
gdjs.Level0Code.GDRestartButtonObjects1= [];
gdjs.Level0Code.GDRestartButtonObjects2= [];
gdjs.Level0Code.GDRestartButtonObjects3= [];
gdjs.Level0Code.GDRestartButtonObjects4= [];
gdjs.Level0Code.GDRestartButtonObjects5= [];
gdjs.Level0Code.GDGraveyardBackgroundObjects1= [];
gdjs.Level0Code.GDGraveyardBackgroundObjects2= [];
gdjs.Level0Code.GDGraveyardBackgroundObjects3= [];
gdjs.Level0Code.GDGraveyardBackgroundObjects4= [];
gdjs.Level0Code.GDGraveyardBackgroundObjects5= [];
gdjs.Level0Code.GDHealthObjects1= [];
gdjs.Level0Code.GDHealthObjects2= [];
gdjs.Level0Code.GDHealthObjects3= [];
gdjs.Level0Code.GDHealthObjects4= [];
gdjs.Level0Code.GDHealthObjects5= [];
gdjs.Level0Code.GDGamerOverObjects1= [];
gdjs.Level0Code.GDGamerOverObjects2= [];
gdjs.Level0Code.GDGamerOverObjects3= [];
gdjs.Level0Code.GDGamerOverObjects4= [];
gdjs.Level0Code.GDGamerOverObjects5= [];

gdjs.Level0Code.conditionTrue_0 = {val:false};
gdjs.Level0Code.condition0IsTrue_0 = {val:false};
gdjs.Level0Code.condition1IsTrue_0 = {val:false};
gdjs.Level0Code.condition2IsTrue_0 = {val:false};
gdjs.Level0Code.conditionTrue_1 = {val:false};
gdjs.Level0Code.condition0IsTrue_1 = {val:false};
gdjs.Level0Code.condition1IsTrue_1 = {val:false};
gdjs.Level0Code.condition2IsTrue_1 = {val:false};
gdjs.Level0Code.conditionTrue_2 = {val:false};
gdjs.Level0Code.condition0IsTrue_2 = {val:false};
gdjs.Level0Code.condition1IsTrue_2 = {val:false};
gdjs.Level0Code.condition2IsTrue_2 = {val:false};
gdjs.Level0Code.conditionTrue_3 = {val:false};
gdjs.Level0Code.condition0IsTrue_3 = {val:false};
gdjs.Level0Code.condition1IsTrue_3 = {val:false};
gdjs.Level0Code.condition2IsTrue_3 = {val:false};


gdjs.Level0Code.eventsList0 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 2));
}}

}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("PlayerChoice");
}}

}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("EnemyChoice");
}}

}


{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 800, 600, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level0Code.GDHealthObjects2);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDHealthObjects2.length;i<l;++i) {
    if ( gdjs.Level0Code.GDHealthObjects2[i].getVariableString(gdjs.Level0Code.GDHealthObjects2[i].getVariables().getFromIndex(0)) == "Enemy" ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDHealthObjects2[k] = gdjs.Level0Code.GDHealthObjects2[i];
        ++k;
    }
}
gdjs.Level0Code.GDHealthObjects2.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level0Code.GDEnemyObjects1, gdjs.Level0Code.GDEnemyObjects2);

/* Reuse gdjs.Level0Code.GDHealthObjects2 */
{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects2[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level0Code.GDEnemyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level0Code.GDEnemyObjects2[0].getVariables()).getFromIndex(0))) * 5);
}
}{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects2[i].setCenterXInScene((( gdjs.Level0Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects2[0].getCenterXInScene()) + 4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level0Code.GDHealthObjects1);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDHealthObjects1.length;i<l;++i) {
    if ( gdjs.Level0Code.GDHealthObjects1[i].getVariableString(gdjs.Level0Code.GDHealthObjects1[i].getVariables().getFromIndex(0)) == "Player" ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDHealthObjects1[k] = gdjs.Level0Code.GDHealthObjects1[i];
        ++k;
    }
}
gdjs.Level0Code.GDHealthObjects1.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDHealthObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level0Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level0Code.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) * 5);
}
}{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects1[i].setCenterXInScene((( gdjs.Level0Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects1[0].getCenterXInScene()));
}
}}

}


};gdjs.Level0Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GamerOver"), gdjs.Level0Code.GDGamerOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("WonOrLost"), gdjs.Level0Code.GDWonOrLostObjects1);
{for(var i = 0, len = gdjs.Level0Code.GDWonOrLostObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDWonOrLostObjects1[i].setWrapping(false);
}
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level0Code.GDGamerOverObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDGamerOverObjects1[i].setOpacity(196);
}
}
{ //Subevents
gdjs.Level0Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDCloseRoundButtonObjects2Objects = Hashtable.newFrom({"CloseRoundButton": gdjs.Level0Code.GDCloseRoundButtonObjects2});
gdjs.Level0Code.eventsList2 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level0Code.GDStatsObjects2);
{for(var i = 0, len = gdjs.Level0Code.GDStatsObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDStatsObjects2[i].setString("State: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.string.newLine() + "Attack: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.Level0Code.GDCloseRoundButtonObjects1.length = 0;


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.GDCloseRoundButtonObjects1_1final.length = 0;gdjs.Level0Code.condition0IsTrue_1.val = false;
gdjs.Level0Code.condition1IsTrue_1.val = false;
{
gdjs.Level0Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if( gdjs.Level0Code.condition0IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("CloseRoundButton"), gdjs.Level0Code.GDCloseRoundButtonObjects2);
{gdjs.Level0Code.conditionTrue_2 = gdjs.Level0Code.condition1IsTrue_1;
gdjs.Level0Code.condition0IsTrue_2.val = false;
gdjs.Level0Code.condition1IsTrue_2.val = false;
{
gdjs.Level0Code.condition0IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDCloseRoundButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level0Code.condition0IsTrue_2.val ) {
{
gdjs.Level0Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Level0Code.conditionTrue_2.val = true && gdjs.Level0Code.condition0IsTrue_2.val && gdjs.Level0Code.condition1IsTrue_2.val;
}
if( gdjs.Level0Code.condition1IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDCloseRoundButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDCloseRoundButtonObjects1_1final.indexOf(gdjs.Level0Code.GDCloseRoundButtonObjects2[j]) === -1 )
            gdjs.Level0Code.GDCloseRoundButtonObjects1_1final.push(gdjs.Level0Code.GDCloseRoundButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level0Code.GDCloseRoundButtonObjects1_1final, gdjs.Level0Code.GDCloseRoundButtonObjects1);
}
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireRoundButtonObjects3Objects = Hashtable.newFrom({"FireRoundButton": gdjs.Level0Code.GDFireRoundButtonObjects3});
gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDTargetRoundButtonObjects2Objects = Hashtable.newFrom({"TargetRoundButton": gdjs.Level0Code.GDTargetRoundButtonObjects2});
gdjs.Level0Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9514396);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level0Code.GDFireRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Level0Code.GDTargetRoundButtonObjects2);
{runtimeScene.getVariables().getFromIndex(1).setString("None");
}{for(var i = 0, len = gdjs.Level0Code.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireRoundButtonObjects2[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Level0Code.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDTargetRoundButtonObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.Level0Code.GDFireRoundButtonObjects2.length = 0;


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.GDFireRoundButtonObjects2_1final.length = 0;gdjs.Level0Code.condition0IsTrue_1.val = false;
gdjs.Level0Code.condition1IsTrue_1.val = false;
{
gdjs.Level0Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if( gdjs.Level0Code.condition0IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level0Code.GDFireRoundButtonObjects3);
{gdjs.Level0Code.conditionTrue_2 = gdjs.Level0Code.condition1IsTrue_1;
gdjs.Level0Code.condition0IsTrue_2.val = false;
gdjs.Level0Code.condition1IsTrue_2.val = false;
{
gdjs.Level0Code.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level0Code.condition0IsTrue_2.val ) {
{
gdjs.Level0Code.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireRoundButtonObjects3Objects, runtimeScene, true, false);
}}
gdjs.Level0Code.conditionTrue_2.val = true && gdjs.Level0Code.condition0IsTrue_2.val && gdjs.Level0Code.condition1IsTrue_2.val;
}
if( gdjs.Level0Code.condition1IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDFireRoundButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDFireRoundButtonObjects2_1final.indexOf(gdjs.Level0Code.GDFireRoundButtonObjects3[j]) === -1 )
            gdjs.Level0Code.GDFireRoundButtonObjects2_1final.push(gdjs.Level0Code.GDFireRoundButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level0Code.GDFireRoundButtonObjects2_1final, gdjs.Level0Code.GDFireRoundButtonObjects2);
}
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDFireRoundButtonObjects2 */
{for(var i = 0, len = gdjs.Level0Code.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireRoundButtonObjects2[i].setColor("255;184;125");
}
}{runtimeScene.getVariables().getFromIndex(0).setString("PlayerAttack");
}{runtimeScene.getVariables().getFromIndex(1).setString("FireBall");
}}

}


{

gdjs.Level0Code.GDTargetRoundButtonObjects1.length = 0;


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.GDTargetRoundButtonObjects1_1final.length = 0;gdjs.Level0Code.condition0IsTrue_1.val = false;
gdjs.Level0Code.condition1IsTrue_1.val = false;
{
gdjs.Level0Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if( gdjs.Level0Code.condition0IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Level0Code.GDTargetRoundButtonObjects2);
{gdjs.Level0Code.conditionTrue_2 = gdjs.Level0Code.condition1IsTrue_1;
gdjs.Level0Code.condition0IsTrue_2.val = false;
gdjs.Level0Code.condition1IsTrue_2.val = false;
{
gdjs.Level0Code.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level0Code.condition0IsTrue_2.val ) {
{
gdjs.Level0Code.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDTargetRoundButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.Level0Code.conditionTrue_2.val = true && gdjs.Level0Code.condition0IsTrue_2.val && gdjs.Level0Code.condition1IsTrue_2.val;
}
if( gdjs.Level0Code.condition1IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDTargetRoundButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDTargetRoundButtonObjects1_1final.indexOf(gdjs.Level0Code.GDTargetRoundButtonObjects2[j]) === -1 )
            gdjs.Level0Code.GDTargetRoundButtonObjects1_1final.push(gdjs.Level0Code.GDTargetRoundButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level0Code.GDTargetRoundButtonObjects1_1final, gdjs.Level0Code.GDTargetRoundButtonObjects1);
}
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDTargetRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Level0Code.GDTargetRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDTargetRoundButtonObjects1[i].setColor("174;255;173");
}
}{runtimeScene.getVariables().getFromIndex(0).setString("PlayerAttack");
}{runtimeScene.getVariables().getFromIndex(1).setString("Zombie");
}}

}


};gdjs.Level0Code.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "PlayerChoice";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects4Objects = Hashtable.newFrom({"FireBall": gdjs.Level0Code.GDFireBallObjects4});
gdjs.Level0Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Explosion.wav", false, 2, 1);
}}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.Level0Code.GDEnemyObjects3});
gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects3Objects = Hashtable.newFrom({"FireBall": gdjs.Level0Code.GDFireBallObjects3});
gdjs.Level0Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 10, 1);
}}

}


};gdjs.Level0Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7719868);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects4);
gdjs.Level0Code.GDFireBallObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects4Objects, (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getPointX("shoot")), (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects4[i].setAngle(gdjs.evtTools.common.angleBetweenPositions((( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterYInScene()), (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterYInScene())));
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects4[i].addForceTowardPosition((( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterYInScene()), 200, 1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);
gdjs.copyArray(runtimeScene.getObjects("FireBall"), gdjs.Level0Code.GDFireBallObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDEnemyObjects3Objects, gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDEnemyObjects3 */
/* Reuse gdjs.Level0Code.GDFireBallObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects3[i].returnVariable(gdjs.Level0Code.GDEnemyObjects3[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("EnemyChoice");
}
{ //Subevents
gdjs.Level0Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "FireBall";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDZombieObjects4Objects = Hashtable.newFrom({"Zombie": gdjs.Level0Code.GDZombieObjects4});
gdjs.Level0Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Explosion.wav", false, 2, 0.5);
}}

}


};gdjs.Level0Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 10, 1);
}}

}


};gdjs.Level0Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 10, 1);
}}

}


};gdjs.Level0Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level0Code.GDZombieObjects3, gdjs.Level0Code.GDZombieObjects4);


gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].timerElapsedTime("ZombieAttack", 0.50) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8377508);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects4);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects4[i].returnVariable(gdjs.Level0Code.GDEnemyObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level0Code.GDZombieObjects3, gdjs.Level0Code.GDZombieObjects4);


gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].timerElapsedTime("ZombieAttack", 1) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7751132);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects4);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects4[i].returnVariable(gdjs.Level0Code.GDEnemyObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Level0Code.GDZombieObjects3 */

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects3[i].timerElapsedTime("ZombieAttack", 1.50) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects3[k] = gdjs.Level0Code.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDZombieObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("EnemyChoice");
}}

}


};gdjs.Level0Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10860588);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.Level0Code.GDZombieObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDZombieObjects4Objects, 128, 206, "");
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].getBehavior("Tween").addObjectPositionXTween("ZombieMove", 261, "linear", 1000, false);
}
}
{ //Subevents
gdjs.Level0Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level0Code.GDZombieObjects4);

gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].getBehavior("Tween").hasFinished("ZombieMove") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8375756);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDZombieObjects4 */
{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].resetTimer("ZombieAttack");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level0Code.GDZombieObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects3[i].isCurrentAnimationName("Idle") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects3[k] = gdjs.Level0Code.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList14 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "Zombie";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList15 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level0Code.GDHealthObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDHealthObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDHealthObjects3[i].getVariableString(gdjs.Level0Code.GDHealthObjects3[i].getVariables().getFromIndex(0)) == "Enemy" ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDHealthObjects3[k] = gdjs.Level0Code.GDHealthObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDHealthObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);
/* Reuse gdjs.Level0Code.GDHealthObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects3[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level0Code.GDEnemyObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level0Code.GDEnemyObjects3[0].getVariables()).getFromIndex(0))) * 5);
}
}{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects3[i].setCenterXInScene((( gdjs.Level0Code.GDEnemyObjects3.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects3[0].getPointX("Center")) + 4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects3[i].getVariableNumber(gdjs.Level0Code.GDEnemyObjects3[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects3[k] = gdjs.Level0Code.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("GameOver");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects2);
{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects2[i].resetTimer("Damaged");
}
}}

}


};gdjs.Level0Code.eventsList16 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7742332);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects3[i].setAnimationName("AbilityUse");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDPlayerObjects3[i].isCurrentAnimationName("AbilityUse") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDPlayerObjects3[k] = gdjs.Level0Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDPlayerObjects3.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.Level0Code.condition1IsTrue_0.val = true;
        gdjs.Level0Code.GDPlayerObjects3[k] = gdjs.Level0Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDPlayerObjects3.length = k;}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}}

}


{


gdjs.Level0Code.eventsList8(runtimeScene);
}


{


gdjs.Level0Code.eventsList14(runtimeScene);
}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList17 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "PlayerAttack";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects1);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects1[i].timerElapsedTime("Damaged", 0.2) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects1[k] = gdjs.Level0Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects1.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects1[i].removeTimer("Damaged");
}
}}

}


};gdjs.Level0Code.eventsList18 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level0Code.GDEnemyObjects1, gdjs.Level0Code.GDEnemyObjects2);


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects2[i].getVariableNumber(gdjs.Level0Code.GDEnemyObjects2[i].getVariables().getFromIndex(1)) < 7 ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects2[k] = gdjs.Level0Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects2.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("FireBall");
}}

}


{



}


{

/* Reuse gdjs.Level0Code.GDEnemyObjects1 */

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects1[i].getVariableNumber(gdjs.Level0Code.GDEnemyObjects1[i].getVariables().getFromIndex(1)) >= 7 ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects1[k] = gdjs.Level0Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects1.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("Zombie");
}}

}


};gdjs.Level0Code.eventsList19 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10696588);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level0Code.GDFireRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Level0Code.GDTargetRoundButtonObjects2);
{runtimeScene.getVariables().getFromIndex(1).setString("None");
}{for(var i = 0, len = gdjs.Level0Code.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireRoundButtonObjects2[i].setOpacity(100);
}
for(var i = 0, len = gdjs.Level0Code.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDTargetRoundButtonObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireRoundButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Level0Code.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDTargetRoundButtonObjects2[i].setColor("255;255;255");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy");
}}

}


{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Enemy");
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("EnemyAttack");
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects1[i].returnVariable(gdjs.Level0Code.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomFloatInRange(0, 10));
}
}
{ //Subevents
gdjs.Level0Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList20 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "EnemyChoice";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects4Objects = Hashtable.newFrom({"FireBall": gdjs.Level0Code.GDFireBallObjects4});
gdjs.Level0Code.eventsList21 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Explosion.wav", false, 1, 1);
}}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Level0Code.GDPlayerObjects3});
gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects3Objects = Hashtable.newFrom({"FireBall": gdjs.Level0Code.GDFireBallObjects3});
gdjs.Level0Code.eventsList22 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 20, 1);
}}

}


};gdjs.Level0Code.eventsList23 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8055996);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects4);
gdjs.Level0Code.GDFireBallObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects4Objects, (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getPointX("shoot")), (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getPointY("shoot")), "");
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects4[i].setAngle(gdjs.evtTools.common.angleBetweenPositions((( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDEnemyObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDEnemyObjects4[0].getCenterYInScene()), (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterYInScene())));
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects4[i].addForceTowardPosition((( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterXInScene()), (( gdjs.Level0Code.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects4[0].getCenterYInScene()), 200, 1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireBall"), gdjs.Level0Code.GDFireBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDPlayerObjects3Objects, gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDFireBallObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);
/* Reuse gdjs.Level0Code.GDFireBallObjects3 */
/* Reuse gdjs.Level0Code.GDPlayerObjects3 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects3[i].returnVariable(gdjs.Level0Code.GDPlayerObjects3[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("PlayerChoice");
}
{ //Subevents
gdjs.Level0Code.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList24 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "FireBall";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDZombieObjects4Objects = Hashtable.newFrom({"Zombie": gdjs.Level0Code.GDZombieObjects4});
gdjs.Level0Code.eventsList25 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Explosion.wav", false, 1, 0.5);
}}

}


};gdjs.Level0Code.eventsList26 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 10, 1);
}}

}


};gdjs.Level0Code.eventsList27 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\Hit_Hurt.wav", false, 10, 1);
}}

}


};gdjs.Level0Code.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level0Code.GDZombieObjects3, gdjs.Level0Code.GDZombieObjects4);


gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].timerElapsedTime("ZombieAttack", 0.50) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10967404);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects4);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects4[i].returnVariable(gdjs.Level0Code.GDPlayerObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level0Code.GDZombieObjects3, gdjs.Level0Code.GDZombieObjects4);


gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].timerElapsedTime("ZombieAttack", 1) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10964740);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects4);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects4[i].returnVariable(gdjs.Level0Code.GDPlayerObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}
{ //Subevents
gdjs.Level0Code.eventsList27(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Level0Code.GDZombieObjects3 */

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects3[i].timerElapsedTime("ZombieAttack", 1.50) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects3[k] = gdjs.Level0Code.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDZombieObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("PlayerChoice");
}}

}


};gdjs.Level0Code.eventsList29 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10962820);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.Level0Code.GDZombieObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDZombieObjects4Objects, 261, 206, "");
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].getBehavior("Tween").addObjectPositionXTween("ZombieMove", 117, "linear", 1000, false);
}
}
{ //Subevents
gdjs.Level0Code.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level0Code.GDZombieObjects4);

gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects4.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects4[i].getBehavior("Tween").hasFinished("ZombieMove") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects4[k] = gdjs.Level0Code.GDZombieObjects4[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects4.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition1IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10965716);
}
}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDZombieObjects4 */
{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDZombieObjects4.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects4[i].resetTimer("ZombieAttack");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level0Code.GDZombieObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDZombieObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDZombieObjects3[i].isCurrentAnimationName("Idle") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDZombieObjects3[k] = gdjs.Level0Code.GDZombieObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDZombieObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList30 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "Zombie";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList31 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level0Code.GDHealthObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDHealthObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDHealthObjects3[i].getVariableString(gdjs.Level0Code.GDHealthObjects3[i].getVariables().getFromIndex(0)) == "Player" ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDHealthObjects3[k] = gdjs.Level0Code.GDHealthObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDHealthObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDHealthObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects3[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level0Code.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level0Code.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) * 5);
}
}{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects3[i].setCenterXInScene((( gdjs.Level0Code.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Level0Code.GDPlayerObjects3[0].getPointX("Center")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDPlayerObjects3[i].getVariableNumber(gdjs.Level0Code.GDPlayerObjects3[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDPlayerObjects3[k] = gdjs.Level0Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDPlayerObjects3.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setString("GameOver");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects2[i].resetTimer("Damaged");
}
}}

}


};gdjs.Level0Code.eventsList32 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8065828);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);
{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects3[i].setAnimationName("AbilityUse");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects3);

gdjs.Level0Code.condition0IsTrue_0.val = false;
gdjs.Level0Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects3[i].isCurrentAnimationName("AbilityUse") ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects3[k] = gdjs.Level0Code.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects3.length = k;}if ( gdjs.Level0Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Level0Code.GDEnemyObjects3[i].hasAnimationEnded() ) {
        gdjs.Level0Code.condition1IsTrue_0.val = true;
        gdjs.Level0Code.GDEnemyObjects3[k] = gdjs.Level0Code.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Level0Code.GDEnemyObjects3.length = k;}}
if (gdjs.Level0Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects3[i].setAnimationName("Idle");
}
}}

}


{



}


{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), false);
}}

}


{


gdjs.Level0Code.eventsList24(runtimeScene);
}


{


gdjs.Level0Code.eventsList30(runtimeScene);
}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList33 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "EnemyAttack";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects1);

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level0Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level0Code.GDPlayerObjects1[i].timerElapsedTime("Damaged", 0.2) ) {
        gdjs.Level0Code.condition0IsTrue_0.val = true;
        gdjs.Level0Code.GDPlayerObjects1[k] = gdjs.Level0Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level0Code.GDPlayerObjects1.length = k;}if (gdjs.Level0Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level0Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects1[i].removeTimer("Damaged");
}
}}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.Level0Code.GDEnemyObjects3});
gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level0Code.GDPlayerObjects2});
gdjs.Level0Code.eventsList34 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level0Code.GDEnemyObjects2, gdjs.Level0Code.GDEnemyObjects3);


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDEnemyObjects3Objects) == 0;
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WonOrLost"), gdjs.Level0Code.GDWonOrLostObjects3);
{for(var i = 0, len = gdjs.Level0Code.GDWonOrLostObjects3.length ;i < len;++i) {
    gdjs.Level0Code.GDWonOrLostObjects3[i].setString("Player won");
}
}}

}


{

/* Reuse gdjs.Level0Code.GDPlayerObjects2 */

gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDPlayerObjects2Objects) == 0;
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WonOrLost"), gdjs.Level0Code.GDWonOrLostObjects2);
{for(var i = 0, len = gdjs.Level0Code.GDWonOrLostObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDWonOrLostObjects2[i].setString("Enemy won");
}
}}

}


};gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDWonOrLostObjects3Objects = Hashtable.newFrom({"WonOrLost": gdjs.Level0Code.GDWonOrLostObjects3});
gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDRestartButtonObjects3Objects = Hashtable.newFrom({"RestartButton": gdjs.Level0Code.GDRestartButtonObjects3});
gdjs.Level0Code.eventsList35 = function(runtimeScene) {

{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7728156);
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level0Code.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("FireBall"), gdjs.Level0Code.GDFireBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Level0Code.GDFireRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level0Code.GDHealthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level0Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TargetRoundButton"), gdjs.Level0Code.GDTargetRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Level0Code.GDZombieObjects2);
{runtimeScene.getVariables().getFromIndex(1).setString("None");
}{for(var i = 0, len = gdjs.Level0Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDEnemyObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireBallObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireBallObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level0Code.GDZombieObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDZombieObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level0Code.GDHealthObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDHealthObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level0Code.GDFireRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDFireRoundButtonObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level0Code.GDTargetRoundButtonObjects2.length ;i < len;++i) {
    gdjs.Level0Code.GDTargetRoundButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOverGUI");
}
{ //Subevents
gdjs.Level0Code.eventsList34(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Level0Code.GDRestartButtonObjects1.length = 0;

gdjs.Level0Code.GDWonOrLostObjects1.length = 0;


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
{gdjs.Level0Code.conditionTrue_1 = gdjs.Level0Code.condition0IsTrue_0;
gdjs.Level0Code.GDRestartButtonObjects1_1final.length = 0;gdjs.Level0Code.GDWonOrLostObjects1_1final.length = 0;gdjs.Level0Code.condition0IsTrue_1.val = false;
gdjs.Level0Code.condition1IsTrue_1.val = false;
{
gdjs.Level0Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level0Code.condition0IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level0Code.GDRestartButtonObjects2.length = 0;

gdjs.Level0Code.GDWonOrLostObjects2.length = 0;

{gdjs.Level0Code.conditionTrue_2 = gdjs.Level0Code.condition1IsTrue_1;
gdjs.Level0Code.condition0IsTrue_2.val = false;
gdjs.Level0Code.condition1IsTrue_2.val = false;
{
{gdjs.Level0Code.conditionTrue_3 = gdjs.Level0Code.condition0IsTrue_2;
gdjs.Level0Code.GDRestartButtonObjects2_3final.length = 0;gdjs.Level0Code.GDWonOrLostObjects2_3final.length = 0;gdjs.Level0Code.condition0IsTrue_3.val = false;
gdjs.Level0Code.condition1IsTrue_3.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("WonOrLost"), gdjs.Level0Code.GDWonOrLostObjects3);
gdjs.Level0Code.condition0IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDWonOrLostObjects3Objects, runtimeScene, true, false);
if( gdjs.Level0Code.condition0IsTrue_3.val ) {
    gdjs.Level0Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDWonOrLostObjects3.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDWonOrLostObjects2_3final.indexOf(gdjs.Level0Code.GDWonOrLostObjects3[j]) === -1 )
            gdjs.Level0Code.GDWonOrLostObjects2_3final.push(gdjs.Level0Code.GDWonOrLostObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Level0Code.GDRestartButtonObjects3);
gdjs.Level0Code.condition1IsTrue_3.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level0Code.mapOfGDgdjs_46Level0Code_46GDRestartButtonObjects3Objects, runtimeScene, true, false);
if( gdjs.Level0Code.condition1IsTrue_3.val ) {
    gdjs.Level0Code.conditionTrue_3.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDRestartButtonObjects3.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDRestartButtonObjects2_3final.indexOf(gdjs.Level0Code.GDRestartButtonObjects3[j]) === -1 )
            gdjs.Level0Code.GDRestartButtonObjects2_3final.push(gdjs.Level0Code.GDRestartButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level0Code.GDRestartButtonObjects2_3final, gdjs.Level0Code.GDRestartButtonObjects2);
gdjs.copyArray(gdjs.Level0Code.GDWonOrLostObjects2_3final, gdjs.Level0Code.GDWonOrLostObjects2);
}
}
}if ( gdjs.Level0Code.condition0IsTrue_2.val ) {
{
gdjs.Level0Code.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.Level0Code.conditionTrue_2.val = true && gdjs.Level0Code.condition0IsTrue_2.val && gdjs.Level0Code.condition1IsTrue_2.val;
}
if( gdjs.Level0Code.condition1IsTrue_1.val ) {
    gdjs.Level0Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level0Code.GDRestartButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDRestartButtonObjects1_1final.indexOf(gdjs.Level0Code.GDRestartButtonObjects2[j]) === -1 )
            gdjs.Level0Code.GDRestartButtonObjects1_1final.push(gdjs.Level0Code.GDRestartButtonObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level0Code.GDWonOrLostObjects2.length;j<jLen;++j) {
        if ( gdjs.Level0Code.GDWonOrLostObjects1_1final.indexOf(gdjs.Level0Code.GDWonOrLostObjects2[j]) === -1 )
            gdjs.Level0Code.GDWonOrLostObjects1_1final.push(gdjs.Level0Code.GDWonOrLostObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level0Code.GDRestartButtonObjects1_1final, gdjs.Level0Code.GDRestartButtonObjects1);
gdjs.copyArray(gdjs.Level0Code.GDWonOrLostObjects1_1final, gdjs.Level0Code.GDWonOrLostObjects1);
}
}
}if (gdjs.Level0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level0Code.eventsList36 = function(runtimeScene) {

{



}


{


gdjs.Level0Code.condition0IsTrue_0.val = false;
{
gdjs.Level0Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "GameOver";
}if (gdjs.Level0Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level0Code.eventsList35(runtimeScene);} //End of subevents
}

}


};gdjs.Level0Code.eventsList37 = function(runtimeScene) {

{


gdjs.Level0Code.eventsList1(runtimeScene);
}


{


gdjs.Level0Code.eventsList2(runtimeScene);
}


{


gdjs.Level0Code.eventsList4(runtimeScene);
}


{


gdjs.Level0Code.eventsList17(runtimeScene);
}


{


gdjs.Level0Code.eventsList20(runtimeScene);
}


{


gdjs.Level0Code.eventsList33(runtimeScene);
}


{


gdjs.Level0Code.eventsList36(runtimeScene);
}


};

gdjs.Level0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level0Code.GDPlayerObjects1.length = 0;
gdjs.Level0Code.GDPlayerObjects2.length = 0;
gdjs.Level0Code.GDPlayerObjects3.length = 0;
gdjs.Level0Code.GDPlayerObjects4.length = 0;
gdjs.Level0Code.GDPlayerObjects5.length = 0;
gdjs.Level0Code.GDEnemyObjects1.length = 0;
gdjs.Level0Code.GDEnemyObjects2.length = 0;
gdjs.Level0Code.GDEnemyObjects3.length = 0;
gdjs.Level0Code.GDEnemyObjects4.length = 0;
gdjs.Level0Code.GDEnemyObjects5.length = 0;
gdjs.Level0Code.GDZombieObjects1.length = 0;
gdjs.Level0Code.GDZombieObjects2.length = 0;
gdjs.Level0Code.GDZombieObjects3.length = 0;
gdjs.Level0Code.GDZombieObjects4.length = 0;
gdjs.Level0Code.GDZombieObjects5.length = 0;
gdjs.Level0Code.GDGreenFloorObjects1.length = 0;
gdjs.Level0Code.GDGreenFloorObjects2.length = 0;
gdjs.Level0Code.GDGreenFloorObjects3.length = 0;
gdjs.Level0Code.GDGreenFloorObjects4.length = 0;
gdjs.Level0Code.GDGreenFloorObjects5.length = 0;
gdjs.Level0Code.GDFireBallObjects1.length = 0;
gdjs.Level0Code.GDFireBallObjects2.length = 0;
gdjs.Level0Code.GDFireBallObjects3.length = 0;
gdjs.Level0Code.GDFireBallObjects4.length = 0;
gdjs.Level0Code.GDFireBallObjects5.length = 0;
gdjs.Level0Code.GDStatsObjects1.length = 0;
gdjs.Level0Code.GDStatsObjects2.length = 0;
gdjs.Level0Code.GDStatsObjects3.length = 0;
gdjs.Level0Code.GDStatsObjects4.length = 0;
gdjs.Level0Code.GDStatsObjects5.length = 0;
gdjs.Level0Code.GDWonOrLostObjects1.length = 0;
gdjs.Level0Code.GDWonOrLostObjects2.length = 0;
gdjs.Level0Code.GDWonOrLostObjects3.length = 0;
gdjs.Level0Code.GDWonOrLostObjects4.length = 0;
gdjs.Level0Code.GDWonOrLostObjects5.length = 0;
gdjs.Level0Code.GDFireRoundButtonObjects1.length = 0;
gdjs.Level0Code.GDFireRoundButtonObjects2.length = 0;
gdjs.Level0Code.GDFireRoundButtonObjects3.length = 0;
gdjs.Level0Code.GDFireRoundButtonObjects4.length = 0;
gdjs.Level0Code.GDFireRoundButtonObjects5.length = 0;
gdjs.Level0Code.GDTargetRoundButtonObjects1.length = 0;
gdjs.Level0Code.GDTargetRoundButtonObjects2.length = 0;
gdjs.Level0Code.GDTargetRoundButtonObjects3.length = 0;
gdjs.Level0Code.GDTargetRoundButtonObjects4.length = 0;
gdjs.Level0Code.GDTargetRoundButtonObjects5.length = 0;
gdjs.Level0Code.GDCloseRoundButtonObjects1.length = 0;
gdjs.Level0Code.GDCloseRoundButtonObjects2.length = 0;
gdjs.Level0Code.GDCloseRoundButtonObjects3.length = 0;
gdjs.Level0Code.GDCloseRoundButtonObjects4.length = 0;
gdjs.Level0Code.GDCloseRoundButtonObjects5.length = 0;
gdjs.Level0Code.GDRestartButtonObjects1.length = 0;
gdjs.Level0Code.GDRestartButtonObjects2.length = 0;
gdjs.Level0Code.GDRestartButtonObjects3.length = 0;
gdjs.Level0Code.GDRestartButtonObjects4.length = 0;
gdjs.Level0Code.GDRestartButtonObjects5.length = 0;
gdjs.Level0Code.GDGraveyardBackgroundObjects1.length = 0;
gdjs.Level0Code.GDGraveyardBackgroundObjects2.length = 0;
gdjs.Level0Code.GDGraveyardBackgroundObjects3.length = 0;
gdjs.Level0Code.GDGraveyardBackgroundObjects4.length = 0;
gdjs.Level0Code.GDGraveyardBackgroundObjects5.length = 0;
gdjs.Level0Code.GDHealthObjects1.length = 0;
gdjs.Level0Code.GDHealthObjects2.length = 0;
gdjs.Level0Code.GDHealthObjects3.length = 0;
gdjs.Level0Code.GDHealthObjects4.length = 0;
gdjs.Level0Code.GDHealthObjects5.length = 0;
gdjs.Level0Code.GDGamerOverObjects1.length = 0;
gdjs.Level0Code.GDGamerOverObjects2.length = 0;
gdjs.Level0Code.GDGamerOverObjects3.length = 0;
gdjs.Level0Code.GDGamerOverObjects4.length = 0;
gdjs.Level0Code.GDGamerOverObjects5.length = 0;

gdjs.Level0Code.eventsList37(runtimeScene);

return;

}

gdjs['Level0Code'] = gdjs.Level0Code;
